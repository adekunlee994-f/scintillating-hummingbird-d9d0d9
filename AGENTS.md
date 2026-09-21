# Adek Studio Academy site

## Architecture

This TanStack Start / React 19 marketing site deploys on Netlify. The landing experience lives in `src/routes/index.tsx`; global responsive design lives in `src/styles.css`. Academy content is separated into `src/data/academy.ts`, with interactive reusable pieces in `src/components/`.

## Key directories

- `src/routes/`: File-based pages, metadata, and 404.
- `src/components/`: Reusable interactive components.
- `src/data/`: Editable courses, prices, benefits, FAQs, programs, and links.
- `public/`: Assets and Netlify Forms detection document.

## Conventions

- Keep factual academy content in `src/data/academy.ts` where possible.
- Never fabricate testimonials, credentials, outcomes, discounts, awards, or partnerships.
- Use the established color tokens in `src/styles.css`.
- Preserve semantic HTML, keyboard controls, and reduced-motion support.
- Registration posts to `/__forms.html`; add every new field there too.

## Decisions

The site uses a conversion-oriented anchored homepage so visitors from social and WhatsApp can reach key information quickly. Unknown information uses polished, explicitly editable states. Trainer and testimonial areas remain upload-ready until approved assets arrive.
