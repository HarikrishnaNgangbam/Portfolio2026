import { CheckCircle2, XCircle } from 'lucide-react';
import {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactStep,
  ArtifactSubLabel,
  ChecklistItem,
  ChecklistList,
  WarningNote,
  DoDontColumns,
} from './artifact-layout';

function PmChecklistPage() {
  return (
    <ArtifactPageShell
      currentSlug="pm-checklist"
      title="PM Checklist — Ideation → Prototype"
      description="Your step-by-step guide to exploring design solutions independently while maintaining system quality."
      eyebrow="PM Checklist"
      heading="PM Checklist — Ideation → Prototype"
      supporting="Your step-by-step guide to exploring design solutions independently while maintaining system quality."
    >
      <ArtifactSection title="How to use this checklist">
        <p>
          This checklist guides you through the Ideation → Prototype workflow.
          Complete each step before moving to the next. If you're blocked or
          unsure, reach out to Design for guidance.
        </p>
      </ArtifactSection>

      <ArtifactSection title="Key principles">
        <ChecklistList>
          <ChecklistItem>Copy, don't create — always start from the master prototype</ChecklistItem>
          <ChecklistItem>System components only — don't make new components or modify existing ones</ChecklistItem>
          <ChecklistItem>Design Office Hours required — get design validation before engineering</ChecklistItem>
          <ChecklistItem>Document your thinking — note decisions and open questions</ChecklistItem>
        </ChecklistList>
      </ArtifactSection>

      <div className="space-y-12">
        <ArtifactStep number="01" title="Before You Start / Ideation Readiness">
          <ChecklistList>
            <ChecklistItem>Define the problem statement</ChecklistItem>
            <ChecklistItem>Write HMW questions</ChecklistItem>
            <ChecklistItem>Identify user scenarios or jobs-to-be-done</ChecklistItem>
            <ChecklistItem>Define success criteria</ChecklistItem>
            <ChecklistItem>Align with stakeholders on scope</ChecklistItem>
          </ChecklistList>
          <WarningNote>
            Don't proceed without clear problem framing. Unclear problems lead to unfocused prototypes.
          </WarningNote>
        </ArtifactStep>

        <ArtifactStep number="02" title="Set Up Your Prototype">
          <ChecklistList>
            <ChecklistItem>Locate the Family Safety Portal Master Prototype</ChecklistItem>
            <ChecklistItem>Duplicate the entire file; never edit the master</ChecklistItem>
            <ChecklistItem>Rename using [Feature/Project Name] – [Your Name] – [Date]</ChecklistItem>
            <ChecklistItem>Add a cover page with problem statement and goals</ChecklistItem>
          </ChecklistList>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-green) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 6%, transparent)' }}>
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--icon-green)' }} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-green)' }}>Good naming</p>
              </div>
              <p className="text-sm text-foreground font-mono">Geofencing Alerts – Jordan Kim – 2025-02-09</p>
            </div>
            <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-red) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 6%, transparent)' }}>
              <div className="flex items-center gap-2 mb-1.5">
                <XCircle className="w-4 h-4" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-red)' }}>Bad naming</p>
              </div>
              <p className="text-sm text-foreground font-mono">"Copy of Family Safety", "Test", "New Design"</p>
            </div>
          </div>
        </ArtifactStep>

        <ArtifactStep number="03" title="Explore &amp; Design">
          <div>
            <ArtifactSubLabel>Do this</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Work with existing components only</ChecklistItem>
              <ChecklistItem>Rearrange flows and screens</ChecklistItem>
              <ChecklistItem>Update content and labels</ChecklistItem>
              <ChecklistItem>Design edge cases</ChecklistItem>
              <ChecklistItem>Create clickable prototypes</ChecklistItem>
              <ChecklistItem>Add annotations for complex interactions</ChecklistItem>
              <ChecklistItem>Document open questions and assumptions</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-red)' }}>Don't do this</p>
            <ul className="space-y-1.5">
              {[
                'Create custom components / detach system components',
                'Change colors, fonts, or spacing outside system tokens',
                'Invent new interaction patterns without Design consultation',
                'Skip empty / error / loading states',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 py-1 text-sm text-foreground">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ArtifactStep>

        <ArtifactStep number="04" title="Prepare for Design Office Hours">
          <ChecklistList>
            <ChecklistItem>Schedule a DOH session</ChecklistItem>
            <ChecklistItem>Test the prototype</ChecklistItem>
            <ChecklistItem>Prepare top 3–5 questions</ChecklistItem>
            <ChecklistItem>Identify uncertain areas</ChecklistItem>
            <ChecklistItem>Create a summary slide/page</ChecklistItem>
          </ChecklistList>
          <div>
            <ArtifactSubLabel>What to expect in DOH</ArtifactSubLabel>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>30-minute session</li>
              <li>PM + designer</li>
              <li>Review system components and behaviours</li>
              <li>Validate interaction patterns and edge cases</li>
              <li>Ends in Proceed / Iterate / Escalate</li>
            </ul>
          </div>
        </ArtifactStep>

        <ArtifactStep number="05" title="After DOH">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-green)' }}>Proceed</p>
            <ChecklistList>
              <ChecklistItem>Share prototype with Engineering</ChecklistItem>
              <ChecklistItem>Designer merges changes into master</ChecklistItem>
              <ChecklistItem>Document decisions</ChecklistItem>
              <ChecklistItem>Proceed to implementation planning</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-orange)' }}>Iterate</p>
            <ChecklistList>
              <ChecklistItem>Review feedback</ChecklistItem>
              <ChecklistItem>Update prototype</ChecklistItem>
              <ChecklistItem>Follow-up DOH or async review if needed</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-red)' }}>Escalate</p>
            <ChecklistList>
              <ChecklistItem>Understand the escalation reason</ChecklistItem>
              <ChecklistItem>Designer brings the issue to design leadership / system owners</ChecklistItem>
              <ChecklistItem>Pause exploration until a decision is made</ChecklistItem>
              <ChecklistItem>Explore alternatives in parallel</ChecklistItem>
            </ChecklistList>
          </div>
        </ArtifactStep>
      </div>

      <ArtifactSection title="Quick reference">
        <DoDontColumns
          dos={[
            'Always duplicate, never edit master',
            'Existing components only',
            'Design all edge cases',
            'DOH before Engineering',
            'Document decisions',
            'Ask questions early',
          ]}
          donts={[
            'New components',
            'Modify master',
            'Change system tokens',
            'Skip DOH',
            'Share incomplete prototypes',
            'Explore without clear problem framing',
          ]}
        />
      </ArtifactSection>

      <ArtifactSection title="Need help">
        <ul className="space-y-2 text-sm">
          <li><span className="font-semibold text-foreground">Quick questions</span> — #family-safety-design</li>
          <li><span className="font-semibold text-foreground">Bigger questions</span> — ad-hoc DOH or design lead</li>
          <li><span className="font-semibold text-foreground">System component questions</span> — Fluent 2 documentation / #design-system-support</li>
        </ul>
      </ArtifactSection>
    </ArtifactPageShell>
  );
}

export { PmChecklistPage };
