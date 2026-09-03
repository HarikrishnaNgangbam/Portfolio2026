import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactStep,
  ChecklistItem,
  ChecklistList,
  ChecklistStep,
  ChecklistStepList,
  WarningNote,
  ArtifactQuote,
} from './artifact-layout';

function EngineeringReadinessFrameworkPage() {
  return (
    <ArtifactPageShell
      currentSlug="engineering-readiness-framework"
      title="Engineering Checklist"
      description="Quality gate checklist for engineering handoff and implementation."
      eyebrow="Engineering-readiness framework"
      heading="Engineering Checklist"
      supporting="Quality gate checklist for engineering handoff and implementation."
    >
      <ArtifactSection title="Purpose">
        <p>
          This checklist ensures that design prototypes are properly
          validated and ready for engineering implementation. It serves as a
          quality gate to catch issues before development begins.
        </p>
      </ArtifactSection>

      <ArtifactSection title="Key principles">
        <ChecklistList>
          <ChecklistItem>System correctness — all components align with design system</ChecklistItem>
          <ChecklistItem>Complete specifications — all states and edge cases documented</ChecklistItem>
          <ChecklistItem>Design approval — DOH validation completed</ChecklistItem>
          <ChecklistItem>Implementation clarity — behaviors and interactions clearly defined</ChecklistItem>
        </ChecklistList>
      </ArtifactSection>

      <ArtifactSection title="Content placeholder">
        <div
          className="rounded-xl border p-4 flex items-start gap-3"
          style={{ borderColor: 'color-mix(in srgb, var(--icon-red) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 5%, transparent)' }}
        >
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
          <div>
            <p className="text-sm text-foreground leading-relaxed">
              Please provide the SharePoint content so I can populate this
              checklist with the actual requirements, phases, and quality
              gates from your engineering workflow.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              This placeholder is part of the source content. It is presented
              here as-is rather than replaced with invented engineering
              requirements. The structured checklist below reflects the
              framework's intended structure and purpose, not a finalized,
              SharePoint-derived specification.
            </p>
          </div>
        </div>
      </ArtifactSection>

      <div className="space-y-12">
        <ArtifactStep number="1" title="Pre-Implementation Review">
          <ChecklistStepList>
            <ChecklistStep title="Verify DOH approval received">
              Confirm the prototype has passed Design Office Hours review with "Proceed" status.
            </ChecklistStep>
            <ChecklistStep title="Review component usage">
              Ensure all components are from the approved design system.
            </ChecklistStep>
            <ChecklistStep title="Check for custom or off-system elements">
              Flag any components that appear modified or custom-built.
            </ChecklistStep>
            <ChecklistStep title="Validate interaction patterns">
              Confirm interactions align with platform standards.
            </ChecklistStep>
          </ChecklistStepList>
        </ArtifactStep>

        <ArtifactStep number="2" title="Specification Completeness">
          <ChecklistStepList>
            <ChecklistStep title="All states documented">
              Default, hover, active, disabled, loading, error states.
            </ChecklistStep>
            <ChecklistStep title="Edge cases designed">
              Empty states, error conditions, offline scenarios, data limits.
            </ChecklistStep>
            <ChecklistStep title="Responsive behaviors defined">
              How layouts adapt across breakpoints and screen sizes.
            </ChecklistStep>
            <ChecklistStep title="Accessibility requirements noted">
              ARIA labels, keyboard navigation, screen reader support.
            </ChecklistStep>
            <ChecklistStep title="Animation and transition specs">
              Timing, easing, and interaction feedback details.
            </ChecklistStep>
          </ChecklistStepList>
          <WarningNote>
            Incomplete specs lead to rework. Return to Design if critical states are missing.
          </WarningNote>
        </ArtifactStep>

        <ArtifactStep number="3" title="Technical Feasibility">
          <ChecklistStepList>
            <ChecklistStep title="Component library availability">
              Verify all components exist in the engineering component library.
            </ChecklistStep>
            <ChecklistStep title="API and data requirements identified">
              List required endpoints, data structures, and backend dependencies.
            </ChecklistStep>
            <ChecklistStep title="Performance considerations documented">
              Loading strategies, caching, optimization requirements.
            </ChecklistStep>
            <ChecklistStep title="Technical constraints acknowledged">
              Platform limitations, browser support, device capabilities.
            </ChecklistStep>
          </ChecklistStepList>
        </ArtifactStep>

        <ArtifactStep number="4" title="Implementation Planning">
          <ChecklistStepList>
            <ChecklistStep title="Break down into implementable tasks">
              Create user stories or engineering tasks with clear acceptance criteria.
            </ChecklistStep>
            <ChecklistStep title="Identify dependencies and blockers">
              Backend APIs, design assets, third-party services.
            </ChecklistStep>
            <ChecklistStep title="Define testing strategy">
              Unit tests, integration tests, accessibility tests, visual regression.
            </ChecklistStep>
            <ChecklistStep title="Estimate implementation effort">
              Provide sizing and timeline estimates.
            </ChecklistStep>
          </ChecklistStepList>
        </ArtifactStep>

        <ArtifactStep number="5" title="Handoff &amp; Communication">
          <ChecklistStepList>
            <ChecklistStep title="Schedule handoff meeting">
              Walk through prototype with engineering team.
            </ChecklistStep>
            <ChecklistStep title="Share prototype and design assets">
              Provide links, specs, and any supporting documentation.
            </ChecklistStep>
            <ChecklistStep title="Establish design review checkpoints">
              Plan for design QA during implementation.
            </ChecklistStep>
            <ChecklistStep title="Set up communication channel">
              Slack channel, email thread, or stand-up inclusion.
            </ChecklistStep>
          </ChecklistStepList>
          <ArtifactQuote>
            Clear communication during handoff reduces implementation questions and rework.
          </ArtifactQuote>
        </ArtifactStep>
      </div>

      <ArtifactSection title="Quality gates summary">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-green) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 6%, transparent)' }}>
            <p className="font-bold text-foreground text-sm" style={{ color: 'var(--icon-green)' }}>All gates passed</p>
            <p className="text-muted-foreground text-sm mt-1">Prototype is ready for implementation. Proceed with development.</p>
          </div>
          <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-orange) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-orange) 6%, transparent)' }}>
            <p className="font-bold text-foreground text-sm" style={{ color: 'var(--icon-orange)' }}>Issues found</p>
            <p className="text-muted-foreground text-sm mt-1">Return to PM or Design for clarification. Document specific gaps and schedule follow-up.</p>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="Quick reference">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-green) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 6%, transparent)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: 'var(--icon-green)' }}>Ready for implementation</p>
            <ul className="space-y-1.5">
              {['DOH approval confirmed', 'All states and edge cases designed', 'System components only', 'Technical feasibility validated', 'Clear specs and documentation'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-green)' }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-red) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 6%, transparent)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: 'var(--icon-red)' }}>Not ready — needs work</p>
            <ul className="space-y-1.5">
              {['Missing DOH approval', 'Incomplete edge cases', 'Custom or off-system components', 'Unclear behaviors or interactions', 'Missing accessibility specs'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ArtifactSection>
    </ArtifactPageShell>
  );
}

export { EngineeringReadinessFrameworkPage };
