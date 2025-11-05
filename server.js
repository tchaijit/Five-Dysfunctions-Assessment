const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'assessments.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize data file if it doesn't exist
async function initDataFile() {
    try {
        await fs.access(DATA_FILE);
    } catch {
        await fs.writeFile(DATA_FILE, '[]', 'utf8');
        console.log('Created new assessments.json file');
    }
}

// Read assessments from file
async function readAssessments() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading assessments:', error);
        return [];
    }
}

// Write assessments to file
async function writeAssessments(assessments) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(assessments, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('Error writing assessments:', error);
        return false;
    }
}

// API Routes

// Get all assessments
app.get('/api/assessments', async (req, res) => {
    try {
        const assessments = await readAssessments();
        res.json(assessments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read assessments' });
    }
});

// Add new assessment
app.post('/api/assessments', async (req, res) => {
    try {
        const assessments = await readAssessments();
        const newAssessment = req.body;
        assessments.push(newAssessment);
        const success = await writeAssessments(assessments);

        if (success) {
            res.json({ success: true, assessment: newAssessment });
        } else {
            res.status(500).json({ error: 'Failed to save assessment' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to add assessment' });
    }
});

// Delete assessment by ID
app.delete('/api/assessments/:id', async (req, res) => {
    try {
        const assessments = await readAssessments();
        const filteredAssessments = assessments.filter(a => a.id !== req.params.id);
        const success = await writeAssessments(filteredAssessments);

        if (success) {
            res.json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to delete assessment' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete assessment' });
    }
});

// Import assessments (merge with existing)
app.post('/api/assessments/import', async (req, res) => {
    try {
        const currentAssessments = await readAssessments();
        const importedAssessments = req.body;

        // Merge and remove duplicates based on ID
        const existingIds = new Set(currentAssessments.map(a => a.id));
        const newAssessments = importedAssessments.filter(a => !existingIds.has(a.id));
        const merged = [...currentAssessments, ...newAssessments];

        const success = await writeAssessments(merged);

        if (success) {
            res.json({ success: true, added: newAssessments.length, total: merged.length });
        } else {
            res.status(500).json({ error: 'Failed to import assessments' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to import assessments' });
    }
});

// Start server
async function startServer() {
    await initDataFile();
    app.listen(PORT, () => {
        console.log(`
╔════════════════════════════════════════════════════════╗
║   Five Dysfunctions Assessment Server                 ║
║                                                        ║
║   Server running at: http://localhost:${PORT}           ║
║   Data file: assessments.json                         ║
║                                                        ║
║   Open http://localhost:${PORT} in your browser        ║
╚════════════════════════════════════════════════════════╝
        `);
    });
}

startServer();
