# Seamless website

The public website for [Seamless](https://seamlessconnect.org/), built with the
Next.js App Router and published as a static export on GitHub Pages.

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

Install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Source files live under
`app/`, and static assets live under `public/`.

## Checks

```bash
npm run lint
npm test
```

`npm test` runs the production build and then verifies the exported homepage,
sponsor page, canonical URLs, and favicon. The static site is written to `out/`.

## Sponsorship content

[`SPONSORS.md`](./SPONSORS.md) is the canonical source for sponsorship details.
The `/sponsors/` route reads that file at build time, so sponsorship copy should
be edited in the Markdown file rather than duplicated in the page component.

## Deployment

The GitHub Actions workflow validates every pull request targeting `main`.
Pushes to `main` and manually dispatched runs also upload `out/` and deploy it
to GitHub Pages. The primary custom domain is `seamlessconnect.org`.
The legacy `seamlessdns.org` domain is served from the separate
[`seamlessdns-redirect`](https://github.com/seamlessdns/seamlessdns-redirect)
repository and redirects visitors to the matching path on the primary domain.

## Repository structure

- `app/` — pages, shared components, and styles
- `public/` — static assets
- `tests/` — smoke tests for the exported site
- `SPONSORS.md` — canonical sponsorship content
- `.github/workflows/nextjs.yml` — validation and Pages deployment

## License

Licensed under the [Apache License 2.0](./LICENSE).
