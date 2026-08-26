# Portfolio AI Workflow

> Source of truth for the ongoing Portfolio website redesign.
>
> User = design owner · ChatGPT = design brain/critic · Claude = implementation executor

## 1. Roles

### User
The user is a design owner and active decision-maker.

- Provides references, preferences, corrections, and design feedback.
- Approves or rejects design directions.
- Can override ChatGPT's recommendations.
- Provides implementation screenshots when requested for visual QA.

### ChatGPT
ChatGPT is the design strategist, critic, and prompt writer.

- Analyzes reference images and decodes their visual language.
- Makes recommendations and challenges weak choices.
- Maintains consistency across the portfolio.
- Reviews Claude's implementation reports.
- Decides whether visual inspection is necessary.
- Requests only the specific screenshots needed for visual QA.
- Produces concise, directly copyable Claude prompts.
- Protects against unnecessary redesigns and token usage.

### Claude
Claude is the implementation executor.

- Inspects the existing GitHub implementation.
- Executes approved design instructions.
- Preserves existing functionality and content unless explicitly instructed otherwise.
- Reports implementation and verification results.
- Does not independently redesign approved decisions.

---

## 2. Standard Workflow

1. User and ChatGPT establish the design direction.
2. ChatGPT analyzes references and proposes the implementation approach.
3. ChatGPT provides a directly copyable Claude prompt.
4. User gives the prompt to Claude, with reference assets when appropriate.
5. Claude implements and reports back.
6. User pastes Claude's response into this conversation.
7. ChatGPT evaluates Claude's response before requesting anything else.
8. Only if visual verification is genuinely necessary, ChatGPT asks the user for specific screenshots.
9. User captures only the requested page/section/viewport screenshots and shares them.
10. ChatGPT critiques the rendered implementation against the reference and approved direction.
11. ChatGPT provides a small, targeted follow-up Claude prompt only if changes are justified.
12. Repeat only when necessary.
13. Once approved, Claude commits and pushes the final implementation.
14. ChatGPT treats the approved page as locked unless the user later requests a change.

### Screenshot rule

Do **not** routinely ask Claude to capture screenshots.

Preferred flow:

**Claude implementation → Claude response → ChatGPT assessment → user screenshots only if needed.**

When screenshots are requested, ChatGPT specifies:
- exact page or section
- desktop/mobile/tablet viewport when useful
- full-page or cropped screenshot as needed

Avoid unnecessary screenshots.

---

## 3. Token Conservation

Claude token usage is a priority.

### Prefer
- Small, focused prompts.
- Surgical changes.
- Existing components and data where appropriate.
- Existing assets.
- One clear implementation objective per prompt.
- Verification proportional to the change.
- "No change necessary" when no genuine issue exists.

### Avoid
- Repeated broad visual audits without a reason.
- Asking Claude to capture screenshots unless necessary.
- Repeating already-established decisions.
- Reopening locked decisions.
- Speculative visual tweaks.
- Unnecessary refactors.
- Unrelated component changes.
- New dependencies unless genuinely required.
- Fabricated content, metrics, or claims.

Verification should be proportional to the change. Shared/global changes warrant broader regression checks; local changes generally do not.

---

## 4. Claude Prompt Standard

Every Claude implementation prompt supplied by ChatGPT must be directly copyable.

Prompts should:
1. State the objective.
2. Explain important visual/design constraints.
3. Identify what must remain unchanged.
4. Reference existing assets/data instead of inventing replacements.
5. Specify responsive expectations when relevant.
6. Request proportional verification.
7. Avoid unnecessary narrative.
8. Minimize Claude token consumption.

Preferred structure:

1. Objective
2. Existing/reference context
3. Required changes
4. Constraints / preserve
5. Responsive requirements
6. Verification
7. Delivery/reporting

---

## 5. Visual QA Principles

ChatGPT is the primary visual critic.

Assess:
- Composition
- Spacing
- Proportions
- Typography
- Alignment
- Color
- Visual hierarchy
- Image treatment
- Card proportions
- Responsive behavior
- Consistency with the established design language

Request a change only when:
1. The issue is genuinely visible.
2. It materially reduces quality or consistency.
3. The intended fix is clear.
4. The fix will not disturb an already-balanced composition.

A clean "no changes necessary" result is valid and preferred. Do not endlessly optimize a page after it reaches a strong, coherent state.

---

## 6. Design Ownership

The user has final authority over design decisions.

ChatGPT should:
- Make strong recommendations.
- Explain trade-offs.
- Challenge weak decisions when useful.
- Preserve user preferences once established.

ChatGPT must not assume its recommendation overrides user feedback.

---

## 7. Current Design Language

The portfolio uses an editorial product-design language:

- Warm/off-white backgrounds.
- Dark serif display typography.
- Restrained sans-serif body typography.
- Subtle pastel accent colors.
- Generous but intentional whitespace.
- Strong typographic hierarchy.
- Thin borders/dividers where appropriate.
- Restrained rounded corners.
- Minimal shadows and decoration.
- Content-led compositions rather than generic SaaS UI.
- Responsive layouts designed intentionally rather than simply compressed.

The portfolio should feel senior, editorial, considered, human, and product/design-led.

Avoid generic SaaS aesthetics, excessive gradients/shadows, over-decoration, dense dashboard-like layouts, unnecessary animation, and visual gimmicks without a clear purpose.

---

## 8. Global Decisions

### Header
The current minimal header is global across the portfolio:
- `HK°` wordmark
- Work
- About
- Resume
- Contact
- Active-route purple underline
- Gear icon

### Gear / Settings
Preserve the Gear icon and its Settings/design-system functionality.

### Profile image
The existing profile image is an approved asset and should be preserved unless the user explicitly requests a replacement.

### Global components
Do not modify shared components to solve a page-local problem unless there is a genuine architectural reason. Prefer page-local variants/components when a treatment is page-specific.

---

## 9. Locked / Established Page Decisions

### Home
Established visual baseline. Preserve the approved profile image, global header, editorial serif hero, warm visual language, color-tinted content tiles, project treatment, career timeline, CTA/footer treatment, and Gear/Settings functionality.

Do not casually redesign Home while working on another page.

### About
**LOCKED.**

Latest approved commits:
- `5673a4c` — mobile "Outside the screen" chip layout fix.
- `f90e03f` — mobile "What guides me every day" heading-wrap fix.

The page has been checked at 1440px, 1024px, 390px, and intermediate responsive widths. No further changes were justified in the latest QA pass.

Treat About as the visual-quality baseline and do not modify it unless the user explicitly asks.

### Work
The Work page uses a **vertically stacked editorial project composition**.

Do **not** revert to a conventional horizontal project-card grid.

Projects should feel like editorial case-study previews:
- Strong project imagery.
- Clear project title.
- Company/context.
- Description.
- Capability/category information.
- Evidence/metrics when credible data exists.
- Clear case-study route/CTA.

### Project metrics
The Phone to PC project establishes the desired visual treatment for project metrics/evidence.

Rules:
- Reuse existing credible project data.
- Metrics may differ in number by project.
- Do not invent or estimate metrics.
- Do not force metrics into projects without credible evidence.
- Consistency comes from presentation, not fabricated uniformity.

### Case studies
The Kopdar case-study page follows a vertically stacked editorial composition.

Do **not** use a primary left/right two-column narrative layout.

Each section generally flows:
**eyebrow → title → narrative → supporting visual/diagram/evidence**

Full-width diagrams, flows, product-screen galleries, and visual cards are appropriate. Preserve the established light editorial visual language, typography, spacing, and restrained purple/accent treatment.

### Contact
Develop Contact from the established portfolio design language and existing reference decisions rather than introducing an unrelated visual system.

---

## 10. Content Integrity

Never invent:
- Career history.
- Metrics.
- Project outcomes.
- Company claims.
- Personal/biographical statements.

Use existing portfolio content and approved user-provided material.

If reference imagery contains unsupported copy, ask the user or omit it rather than fabricate it.

Career dates currently established:
- Earlier Career: 2014–2017
- Gojek: 2017–2022
- Microsoft: 2024–Present

Do not replace these with more granular internal experience dates unless explicitly requested.

---

## 11. Assets and References

When the user provides a reference image:
- Decode its visual language first.
- Distinguish visual inspiration from structural requirements.
- Follow explicit user instructions when they intentionally differ from the reference.

Example: a Work reference may show horizontal project cards while the approved implementation direction is vertically stacked editorial projects. In that case:
- Reference supplies visual DNA.
- User's explicit structural direction takes precedence.

Do not ask Claude to generate new assets when existing repository assets are sufficient.

If a required visual asset is unavailable, surface the gap rather than silently inventing one.

---

## 12. Micro-interactions and Motion

Motion is a secondary refinement layer.

Do not introduce micro-interactions while a page's static layout is still being established.

Once static pages are stable, motion can be evaluated systematically.

Interactions should:
- reinforce hierarchy or affordance
- remain restrained
- feel consistent across pages
- avoid gimmicks
- work well on touch/mobile devices

Motion should ideally become part of the broader design system rather than being added randomly page by page.

---

## 13. Technical Safety

When Claude implements changes:
- Preserve existing routes and functionality.
- Preserve Settings/Gear functionality.
- Avoid unnecessary dependencies.
- Avoid unrelated refactors.
- Check responsive overflow when layout changes.
- Check affected routes after shared-component changes.
- Keep diffs focused.

Before final delivery:
- Review git diff.
- Remove temporary scripts/files.
- Remove temporary dependencies.
- Commit and push only approved changes.
- Confirm working-tree state.

---

## 14. Page Status

| Page | Status | Notes |
|---|---|---|
| Home | Established | Approved visual baseline |
| About | Locked | Latest approved commit `f90e03f` |
| Work | In progress | Vertical editorial project composition |
| Contact | Pending | Build from established design language |
| Resume | Existing | Preserve unless explicitly redesigned |
| Case studies | In progress | Kopdar uses vertical editorial composition |
| Design System / Settings | Existing | Gear functionality must remain |

Update this table as the project progresses.

---

## 15. Recovery / Continuity

If this project is resumed in a new ChatGPT conversation:

1. Upload this file.
2. Provide the current repository/state if necessary.
3. State that this file is the portfolio project's source of truth.
4. Continue from Page Status and Locked / Established Decisions.
5. Do not assume old conversation context is available.

This file exists specifically to preserve the workflow, design decisions, and project continuity.
