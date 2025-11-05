import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.POSTGRES_PRISMA_URL || process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default async function handler(req, res) {
    try {
        // Create assessments table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS assessments (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                date TIMESTAMP NOT NULL,
                answers TEXT NOT NULL,
                scores TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Get count of assessments
        const result = await pool.query('SELECT COUNT(*) as count FROM assessments');
        const count = parseInt(result.rows[0].count);

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
