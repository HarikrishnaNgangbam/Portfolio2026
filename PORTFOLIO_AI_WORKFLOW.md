# Portfolio2026 — AI Working Workflow

> **Source of truth for how we work on the Portfolio website.**
>
> **User = design owner · ChatGPT = design brain / critic · Claude = implementation executor**

## 1. Purpose

This document is the master operating rulebook for the Portfolio2026 redesign.

It defines:
- who makes decisions
- how design and narrative decisions are made
- how Claude is used
- how approved references are protected
- how iterations are reviewed
- where detailed visual, narrative, and implementation rules live

The detailed rules are maintained in:
- `DESIGN_LANGUAGE.md` — how the portfolio should look
- `PORTFOLIO_NARRATIVE.md` — what the portfolio should communicate
- `IMPLEMENTATION_RULES.md` — how changes should be built
- `REFERENCE_INDEX.md` — which screens/pages are approved references

Claude must read and follow all four before substantial implementation work.

---

## 2. Roles

### User — Design Owner

The user has final authority over:
- visual direction
- narrative
- UX decisions
- information architecture
- what is approved or rejected
- what becomes locked

### ChatGPT — Design Brain / Critic

ChatGPT is responsible for:
- understanding the portfolio strategy
- discussing narrative
- developing design directions
- evaluating implementation
- identifying deviations
- protecting locked decisions
- creating concise, directly copyable Claude execution prompts

### Claude — Implementation Executor

Claude is responsible for:
- inspecting the repository
- implementing explicitly agreed changes
- reusing the existing architecture
- following the project documentation
- reporting what it changed

Claude is **not** the design decision-maker.

> **We decide. Claude executes.**

---

## 3. Source-of-Truth Hierarchy

When sources conflict, use this order:

1. Explicitly locked user decision
2. Approved reference in `REFERENCE_INDEX.md`
3. `DESIGN_LANGUAGE.md`
4. `PORTFOLIO_NARRATIVE.md`
5. `IMPLEMENTATION_RULES.md`
6. Existing repository patterns
7. General design conventions

A generic UI convention must never override a locked project decision.

---

## 4. Standard Workflow

### Phase 1 — Inspect

Before a substantial change:
- inspect the current implementation
- identify affected components
- identify reusable components
- check existing assets
- check current responsive behaviour
- check the live/deployed state when relevant

### Phase 2 — Discuss

User + ChatGPT decide:
- what problem we are solving
- what the narrative should be
- what the visual direction should be
- what is changing
- what must remain unchanged

### Phase 3 — Lock

Explicit decisions become locked when approved.

Approved visual references are recorded in `REFERENCE_INDEX.md`.

### Phase 4 — Execute

ChatGPT creates a focused Claude prompt.

The prompt should be directly copy-pasteable and contain only the information Claude needs to execute the agreed change.

### Phase 5 — Review

After implementation:
- inspect Claude's summary
- inspect the resulting implementation/live page
- compare against the agreed narrative
- compare against the design language
- compare against the specific approved reference where one exists

### Phase 6 — Refine

If something is wrong:
1. identify the exact deviation
2. explain the intended correction
3. reference the relevant locked rule
4. issue a targeted correction prompt

Do not restart the entire design unless the user explicitly decides to.

---

## 5. Claude Token Conservation

Claude is an execution resource, not the place for open-ended exploration.

Prefer:
- small prompts
- narrow scope
- surgical changes
- existing components
- existing assets
- explicit acceptance criteria

Avoid asking Claude to:
- rethink the whole portfolio
- explore broad alternatives
- redesign approved pages
- refactor unrelated code
- rebuild working components
- regenerate existing assets
- perform unnecessary audits

A prompt should tell Claude what to **build/update/refine**, not ask Claude what the portfolio should become.

---

## 6. Reference Protection

An approved reference is a source of truth, not loose inspiration.

When a reference exists:
- study its hierarchy
- study its spacing
- study typography scale
- study visual treatment
- study content density
- study composition
- preserve the approved visual language

Do not:
- silently improve a locked composition
- reinterpret an approved reference into a familiar UI pattern
- substitute a two-column layout because it is easier to implement
- treat an exploratory mockup as approved

If the desired change conflicts with a locked reference, stop and bring the decision back to User + ChatGPT.

---

## 7. The Critical Layout Rule

> **Hierarchy is vertical. Orientation is flexible.**

Every major section should generally establish:

**EYEBROW → TITLE → CONTENT / NARRATIVE → EVIDENCE / VISUAL**

The content itself may then be:
- horizontal
- vertical
- a grid
- a timeline
- a full-width visual
- a diagram
- cards
- mixed composition

### Explicitly prohibited interpretation

"No left/right layout" does **not** mean that all content must be vertically stacked.

It means do not use a persistent section-level pattern of:

**Narrative / title on LEFT | evidence / content on RIGHT**

Horizontal content inside a vertically established section is allowed.

---

## 8. Visual Direction

The portfolio uses:
- light, warm surfaces
- editorial typography
- restrained colour
- generous whitespace
- purposeful visual evidence
- sophisticated, personal, contemporary presentation

Avoid:
- dashboard aesthetics
- presentation-deck aesthetics
- generic SaaS styling
- excessive cards
- excessive borders
- excessive symmetry
- dense module grids
- decorative UI patterns

Detailed rules live in `DESIGN_LANGUAGE.md`.

---


## 8A. Page Composition Protection

A recurring left-rail/right-content structure is explicitly prohibited.

Do not interpret "horizontal content is allowed" as permission to make every section a two-column layout.

Before approving a page, inspect its wireframe independently of styling:
- If multiple sections repeat **intro on left + content on right**, reject the composition.
- Require meaningful variation between section structures.
- Horizontal content is allowed only when it serves the content and does not become the page-wide template.

> **Hierarchy is vertical. Orientation is flexible. Page composition must have rhythm.**



## 8B. Mandatory Wireframe-First Review

Before generating or approving a visual design:

1. Lock verified content.
2. Establish each section's vertical hierarchy.
3. Review the entire page as a wireframe without visual styling.
4. Reject repeated left-intro/right-content architecture.
5. Introduce deliberate variation in content composition.
6. Apply the design language.
7. Run the final rulebook audit.

Do not jump directly from content to a polished visual.

### Content Verification Rule

When the task concerns an existing page, use only verified content from the repository, live implementation, or explicitly supplied source.

Never invent metrics, outcomes, project descriptions, career facts, labels, or marketing copy to fill visual space.

If content is unavailable, leave it unresolved rather than fabricating it.

### Generation Gate

A visual should not be generated for approval if:
- content has not been verified,
- the wireframe has not been checked,
- repeated left-intro/right-content architecture remains,
- compositional variation is insufficient,
- cards have become the dominant page grammar,
- or the visual language audit fails.

## 9. Narrative Direction

The portfolio's central thesis is:

> **I design through complexity.**

The site should demonstrate how the designer thinks and makes decisions, not simply list deliverables.

Detailed narrative lives in `PORTFOLIO_NARRATIVE.md`.

---

## 10. Implementation Discipline

Implementation should:
- reuse existing components
- preserve unrelated pages
- preserve locked decisions
- avoid invented content/metrics
- maintain accessibility
- maintain responsive behaviour
- maintain performance
- pass build/type checks

Detailed implementation rules live in `IMPLEMENTATION_RULES.md`.

---

## 11. Locked vs Exploratory

### LOCKED
- Explicitly approved decisions
- Approved reference screens
- Approved narrative
- Established design language

### EXPLORATORY
- Concepts under discussion
- Unapproved mockups
- Alternative compositions
- Experiments

Exploratory work must never silently become a new source of truth.

---

## 12. Visual QA

A page is not correct merely because it looks good.

Check both:

### A. System fit
Does it follow `DESIGN_LANGUAGE.md`?

### B. Reference fit
Where an approved reference exists, does it respect that reference?

A visually polished design can still be wrong for this portfolio.

---

## 13. Regression / Rollback

If a change makes an approved page or component worse:
- identify the last approved state
- revert or restore that state
- then make the smaller required change

Do not continue iterating from a known-bad baseline simply because work has already been done.

---

## 14. Completion Standard

A change is complete when:
- the agreed narrative is represented
- the approved visual language is preserved
- the relevant reference is respected
- the prohibited layout patterns are absent
- no unsupported claims were introduced
- responsive behaviour works
- the build works
- unrelated areas remain intact

---

## 15. Quick Start for Claude

Before implementation:

> Read `PORTFOLIO_AI_WORKFLOW.md`, `DESIGN_LANGUAGE.md`, `PORTFOLIO_NARRATIVE.md`, `IMPLEMENTATION_RULES.md`, and the relevant entries in `REFERENCE_INDEX.md`. Treat approved references and explicit user decisions as locked. Implement only the requested change. Do not independently redesign or reinterpret the project.
