# Lume Studio - Next.js Template

This project is a Next.js template built with TypeScript, designed for creating stunning websites with smooth animations and modern UI components.

## Getting Started

1.  **Install dependencies:**

    ```bash
    pnpm install
    ```

2.  **Run the development server:**

    ```bash
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Quote request email

The `/get-quote` quote request form and the contact message form send email through Mailtrap SMTP. Configure these
server-side environment variables in the project-root `.env.local` file for local
development and in your hosting provider's environment settings for deployment:

- `SMTP_HOST`: SMTP server (defaults to `sandbox.smtp.mailtrap.io`).
- `SMTP_PORT`: SMTP port (defaults to `2525`; port `465` enables implicit TLS).
- `SMTP_USER` and `SMTP_PASS`: SMTP credentials from your Mailtrap inbox.
- `QUOTE_FROM_EMAIL`: sender address (defaults to `digital@deluve.co`).
- `QUOTE_TO_EMAIL`: destination address (optional; defaults to `digital@deluve.co`).

Keep these variables server-side; do not prefix SMTP credentials with `NEXT_PUBLIC_`.
Restart the Next.js development server after changing `.env.local`.

Mailtrap sandbox credentials send messages to the Mailtrap test inbox, not to a real
recipient. Use the SMTP credentials and host for your production sending domain when
you want quote requests delivered to `QUOTE_TO_EMAIL`.

Without the SMTP credentials, the form reports that sending is
unavailable instead of displaying a false success message.

### Netlify

This repository includes a `netlify.toml` file configured for Netlify's Next.js runtime. To deploy:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Netlify.
3. Keep the build command as `pnpm build`.
4. Let Netlify use the included Next.js plugin configuration.

### Cloudflare Pages

If you intend to deploy this project using Cloudflare Pages, please use the `cf-pages` branch. This branch contains configurations optimized for Cloudflare Pages deployment.

## Key Components

### ScrollView Component [`src/components/scroll-view.tsx`](src/components/scroll-view.tsx)

The `ScrollView` component is a utility component that triggers animations when an element becomes visible in the viewport. It's designed to enhance user experience by adding engaging visual effects as users scroll through the page.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion.dev](https://motion.dev/)

## License

MIT

## Full version

For the full version, go to https://lume.kohi.studio/full-version
