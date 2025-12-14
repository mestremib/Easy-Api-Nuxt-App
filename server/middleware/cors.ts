// server/middleware/cors.ts
export default defineEventHandler((event) => {
    // if (!event.path.startsWith('/api')) {
    //     return;
    // }

    // setHeader(event, 'Access-Control-Allow-Origin', 'https://example.com');
    setHeader(event, 'Access-Control-Allow-Origin', '*');
    setHeader(event, 'Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (event.method === 'OPTIONS') {
        event.node.res.statusCode = 204;
        return '';
    }
});
