import { neonConfig, Pool } from '@neondatabase/serverless';
import ws from 'ws';

// Configure for WebSocket (needed for serverless)
neonConfig.webSocketConstructor = ws;

let pool;

export function getPool() {
    if (!pool) {
        const connectionString = process.env.POSTGRES_PRISMA_URL || process.env.POSTGRES_URL;

        if (!connectionString) {
            throw new Error('No database connection string found');
        }

        pool = new Pool({
            connectionString,
            // Neon serverless handles SSL automatically
        });
    }
    return pool;
}
