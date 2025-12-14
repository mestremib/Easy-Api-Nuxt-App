# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Demo of request

```http
POST http://localhost:3000/api/send-message
Accept: application/json
Content-Type: application/json

{
    "name": "Pedro",
    "phone": "41989898",
    "acceptWhatsappMessage": true,
    "termsAccepted": true,
    "amessage": "message",
    "subject": "subject"
}
```
