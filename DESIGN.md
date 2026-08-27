---
name: Moataz Osman Portfolio
description: The Neon Dossier — hiring proof on a midnight navy field, with a cyan–magenta–gold rain gradient as the only flourish.
colors:
  absolute-navy: "#010026"
  stage-navy: "#0B1238"
  signal-cyan: "#2CBCE9"
  magenta-pulse: "#DC4492"
  magenta-surface: "#9C3068"
  gold-strike: "#FDCC49"
  cool-mist: "#C4D2E8"
  quiet-grey: "#757575"
  rain-cyan: "#24CBFF"
  rain-magenta: "#FC59FF"
  rain-gold: "#FFBD0C"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Open Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  sm: "2px"
  lg: "16px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "28px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)"
    textColor: "{colors.absolute-navy}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-secondary:
    backgroundColor: "{colors.absolute-navy}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 40px"
    typography: "{typography.title}"
  button-submit:
    backgroundColor: "{colors.gold-strike}"
    textColor: "{colors.absolute-navy}"
    padding: "20px"
    typography: "{typography.label}"
  button-submit-hover:
    backgroundColor: "{colors.magenta-pulse}"
    textColor: "#ffffff"
    padding: "20px"
  input-filled:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.absolute-navy}"
    padding: "12px"
    typography: "{typography.label}"
  card-skill:
    backgroundColor: "{colors.stage-navy}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "20px"
  card-skill-hover:
    backgroundColor: "{colors.magenta-surface}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "20px"
  nav-scrolled:
    backgroundColor: "{colors.magenta-surface}"
    textColor: "#ffffff"
    padding: "24px 0"
  footer:
    backgroundColor: "{colors.magenta-surface}"
    textColor: "{colors.gold-strike}"
    padding: "40px 0"
---

# Design System: Moataz Osman Portfolio

## Overview

**Creative North Star: "The Neon Dossier"**

Proof after dark. The page is a midnight navy field where a recruiter can verify shipped work. Playfair Display carries identity — the name, the section titles, the nav mark — then Open Sans takes over for the dense, work-focused record. High-chroma cyan, magenta, and gold fire as signals (dates, active nav, contact, focus), not as wallpaper.

The rain gradient (cyan → magenta → gold) is the dossier's one flourish: primary contact CTA, section rules, and the paired "Let's talk" rail. Everything else stays flat navy until a hover state. Hover may lift — skill cards shift to magenta surface with a cyan-to-magenta border change; CTAs may pick up a cyan or gold glow — but rest surfaces do not sit on shadows.

This is a hiring artifact, not a template gallery. Density is recruiter-scannable. Ornament is rare and functional.

**Key Characteristics:**
- Absolute Navy canvas with Stage Navy as the only inset field
- Playfair for identity; Open Sans for proof
- Rain gradient reserved for CTA and section rules
- Sharp 2px radii on actions; 16px only on skill cards
- Hover lift, never rest shadows — except the gold timeline-dot glow

## Colors

A dark field with three signal hues. Neutrals exist to quiet inactive chrome, not to lighten the page.

### Primary
- **Absolute Navy** (`#010026`): The page, the body, the secondary CTA fill. This is the dossier cover.
- **Stage Navy** (`#0B1238`): Inset fields — skill cards at rest. Slightly lifted from the canvas without a shadow.

### Secondary
- **Signal Cyan** (`#2CBCE9`): Date pills, photo frame, filled inputs, skill-card rest border. Functional chrome that reads on navy.
- **Magenta Pulse** (`#DC4492`): Experience title, skill-card hover border, submit hover, error text. The second signal.
- **Magenta Surface** (`#9C3068`): Scrolled nav, skill-card hover fill, footer, selection highlight. A darker working magenta.

### Tertiary
- **Gold Strike** (`#FDCC49`): Contact title, footer type, active nav, focus ring, timeline dots, skip-link, submit rest. The third signal — used for "you are here" and conversion.

### Neutral
- **Cool Mist** (`#C4D2E8`): Secondary body copy (about paragraphs). Never a background.
- **Quiet Grey** (`#757575`): Inactive section dots only.

### Named Rules
**The Rain-Only Flourish Rule.** The cyan–magenta–gold gradient (`#24CBFF` → `#FC59FF` → `#FFBD0C`) is allowed on the primary CTA, the paired talk rail, and 2px section rules. It is not a background, not a card fill, and not a text fill.

**The Signal Budget Rule.** Cyan, magenta, and gold together occupy a minority of any viewport. If a layout starts to look neon, pull fills back to Absolute Navy or Stage Navy.

## Typography

**Display Font:** Playfair Display (Georgia, serif)
**Body Font:** Open Sans (system-ui, sans-serif)

**Character:** A theatrical serif for the name and section marks, then a workhorse sans for the proof. The pairing is identity vs. evidence — not decoration vs. decoration.

### Hierarchy
- **Display** (400, clamp 2.25rem–3.75rem, 1.25): Hero name only. Last-name brush overlay is a signature, not a repeating pattern.
- **Headline** (600, 2.25rem): Section titles (`SKILLS`, `EXPERIENCE`, `CONTACT ME`). Often a single signal color, not white.
- **Title** (600, 1.5rem): Footer identity, secondary CTA wordmark (`Let's talk`).
- **Nav mark** (700, 1.875rem, Playfair): `MO` — the smallest display lockup.
- **Body** (400, 0.875rem mobile / 1–1.125rem desktop, 1.75–2.0): Role paragraph and about copy. Max width ~65–72ch.
- **Label** (600, 0.875rem, slight tracking): Buttons, input placeholders (uppercase), date pills, errors.

### Named Rules
**The Two-Voice Rule.** Playfair is identity (name, titles, mark). Open Sans is evidence. Do not set long-form proof in Playfair.

## Layout

A single-column dossier inside a `w-5/6` (~83%) centered column. Hero is side-by-side from `md` (1060px): copy left, portrait right. Skills are paired tiles in a wrapping row. Experience is a vertical ledger (date pill + gold node + copy). Contact is image left, form right from `md`.

Spacing rhythm: 12px inside fields, 20px inside cards, 24px nav padding, 28×12px primary CTA, 64px between hero columns. Section padding is generous (skills/experience ~8rem top; contact up to 12rem desktop).

Breakpoints in use: 480 / 620 / 768 / 1060 / 1200 / 1700. The layout decision that matters is **768** (nav + hero stack) and **1060** (dot nav, desktop density).

Fixed chrome: top nav; right-edge section dots from 1060px.

## Elevation & Depth

Mostly flat. Depth comes from field shifts (Absolute Navy → Stage Navy → Magenta Surface) and from 1px signal borders, not from rest shadows.

Hover may lift: skill cards swap border from cyan/25 to Magenta Pulse and fill to Magenta Surface over 500ms; primary CTA can flood to Signal Cyan; social icons drop to 50% opacity. A soft gold or cyan glow is allowed as a hover state, not a rest treatment.

The one rest glow is structural, not decorative: the gold experience timeline dot uses `2px 8px 18px rgb(253 204 73 / 0.35)`.

### Shadow Vocabulary
- **Timeline glow** (`box-shadow: 2px 8px 18px rgb(253 204 73 / 0.35)`): Gold node on the experience ledger only.
- **Hover glow** (optional, cyan or gold, low alpha): CTA and skill-card hover. Never at rest.

### Named Rules
**The Rest-Is-Flat Rule.** Surfaces do not carry drop shadows at rest. Hover may glow. The timeline dot is the only rest exception.

## Shapes

Sharp on actions, pill on ledger, soft only on skill tiles.

- **Actions:** 2px radius (`rounded-sm`) on primary CTA, skip-link, and the secondary rail's outer edge.
- **Skill cards:** 16px (`rounded-2xl`) — the only large radius on a container.
- **Date pill:** right-side 50% rounding on desktop; square on small screens.
- **Dots:** full circles (section nav, timeline node).
- **Portrait frame:** a 2px Signal Cyan arch (`border-2`, top-rounded 400px) offset behind the photo — a signature silhouette, not a card chrome.
- **Inputs and submit:** square. No radius.

Hairline section rules are 2px tall rain-gradient bars. Skill cards use a 1px Signal Cyan border at 25% opacity.

## Components

### Buttons
Sharp and signal-led.

- **Shape:** 2px radius on the primary pair; square on submit.
- **Primary:** Rain gradient fill, Absolute Navy label, 12px 28px, Open Sans 600. Hover: Signal Cyan fill, white type, 500ms.
- **Secondary (talk rail):** Rain-gradient 2px wrapper, Absolute Navy inner fill, Playfair "Let's talk". Hover: Magenta Pulse type.
- **Submit:** Gold Strike fill, Absolute Navy uppercase label, 20px padding. Hover: Magenta Pulse fill, white type. Disabled: 70% opacity.
- **Focus:** 2px Gold Strike outline, 3px offset, on every control.

### Cards / Containers
- **Skill tile:** 16px corners, Stage Navy fill, 1px Signal Cyan/25 border, 20px padding. Hover: Magenta Surface fill, Magenta Pulse border. No rest shadow.
- **Experience row:** not a card — date pill + gold node + copy. Do not box the role into a panel.
- **Portrait:** photo with offset cyan arch; hover saturates the image.

### Inputs / Fields
- **Style:** Full-bleed Signal Cyan fill, Absolute Navy 600 type, uppercase placeholders, 12px padding, square.
- **Focus:** Gold Strike ring (global `:focus-visible`).
- **Error:** Magenta Pulse text under the field. No red border language — the system has no error fill.
- **Caret:** Absolute Navy.

### Navigation
- **Top bar:** fixed, transparent over the hero; Magenta Surface after scroll. `MO` in Playfair 700 white. Links hover/active to Gold Strike. 24px vertical padding, `w-5/6` inner.
- **Section dots:** fixed right, 12px circles. Inactive Quiet Grey; active Gold Strike with a 24px gold ring.
- **Mobile:** hamburger; full-screen Magenta Surface drawer; Escape and lock scroll.

### Signature: Rain rule
A 2px-tall rain-gradient bar between major sections and under section titles. This is the dossier's horizontal punctuation.

### Signature: Date pill
Signal Cyan capsule, Absolute Navy 600 date. Right-half pill on desktop. Pairs with the gold glowing timeline node — do not restyle one without the other.

## Do's and Don'ts

### Do:
- **Do** keep Absolute Navy as the page. Inset fields use Stage Navy, not a lighter grey.
- **Do** spend Playfair on identity (name, titles, `MO`) and Open Sans on proof.
- **Do** reserve the rain gradient for the primary CTA pair and 2px rules.
- **Do** use Gold Strike for "you are here" (active nav, focus, skip-link, timeline node).
- **Do** keep action radii at 2px and skill-card radii at 16px.
- **Do** allow hover glow / field shift; keep rest surfaces flat.

### Don't:
- **Don't** fill sections with the rain gradient or set long text in gradient fills.
- **Don't** introduce rest drop-shadows on cards, nav, or the footer.
- **Don't** set body copy in Playfair or display titles in Open Sans.
- **Don't** lighten the page to off-white or grey; Cool Mist is text-only.
- **Don't** round inputs or the submit button.
- **Don't** invent a fourth signal hue. Cyan, magenta, and gold are the set.
