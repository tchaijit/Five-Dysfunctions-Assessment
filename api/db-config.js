import pg from 'pg';
const { Pool } = pg;

// Parse connection string to extract components
function getDbConfig() {
    const connectionString = process.env.POSTGRES_PRISMA_URL || process.env.POSTGRES_URL;

    if (!connectionString) {
        throw new Error('No database connection string found');
    }

    // Return config with explicit SSL settings
    return {
        connectionString: connectionString,
        ssl: {
            rejectUnauthorized: false,
            // Explicitly disable cert verification
            checkServerIdentity: () => undefined
        },
        // Add connection pooling settings for serverless
        max: 1,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 10000,
    };
}

let pool;

export function getPool() {
    if (!pool) {
        pool = new Pool(getDbConfig());
    }
    return pool;
}
