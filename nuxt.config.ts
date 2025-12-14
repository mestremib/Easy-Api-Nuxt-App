// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    nitro: {
        routeRules: {
            '/api/**': {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, priority',
                },
            },
        },
    },
    runtimeConfig: {
        // waticket
        waTicketApiToken: process.env.NUXT_WA_TICKET_API_TOKEN || '',
        waTicketApiUrl: process.env.NUXT_WA_TICKET_API_URL || '',

        public: {
            finalSiteUrl: process.env.NUXT_PUBLIC_FINAL_SITE_URL || '',
        },
    },
});
