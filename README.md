# SamePage — static product PoC

SamePage helps service businesses find mismatched expectations before an agreement is signed. This repository contains a static Astro proof of concept for the marketing site, company dashboard, questionnaire builder, and recipient check.

## Run locally

```bash
npm install
npm run dev
```

## Quality gate

```bash
npm test
npm run build
```

## PoC limitations

Authentication, database persistence, document extraction, OpenAI generation, secure deep links, email, Stripe billing, and analytics are deliberately simulated. See `PRODUCT.md` for the agreed scope and `DESIGN.md` for the visual system.
