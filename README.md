# Hartwell & Partners

Demo website for Hartwell & Partners, a law firm I made up for my portfolio. The business, people and prices are fictional; the code is real.

A law firm advising businesses and private clients on contracts, disputes, property and employment.

## Status

In progress. The groundwork is done: brand colors and fonts, the contact form with Telegram delivery, metadata, tests and a Lighthouse check. The pages below are next.

Pages:

- [ ] Home
- [ ] Practice areas
- [ ] Team
- [ ] Insights (3 articles)
- [ ] Contact

Features:

- [ ] Consultation request form
- [ ] Practice area filter
- [ ] Insights blog with three articles

## Design

Editorial and restrained: deep navy on ivory with a burgundy accent and serif headlines.

| Token | Value |
| --- | --- |
| bg | `#F7F3EA` |
| surface | `#FFFFFF` |
| fg | `#14213D` |
| muted | `#4A5468` |
| border | `#D9D2C3` |
| accent | `#7A1F2B` |
| on accent | `#FFFFFF` |
| link | `#7A1F2B` |
| error | `#A1201B` |
| radius | `2px` |

Headings use Source Serif 4, body text uses Source Sans 3. Both are self-hosted from `app/fonts` through `next/font/local`.

## Stack

- Next.js 16 (App Router), React 19
- TypeScript in strict mode
- Tailwind CSS 4
- zod for form validation
- Vitest and Testing Library
- Lighthouse CI

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run check` | Type check, lint and tests |
| `npm run lighthouse` | Builds the site, runs Lighthouse five times on mobile and fails if the median score in any category drops below 95 or the median LCP goes above 2.5 s |

## Contact form

Enquiries go to a Telegram chat. Copy `.env.example` to `.env.local` and fill in `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`. Without them the form runs in demo mode and tells the visitor that nothing was sent.

## Deploying

Import the repository in Vercel and add the two Telegram variables if the form should deliver leads. Update `url` in `content/site.ts` once the site has its final domain.

## Credits

Fonts are licensed under the SIL Open Font License; the license texts are in `app/fonts`. Photos will come from Unsplash and are credited in the site footer.

## License

Code: MIT
