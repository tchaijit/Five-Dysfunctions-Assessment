export default async function handler(req, res) {
    const envVars = {
        POSTGRES_URL: process.env.POSTGRES_URL ? '✅ Set' : '❌ Missing',
        POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL ? '✅ Set' : '❌ Missing',
        POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING ? '✅ Set' : '❌ Missing',
        POSTGRES_USER: process.env.POSTGRES_USER ? '✅ Set' : '❌ Missing',
        POSTGRES_HOST: process.env.POSTGRES_HOST ? '✅ Set' : '❌ Missing',
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD ? '✅ Set' : '❌ Missing',
        POSTGRES_DATABASE: process.env.POSTGRES_DATABASE ? '✅ Set' : '❌ Missing',
    };

    res.status(200).json({
        message: 'Environment Variables Check',
        variables: envVars,
        allSet: Object.values(envVars).every(v => v === '✅ Set')
    });
}
