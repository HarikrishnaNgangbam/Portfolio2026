# Portfolio2026 — Implementation Rules

## Purpose

Defines how changes are implemented in the GitHub repository while preserving the agreed design and narrative and conserving Claude tokens.

## 1. Execution Principle

> **Claude executes decisions; Claude does not make the decisions.**

User + ChatGPT own strategy, narrative, UX, visual direction, prioritization, critique, and final approval.

Claude inspects and implements.

## 2. Read Before Editing

Before substantial work, read:
- `PORTFOLIO_AI_WORKFLOW.md`
- `DESIGN_LANGUAGE.md`
- `PORTFOLIO_NARRATIVE.md`
- `IMPLEMENTATION_RULES.md`
- relevant `REFERENCE_INDEX.md` entries

## 3. Minimal Change

Inspect first, then make the smallest change that solves the agreed problem.

Do not:
- redesign unrelated areas
- refactor working components unnecessarily
- replace working assets without reason
- introduce a new design system
- change routing unnecessarily
- change approved content without instruction

## 4. Component Reuse

Prefer existing:
- typography
- buttons
- cards
- navigation
- section components
- case-study blocks
- animation/reveal infrastructure
- icons
- design tokens
- assets

Create new components only when necessary.

## 5. Content Integrity

Never invent:
- metrics
- facts
- outcomes
- career history
- product screenshots
- media coverage
- user quotes

Use explicit placeholders where information is missing.

## 6. Asset Rules

Reuse existing assets first.

For new assets:
- define the communication goal
- use descriptive filenames
- match the established visual language
- create independent assets when separate files are required
- never crop a composite when the requirement is to create separate assets

Do not invent file paths.

## 7. Claude Prompt Discipline

Prompts should be:
- directly copyable
- execution-ready
- narrowly scoped
- explicit about what remains unchanged
- explicit about acceptance criteria

Recommended structure:
**Context → Locked references → Exact changes → Preserve → Acceptance criteria**

## 8. Iteration

If implementation is wrong:
1. identify the exact deviation
2. state the intended correction
3. reference the rule/reference
4. request only the correction

Avoid full redesign prompts for local problems.

## 9. Visual QA

Check:
- Eyebrow → Title → Content → Evidence hierarchy
- no persistent narrative-left/evidence-right split
- horizontal content is allowed where appropriate
- cards are selective
- light/warm/editorial visual language
- sufficient whitespace
- varied composition
- no dashboard/deck/generic SaaS aesthetic
- reference fit
- responsive behaviour

## 10. Accessibility / Performance

Preserve or improve:
- semantic HTML
- keyboard access
- visible focus
- alt text
- reduced-motion behaviour
- image performance
- responsive behaviour

Avoid heavy dependencies for small visual effects.

## 11. Animation

Prefer existing infrastructure. Motion should be subtle, purposeful, consistent, and fast enough not to create friction.

## 12. Build Discipline

Before completion:
- build successfully
- check TypeScript errors
- check affected routes
- check responsive behaviour
- check asset paths
- confirm unrelated areas remain unchanged

## 13. Locked Decisions

Approved pages and references remain locked unless the user explicitly changes them.

Do not let implementation convenience override design decisions.

## 14. Rollback

If a change makes an approved state worse, restore the last approved state and then apply a smaller correction.

## 15. Definition of Done

A change is done only when:
1. agreed narrative is correct
2. design language is preserved
3. relevant approved reference is respected
4. prohibited layouts are absent
5. no unsupported content is introduced
6. responsive behaviour works
7. build works
8. unrelated areas remain intact
