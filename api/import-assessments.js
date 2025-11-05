import { getPool } from './db-config.js';

export default async function handler(req, res) {
    const pool = getPool();
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const importedAssessments = req.body;

        if (!Array.isArray(importedAssessments)) {
            res.status(400).json({ error: 'Expected an array of assessments' });
            return;
        }

        // Get existing IDs
        const result = await pool.query('SELECT id FROM assessments');
        const existingIds = new Set(result.rows.map(row => row.id));

        // Filter out duplicates
        const newAssessments = importedAssessments.filter(a => !existingIds.has(a.id));

        // Insert new assessments
        let added = 0;
        for (const assessment of newAssessments) {
            await pool.query(
                'INSERT INTO assessments (id, name, date, answers, scores) VALUES ($1, $2, $3, $4, $5)',
                [
                    assessment.id,
                    assessment.name,
                    assessment.date,
                    JSON.stringify(assessment.answers),
                    JSON.stringify(assessment.scores)
                ]
            );
            added++;
        }

        // Get total count
        const totalResult = await pool.query('SELECT COUNT(*) as count FROM assessments');
        const total = parseInt(totalResult.rows[0].count);

        res.status(200).json({ success: true, added, total });

    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
}
