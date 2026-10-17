# Design QA — getvout.com

final result: passed

## Comparison target and evidence

- **Source visual truth:** four distinct user-supplied reference pages, used as a shared art-direction brief rather than a single page to copy:
  - `/var/folders/py/qqs759vd1sj4v1k4qmnch5z00000gn/T/codex-clipboard-6e464f71-0a18-48c6-a9d5-60bf6ec633fb.png` — 1120 × 1324 px.
  - `/var/folders/py/qqs759vd1sj4v1k4qmnch5z00000gn/T/codex-clipboard-2f665eac-47e2-4f04-89d9-f38ce1d4f099.png` — 1148 × 1458 px.
  - `/var/folders/py/qqs759vd1sj4v1k4qmnch5z00000gn/T/codex-clipboard-06877461-1cfa-49ed-af96-ca0bbdb06732.png` — 1072 × 1338 px.
  - `/var/folders/py/qqs759vd1sj4v1k4qmnch5z00000gn/T/codex-clipboard-3f2a3d43-6bc6-4cbf-a577-53f0d162cd67.png` — 1078 × 1362 px.
- **Implementation:** local preview at `http://localhost:4173/`, rendered from `/Users/rishav/Downloads/codex/getvout-site/`.
- **Implementation capture:** Codex in-app browser screenshot of the top desktop viewport, 920 × 814 px (CSS viewport approximately 920 × 814; device density was not exposed). The screenshot was reviewed in the browser output and is not separately persisted as a file.
- **State:** desktop project showcase at 1440 px; additionally reviewed the mobile hero and carousel, project navigation, technology marquee, opening transition, mobile menu, proof section, and contact/footer.
- **Normalization:** no pixel scaling applied. The source images are tall captures from four unrelated sites, so a one-to-one pixel comparison is not meaningful. Review focused on the shared visual cues the user requested: generous whitespace, clear editorial hierarchy, controlled color, substantial real imagery, and restrained movement.
- **Focused regions:** hero typography and image composition; project carousel and index rail; dual-lane technology marquee; dark proof section; mobile navigation. These were reviewed alongside the supplied references and the rendered page during the same browser session.

## Fidelity surfaces

- **Typography:** DM Sans supplies the compact UI and body copy; Instrument Serif adds a restrained editorial accent. Desktop and mobile headings keep their hierarchy and wrap cleanly in the rendered preview.
- **Spacing and layout:** the desktop uses a split hero, one expanded project showcase with compact navigation, open service rows, and measured section spacing. At mobile widths the carousel stacks image and project details, and the project index stays horizontally scrollable.
- **Colors and tokens:** warm paper, ink, cobalt, and a small lime accent unify the varied references into one getvout identity. The dark proof and contact sections retain readable contrast in the rendered view.
- **Images and marks:** the hero uses original generated glass artwork; the work section uses locally hosted optimized project images. The wordmark is a typographic lockup with a compact “g” monogram. Project slides stay on getvout.com.
- **Copy and content:** the page has eight sections in the requested order. The selected projects appear as getvout case-study highlights. Verify all outcome figures with the agency before publishing.

## Findings

- **No actionable P0, P1, or P2 issues found.** The implementation deliberately blends the four visual references rather than matching any one unrelated site pixel for pixel. Desktop and mobile navigation, project-carousel controls, and the marquee were checked in the browser.

## Follow-up polish

- **P3:** Replace the current contact email if getvout has a dedicated studio inbox.
- **P3:** Confirm the reported 85%, 40%, 16+, and 100+ figures before publishing the domain.

## Implementation checklist

- [x] Eight landing-page sections and responsive navigation.
- [x] Original hero artwork plus project imagery.
- [x] Eleven-project carousel, dual-direction technology and capability marquee, and split-panel opening animation.
- [x] Reduced-motion handling and scroll reveal behavior.
- [x] Mobile menu open/close and section navigation.
- [x] Production build completed successfully.
- [x] Preview left open for review.
