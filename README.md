# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Waitlist Backend (Resend)

The waitlist form on the landing page posts to `POST /api/waitlist` and stores signups as Resend contacts.

### Required Environment Variables

- `RESEND_API_KEY` - API key from Resend
- `RESEND_FROM_EMAIL` - sender used for waitlist confirmation mails (must match a verified Resend domain)

### Optional Environment Variables

- `RESEND_REPLY_TO` - reply-to address used in confirmation mails

Create a local env file:

```sh
cp .env.example .env
```

### Local Verification

1. Start the app with `pnpm dev`
2. Open the landing page and submit the waitlist form
3. Check that contacts appear in your Resend dashboard
4. Check that the signup receives a confirmation mail

This project runs Astro in `server` output mode with the Node adapter, so deployment needs a Node-compatible runtime.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
