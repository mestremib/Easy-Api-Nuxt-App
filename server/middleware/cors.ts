const ALLOWED_HEADERS =
    'Content-Type, Authorization, Accept, Accept-Language, Origin, User-Agent, Priority';

export default defineEventHandler((event) => {
    if (!event.path.startsWith('/api')) {
        return;
    }

    setHeader(event, 'Access-Control-Allow-Origin', '*');
    setHeader(event, 'Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    setHeader(event, 'Access-Control-Allow-Headers', ALLOWED_HEADERS);

    if (event.method === 'OPTIONS') {
        event.node.res.statusCode = 204;
        return '';
    }
});
