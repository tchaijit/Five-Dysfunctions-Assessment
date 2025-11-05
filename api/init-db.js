import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    try {
        // Create assessments table if it doesn't exist
        await sql`
            CREATE TABLE IF NOT EXISTS assessments (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                date TIMESTAMP NOT NULL,
                answers TEXT NOT NULL,
                scores TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        // Get count of assessments
        const { rows } = await sql`SELECT COUNT(*) as count FROM assessments`;
        const count = parseInt(rows[0].count);

        res.status(200).json({
            success: true,
            message: 'Database initialized successfully',
            assessmentsCount: count
        });

    } catch (error) {
        console.error('Database initialization error:', error);
        res.status(500).json({
            error: 'Failed to initialize database',
            details: error.message
        });
    }
}
