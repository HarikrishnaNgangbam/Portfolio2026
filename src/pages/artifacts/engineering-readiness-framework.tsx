import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactStep,
  ChecklistItem,
  ChecklistList,
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
      <div
        className="rounded-xl border p-4 flex items-start gap-3"
        style={{ borderColor: 'color-mix(in srgb, var(--icon-red) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 5%, transparent)' }}
      >
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Content placeholder in the source material</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The original documentation for this checklist contains an
            explicit, unfilled placeholder: "Please provide the SharePoint
            content so I can populate this checklist with the actual
            requirements, phases, and quality gates from your engineering
            workflow." The detailed, itemized checklist below reflects the
            framework's intended structure and purpose, not a finalized,
            SharePoint-derived specification.
          </p>
        </div>
      </div>

      <ArtifactSection title="Purpose">
        <p>
          This checklist ensures that design prototypes are properly
          validated and ready for engineering implementation. It serves as a
          quality gate to catch issues before development begins.
        </p>
      </ArtifactSection>

      <ArtifactSection title="Key principles">
        <ChecklistList>
          <ChecklistItem>System correctness</ChecklistItem>
          <ChecklistItem>Complete specifications</ChecklistItem>
          <ChecklistItem>Design approval</ChecklistItem>
          <ChecklistItem>Implementation clarity</ChecklistItem>
        </ChecklistList>
      </ArtifactSection>

      <div className="space-y-12">
        <ArtifactStep number="01" title="Pre-Implementation Review">
          <ChecklistList>
            <ChecklistItem>Verify DOH approval</ChecklistItem>
            <ChecklistItem>Review component usage</ChecklistItem>
            <ChecklistItem>Check custom / off-system elements</ChecklistItem>
            <ChecklistItem>Validate interaction patterns</ChecklistItem>
          </ChecklistList>
        </ArtifactStep>

        <ArtifactStep number="02" title="Specification Completeness">
          <ChecklistList>
            <ChecklistItem>All states documented</ChecklistItem>
            <ChecklistItem>Edge cases designed</ChecklistItem>
            <ChecklistItem>Responsive behaviours defined</ChecklistItem>
            <ChecklistItem>Accessibility requirements noted</ChecklistItem>
            <ChecklistItem>Animation and transition specs</ChecklistItem>
          </ChecklistList>
          <WarningNote>
            Incomplete specs lead to rework. Return to Design if critical states are missing.
          </WarningNote>
        </ArtifactStep>

        <ArtifactStep number="03" title="Technical Feasibility">
          <ChecklistList>
            <ChecklistItem>Component library availability</ChecklistItem>
            <ChecklistItem>API / data requirements</ChecklistItem>
            <ChecklistItem>Performance considerations</ChecklistItem>
            <ChecklistItem>Technical constraints</ChecklistItem>
          </ChecklistList>
        </ArtifactStep>

        <ArtifactStep number="04" title="Implementation Planning">
          <ChecklistList>
            <ChecklistItem>Break down implementable tasks</ChecklistItem>
            <ChecklistItem>Identify dependencies / blockers</ChecklistItem>
            <ChecklistItem>Define testing strategy</ChecklistItem>
            <ChecklistItem>Estimate implementation effort</ChecklistItem>
          </ChecklistList>
        </ArtifactStep>

        <ArtifactStep number="05" title="Handoff &amp; Communication">
          <ChecklistList>
            <ChecklistItem>Schedule handoff</ChecklistItem>
            <ChecklistItem>Share prototype / design assets</ChecklistItem>
            <ChecklistItem>Establish design review checkpoints</ChecklistItem>
            <ChecklistItem>Set up communication channel</ChecklistItem>
          </ChecklistList>
          <ArtifactQuote>
            Clear communication during handoff reduces implementation questions and rework.
          </ArtifactQuote>
        </ArtifactStep>
      </div>

      <ArtifactSection title="Quality gates summary">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-green) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 6%, transparent)' }}>
            <p className="font-bold text-foreground text-sm" style={{ color: 'var(--icon-green)' }}>All gates passed</p>
            <p className="text-muted-foreground text-sm mt-1">Prototype is ready for implementation.</p>
          </div>
          <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-orange) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-orange) 6%, transparent)' }}>
            <p className="font-bold text-foreground text-sm" style={{ color: 'var(--icon-orange)' }}>Issues found</p>
            <p className="text-muted-foreground text-sm mt-1">Return to PM or Design for clarification; document gaps and schedule follow-up.</p>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="Quick reference">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-green)' }}>Ready</p>
            <ul className="space-y-1.5">
              {['DOH approval', 'States / edge cases', 'System components', 'Technical feasibility', 'Clear specs / documentation'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-green)' }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-red)' }}>Not ready</p>
            <ul className="space-y-1.5">
              {['Missing DOH approval', 'Incomplete edge cases', 'Custom / off-system components', 'Unclear behaviours / interactions', 'Missing accessibility specs'].map((item) => (
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
