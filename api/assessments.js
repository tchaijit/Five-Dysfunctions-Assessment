import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        if (req.method === 'GET') {
            // Get all assessments
            const { rows } = await sql`
                SELECT * FROM assessments
                ORDER BY date DESC
            `;

            // Parse JSON fields
            const assessments = rows.map(row => ({
                id: row.id,
                name: row.name,
                date: row.date,
                answers: JSON.parse(row.answers),
                scores: JSON.parse(row.scores)
            }));

            res.status(200).json(assessments);

        } else if (req.method === 'POST') {
            // Add new assessment
            const { id, name, date, answers, scores } = req.body;

            await sql`
                INSERT INTO assessments (id, name, date, answers, scores)
                VALUES (${id}, ${name}, ${date}, ${JSON.stringify(answers)}, ${JSON.stringify(scores)})
            `;

            res.status(200).json({ success: true, assessment: req.body });

        } else {
            res.status(405).json({ error: 'Method not allowed' });
        }

    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error', details: error.message });
    }
}
