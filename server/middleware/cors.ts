// server/middleware/api-cors.ts
export default defineEventHandler((event) => {
    if (!event.path.startsWith('/api')) {
        return;
    }

    setHeader(event, 'Access-Control-Allow-Origin', '*');
    setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization, priority');
    setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');

    if (event.method === 'OPTIONS') {
        event.node.res.statusCode = 204;
        return '';
    }
});
