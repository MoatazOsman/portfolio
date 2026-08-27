# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Moataz Osman for a full-time frontend or mobile engineering role. They arrive time-poor, scanning for seniority, stack fit, and verifiable shipped work.

## Product Purpose

A personal portfolio that lets a hiring visitor verify real products Moataz has shipped, understand his seniority and frontend/mobile stack, and then contact him. Success is proof first, then shortlist, with contact (form, email, WhatsApp, or LinkedIn) as the conversion.

## Positioning

A working frontend and mobile engineer with 9+ years shipping production products — including African/MENA fintech (UBA, QIIB, Mahfazti), Qatar World Cup transit (SILA), Italian legal-tech (Avvocatoflash), crypto (Amon Wallet), and current Zourx platform work — not a generic template portfolio of sample apps.

## Operating Context

Single-page site, statically exported and hosted on GitHub Pages at `https://MoatazOsman.github.io/portfolio/`. A recruiter typically lands from LinkedIn, GitHub, or a shared URL, then: identity and stack → employment history with live web/store links → contact. There is no login, CMS, or backend; FormSubmit handles the contact form.

## Capabilities and Constraints

Confirmed on the live page:

- Identity (name, photo, role: frontend and mobile engineer)
- Skills grid (Angular, RxJS, TypeScript, JavaScript, Ionic, Flutter, React, Next.js, Node.js, NestJS, CSS, HTML, Bootstrap, Tailwind, CircleCI, Jenkins)
- Experiences with live App Store, Google Play, AppGallery, and web links
- Contact form (name, email, message) plus email, LinkedIn, GitHub, and WhatsApp
- Static Next.js export; production `basePath` is `/portfolio`

Constraints:

- No server runtime in production (GitHub Pages static hosting)
- Testimonials in code are lorem ipsum placeholders; do not invent quotes, customers, or social proof
- A Projects section exists in code but is not on the live page; its copy is mismatched with real products — treat as placeholder to replace or drop
- Do not fabricate extra case studies, metrics, or claims beyond the experience record

Open (undecided):

- Current open-to-work / availability status
- Preferred location, timezone, or remote policy for a new role

## Brand Commitments

- Name: Moataz Osman; nav mark: MO
- Email: moatazmohamedahmed606@gmail.com
- Profile photo: `src/assets/moataz.webp`
- Contact image: `src/assets/contact-image.webp`
- LinkedIn: `http://www.linkedin.com/in/moataz-mohamed-ahmed/`
- GitHub: `https://github.com/MoatazOsman`
- WhatsApp: `https://wa.me/201068913918`
- Incumbent voice on the site is first-person, direct, and work-focused; keep factual claims aligned with the experience record

## Evidence on Hand

Canonical record: `src/data/experience.ts` (InTouch Technology / Zourx, Avvocatoflash, Amon.Tech, GBM / SILA & QIIB, Vericash / UBA & Mahfazti), with live product URLs.

Also on hand: profile photo, skills illustration, contact image, store/web icons, skill SVGs.

Must not fabricate: testimonials (current copy is placeholder Latin), unused Projects-section descriptions, download counts or user numbers not already in the experience record, press, or awards.

## Product Principles

1. Proof before personality: live shipped products are the argument.
2. Make seniority and stack scannable for a time-poor recruiter.
3. Contact is the conversion; every path should end there without friction.
4. Never invent social proof or claims the experience record does not support.
5. Keep identity facts (name, photo, email, socials, employment) accurate.
