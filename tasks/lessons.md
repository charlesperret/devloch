# Lessons

## Workflow discipline

- For any non-trivial task with 3+ steps, architectural choices, or cross-file integration, start with an explicit plan and keep it updated as work progresses.
- If the implementation path starts drifting, stop and re-plan instead of pushing through with stale assumptions.
- Verification is part of the plan, not an afterthought.

## Context management

- Use parallel exploration and focused sub-tasking to keep the main reasoning path clean.
- Read the real workspace state first, including uncommitted files, before deciding what to build next.
- Resume from the current repo state instead of reconstructing a previous idealized state from memory.

## Corrections

- After a user correction, record the mistake pattern here immediately and turn it into a concrete preventive rule.
- When a user points out workflow expectations, treat them as operating constraints for the rest of the session.
- For third-party forms, do not stop at label changes. Verify that option-bearing fields actually have selectable options in the provider UI/API before considering the integration done.
- When a form uses CRM-backed custom properties, inspect both the form definition and the underlying property definitions. A form can render while still being non-functional if the property metadata is incomplete or mismatched.
- Do not add promotional badges, novelty labels, or extra navigation adornments unless the user explicitly asked for them.
- In the header, preserve the logo's aspect ratio and left-side footprint first; if space gets tight, adjust layout behavior instead of letting the logo compress.
- When the user specifies a header element order, implement that order literally and keep key labels on a single line.
- In navigation, never use a permanent highlight style for a section if that same style is also used to indicate the current page. Active-state semantics must stay unambiguous.
- When adding a new header dropdown, match the interaction quality of existing menus end-to-end: hover bridge, focus handling, delayed close, and stable pointer travel into the panel.
- Header changes must be checked against the longest locale labels and longest CTA copy. A navigation that fits in French but overflows in Dutch or German is still broken.
- Do not solve dense desktop dropdowns with internal scroll by default. If the menu content is primary navigation, prefer a naturally taller panel before adding a nested scroll area.
- When the user asks to "memorize" a workflow preference, persist it in this file in concrete terms before moving on, so the same expectation carries into the next changes and deploys.

## Definition of done

- Do not mark work complete without proof: build, route checks, and targeted verification of changed behavior.
- Compare intended behavior against existing repo patterns before finalizing UI or architecture changes.
- Final output should be at a standard a staff engineer would approve: coherent structure, verified behavior, and explicit residual risks if any remain.
