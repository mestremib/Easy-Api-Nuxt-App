const toBool = (value: any) => {
    if (!value || ['0', 'no', 'não', 'off', 'false'].includes(value)) {
        return false;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length > 0;
    }

    return true;
};

export default defineAppConfig({
    debugOn: toBool(process.env.NUXT_APP_DEBUG ?? process.env.NUXT_APP_DEBUG_ON ?? false),
    waTicket: {
        acceptMessages: toBool(process.env.NUXT_WA_TICKET_ACCEPT_MESSAGES ?? false),
        apiToken: process.env.NUXT_WA_TICKET_API_TOKEN ?? '',
        apiUrl: process.env.NUXT_WA_TICKET_API_URL ?? '',
        targetNumber: process.env.NUXT_WA_TICKET_TARGET_NUMBER ?? '',
    },
});
