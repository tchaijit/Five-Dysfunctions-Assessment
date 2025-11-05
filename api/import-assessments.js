import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
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
        const { rows } = await sql`SELECT id FROM assessments`;
        const existingIds = new Set(rows.map(row => row.id));

        // Filter out duplicates
        const newAssessments = importedAssessments.filter(a => !existingIds.has(a.id));

        // Insert new assessments
        let added = 0;
        for (const assessment of newAssessments) {
            await sql`
                INSERT INTO assessments (id, name, date, answers, scores)
                VALUES (
                    ${assessment.id},
                    ${assessment.name},
                    ${assessment.date},
                    ${JSON.stringify(assessment.answers)},
                    ${JSON.stringify(assessment.scores)}
                )
            `;
            added++;
        }

        // Get total count
        const { rows: totalRows } = await sql`SELECT COUNT(*) as count FROM assessments`;
        const total = parseInt(totalRows[0].count);

        res.status(200).json({ success: true, added, total });

    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
}
