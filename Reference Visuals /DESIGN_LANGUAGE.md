# Portfolio2026 — Design Language

## Core Principle

> **Vertical hierarchy, flexible content composition.**

Every major section should generally establish:

**EYEBROW → TITLE → CONTENT / NARRATIVE → EVIDENCE / VISUAL**

The content itself may be horizontal, vertical, a grid, timeline, full-width visual, diagram, cards, or mixed composition.

## Visual Direction

- Light, warm, editorial aesthetic.
- Work, About, Contact, and approved Phone → PC references establish the visual family.
- Warm/off-white surfaces.
- Dark editorial typography.
- Restrained accent colours.
- Generous whitespace.
- Subtle borders/dividers.
- Sophisticated, personal, thoughtful, contemporary.

Avoid:
- dark-theme-first direction
- generic SaaS landing pages
- dashboards
- presentation decks
- excessive componentisation
- dense grids
- excessive cards/borders/dividers
- excessive symmetry
- decorative UI patterns

## Section Hierarchy

### Eyebrow
Small, restrained contextual label before the title.

### Title
Strong editorial statement communicating the section's idea.

### Content
Human, concise, specific supporting narrative.

### Evidence
Visuals, metrics, diagrams, product screens, flows, cards, timelines, videos, quotes, or other proof.

Evidence should illuminate or prove the preceding narrative.


## Page-Level Composition Rule — NEW LOCKED RULE

> **Do not establish a recurring left-rail/right-content architecture across the page.**

The portfolio must not repeatedly use a template where:
- the eyebrow/title/narrative sits in a left column, and
- the section's evidence/content sits in a right column.

This remains true even when the individual section looks aesthetically good.

### What is allowed

The section hierarchy remains vertical:

**EYEBROW → TITLE → CONTENT / NARRATIVE → EVIDENCE / VISUAL**

After that hierarchy is established, the content may be arranged:
- horizontally
- vertically
- in a grid
- as a timeline
- as a sequence
- as a full-width visual
- as a diagram
- as a selective card group
- as a mixed composition

### What is not allowed

Do not turn the above flexibility into a repeated page template such as:

**LEFT: section introduction | RIGHT: section content**

Do not repeat the same two-column relationship across multiple sections.

### Composition must create rhythm

A long page should vary its section composition.

For example:

1. Full-width editorial statement
2. Horizontal conceptual sequence
3. Large visual/evidence treatment
4. Vertical list
5. Selective grid
6. Full-width case-study presentation

The exact sequence is content-dependent. The important rule is **variation rather than a repeated structural template**.

### Cards are supporting devices, not the page's primary grammar

If removing the card borders would make the content substantially stronger, prefer the editorial treatment.

Use cards when grouping, comparison, or interaction genuinely benefits from containment.

Do not automatically place every idea, metric, principle, or item inside a bordered module.

### Design test

Before approving a page, temporarily ignore colour, typography, imagery, and polish and inspect only the wireframe.

If several consecutive sections can be described as:

**"text on the left, content on the right"**

the composition is wrong and must be redesigned.


## Horizontal Content Is Allowed

Example:

**HOW I LEAD**

# I bring clarity to complexity.

Supporting narrative.

**01** Make complexity visible   **02** Design for the system   **03** Give design a seat at the decision table   **04** Build capability, not dependency

This is valid because the section hierarchy remains vertical while the content is horizontal.

## Prohibited Layout

Do not repeatedly use:

**Narrative / title LEFT | evidence RIGHT**

“No left/right layout” means no persistent section-level narrative/evidence split. It does not mean every content item must stack vertically.

## Do Not Confuse a Tall Page With a Vertical Layout

A page can be tall and still consist of repeated two-column sections. Repeated `Left | Right` templates are not the intended composition.

## Cards

Cards are allowed but should not become the default container. Mix typography, whitespace, imagery, diagrams, metrics, cards, timelines, and full-width treatments.

## Rhythm

Avoid making every section structurally identical. Create rhythm through changing evidence formats while keeping the visual system consistent.

## Phone → PC Reference

The approved Phone → PC structure provides a strong grammar:

**Eyebrow → Title → Narrative → Evidence → Insight**

Borrow this grammar rather than mechanically copying every component.

## Motion

Subtle, intentional, meaningful. Prefer existing motion infrastructure. Avoid animation for decoration alone.

## Responsive

Desktop composition should be intentional. Mobile may stack horizontal content, collapse grids, simplify diagrams, and transform cards while preserving hierarchy.

## Visual QA

Before approval ask:
- Is it light, warm, editorial?
- Does it belong to the existing portfolio family?
- Is the hierarchy Eyebrow → Title → Content → Evidence?
- Is there an accidental narrative-left/evidence-right split?
- Is horizontal content being used appropriately?
- Are cards selective?
- Is there enough whitespace?
- Does it avoid dashboard/deck aesthetics?
- Does evidence support the narrative?

If it fails, correct it rather than rationalizing the deviation.

## Decision Priority

1. Explicit user decision
2. Approved reference
3. This document
4. Existing design system
5. General conventions


## Mandatory Wireframe-First Process

Before styling or generating a visual concept, construct the page at wireframe level.

The sequence is:

1. **Lock the actual content** — use verified source content only.
2. **Establish each section's vertical hierarchy** — Eyebrow → Title → Content / Narrative → Evidence.
3. **Review the whole-page wireframe** — check the page as structure, ignoring colour, typography, imagery, and polish.
4. **Introduce compositional variation** — choose horizontal, vertical, grid, timeline, full-width, open typography, visual, or selective-card treatment based on the content.
5. **Apply the visual language**.
6. **Perform a final rulebook audit before approval**.

Do not skip the wireframe review and go directly from content to a polished visual.

### Whole-Page Wireframe Test

A page must be rejected and reworked if several consecutive sections can be described as:

> **"section introduction on the left + section content on the right."**

The fact that each individual section looks attractive does not make the repeated architecture acceptable.

### Content Lock Before Visual Generation

When generating a visual of an existing portfolio page:

- Use only content verified from the current repository, live implementation, or explicitly supplied source.
- Do not invent metrics.
- Do not invent outcomes.
- Do not invent project descriptions.
- Do not invent career facts.
- Do not invent navigation labels.
- Do not replace existing copy with plausible marketing copy.
- If content cannot be verified, mark it as unavailable rather than fabricating it.

**Visual polish never justifies content invention.**

### Final Pre-Generation Audit

Before generating or approving a page, explicitly check:

- Is the content verified?
- Is the hierarchy vertical?
- Does the page avoid repeated left-intro/right-content architecture?
- Is horizontal content being used because the content calls for it, rather than because the layout system makes it convenient?
- Is there meaningful compositional variation?
- Are cards selective rather than the default container?
- Does the page avoid dashboard/deck/generic SaaS aesthetics?
- Does the page belong to the established portfolio visual family?

If any answer is "no", do not proceed to final visual generation.
