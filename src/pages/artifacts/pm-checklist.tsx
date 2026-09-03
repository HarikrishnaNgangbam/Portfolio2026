import { CheckCircle2, XCircle } from 'lucide-react';
import {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactStep,
  ArtifactSubLabel,
  ChecklistItem,
  ChecklistList,
  ChecklistStep,
  ChecklistStepList,
  DontList,
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
        <ArtifactStep number="1" title="Before You Start (Ideation Readiness)">
          <ChecklistStepList>
            <ChecklistStep title="Define the problem statement">
              What user problem are you solving? Be specific and user-centered.
            </ChecklistStep>
            <ChecklistStep title='Write "How Might We" (HMW) questions'>
              Frame the problem as opportunities (e.g., "How might we help parents set limits without feeling restrictive?").
            </ChecklistStep>
            <ChecklistStep title="Identify user scenarios or jobs-to-be-done">
              What are users trying to accomplish? What's the context?
            </ChecklistStep>
            <ChecklistStep title="Define success criteria">
              How will you know if the solution works? What metrics matter?
            </ChecklistStep>
            <ChecklistStep title="Align with stakeholders on scope">
              Ensure everyone agrees on what you're exploring and why.
            </ChecklistStep>
          </ChecklistStepList>
          <WarningNote>
            Don't proceed without clear problem framing. Unclear problems lead to unfocused prototypes.
          </WarningNote>
        </ArtifactStep>

        <ArtifactStep number="2" title="Set Up Your Prototype">
          <ChecklistStepList>
            <ChecklistStep title="Locate the Family Safety Portal Master Prototype">
              Find it in the shared Figma project. If you can't find it, ask Design.
            </ChecklistStep>
            <ChecklistStep title="Duplicate the entire file (don't edit the master)">
              Right-click → Duplicate. Never modify the master directly.
            </ChecklistStep>
            <ChecklistStep title="Rename your copy with clear naming convention">
              Format: [Feature/Project Name] – [Your Name] – [Date]. Example: "Screen Time Redesign – Alex Chen – 2025-02-09".
            </ChecklistStep>
            <ChecklistStep title="Add a cover page with problem statement and goals">
              Create a first page that explains what you're exploring and why.
            </ChecklistStep>
          </ChecklistStepList>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-green) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 6%, transparent)' }}>
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--icon-green)' }} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-green)' }}>Good naming example</p>
              </div>
              <p className="text-sm text-foreground font-mono">Geofencing Alerts – Jordan Kim – 2025-02-09</p>
            </div>
            <div className="rounded-xl border p-4" style={{ borderColor: 'color-mix(in srgb, var(--icon-red) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 6%, transparent)' }}>
              <div className="flex items-center gap-2 mb-1.5">
                <XCircle className="w-4 h-4" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-red)' }}>Bad naming examples</p>
              </div>
              <p className="text-sm text-foreground font-mono">"Copy of Family Safety" · "Test" · "New Design"</p>
            </div>
          </div>
        </ArtifactStep>

        <ArtifactStep number="3" title="Explore &amp; Design">
          <ChecklistStepList>
            <ChecklistStep title="Work with existing components only">
              Use what's in the master. Don't create new components or modify component structures.
            </ChecklistStep>
            <ChecklistStep title="Rearrange flows and screens as needed">
              Copy, duplicate, and reorganize screens to explore different user journeys.
            </ChecklistStep>
            <ChecklistStep title="Update content and labels for your scenario">
              Change text, images, and data to match your use case. Make it realistic.
            </ChecklistStep>
            <ChecklistStep title="Design for edge cases">
              What happens when there's no data? An error? Offline? Design these states.
            </ChecklistStep>
            <ChecklistStep title="Create clickable prototypes">
              Link screens together so reviewers can experience the flow interactively.
            </ChecklistStep>
            <ChecklistStep title="Add annotations for complex interactions">
              Note behaviors, animations, or logic that aren't obvious from the visuals.
            </ChecklistStep>
            <ChecklistStep title="Document open questions and assumptions">
              Create a list of things you're unsure about or need design guidance on.
            </ChecklistStep>
          </ChecklistStepList>
          <DontList
            items={[
              'Create custom components or detach from system components',
              'Change colors, fonts, or spacing outside of system tokens',
              'Invent new interaction patterns without design consultation',
              'Skip edge cases (empty, error, loading states)',
            ]}
          />
        </ArtifactStep>

        <ArtifactStep number="4" title="Prepare for Design Office Hours">
          <ChecklistStepList>
            <ChecklistStep title="Schedule a Design Office Hours session">
              Book time on the Design calendar. Include your prototype link and agenda.
            </ChecklistStep>
            <ChecklistStep title="Test your prototype before the session">
              Click through all flows yourself. Fix broken links and incomplete screens.
            </ChecklistStep>
            <ChecklistStep title="Prepare your list of questions">
              What do you need design input on? Prioritize your top 3-5 questions.
            </ChecklistStep>
            <ChecklistStep title="Identify areas where you're uncertain">
              Flag screens or interactions where you need validation or guidance.
            </ChecklistStep>
            <ChecklistStep title="Create a summary slide or page">
              Problem, proposed solution, key decisions, and questions — all on one page for context.
            </ChecklistStep>
          </ChecklistStepList>
          <div>
            <ArtifactSubLabel>What to expect in DOH</ArtifactSubLabel>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>30-minute session with a designer</li>
              <li>Review system component usage and behaviors</li>
              <li>Validate interaction patterns and edge cases</li>
              <li>Receive one of three outcomes: Proceed / Iterate / Escalate</li>
            </ul>
          </div>
        </ArtifactStep>

        <ArtifactStep number="5" title="After DOH — Next Steps">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-green)' }}>If you received "Proceed"</p>
            <ChecklistList>
              <ChecklistItem>Share prototype with Engineering for spec review</ChecklistItem>
              <ChecklistItem>Designer will merge your changes into the master prototype</ChecklistItem>
              <ChecklistItem>Document decisions in project wiki or spec</ChecklistItem>
              <ChecklistItem>Proceed to implementation planning</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-orange)' }}>If you received "Iterate"</p>
            <ChecklistList>
              <ChecklistItem>Review the specific feedback and required changes</ChecklistItem>
              <ChecklistItem>Update your prototype based on guidance</ChecklistItem>
              <ChecklistItem>Schedule a follow-up DOH session if needed (or async review)</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-red)' }}>If you received "Escalate"</p>
            <ChecklistList>
              <ChecklistItem>Understand what needs escalation (new component, pattern conflict, etc.)</ChecklistItem>
              <ChecklistItem>Designer will bring the issue to design leadership or system owners</ChecklistItem>
              <ChecklistItem>Pause exploration until decision is made</ChecklistItem>
              <ChecklistItem>Explore alternative approaches in the meantime</ChecklistItem>
            </ChecklistList>
          </div>
        </ArtifactStep>

        <ArtifactStep number="6" title="Quick Reference">
          <DoDontColumns
            dos={[
              'Always duplicate, never edit master',
              'Use existing components only',
              'Design all edge cases',
              'Get DOH approval before engineering',
              'Document your decisions',
              'Ask questions early and often',
            ]}
            donts={[
              'Create new components',
              'Modify the master directly',
              'Change system tokens',
              'Skip DOH review',
              'Share incomplete prototypes with Engineering',
              'Explore without clear problem framing',
            ]}
          />
        </ArtifactStep>
      </div>

      <ArtifactSection title="Need help?">
        <p>Stuck or unsure about something? Here's how to get unblocked:</p>
        <div className="space-y-4 mt-2">
          <div>
            <p className="font-semibold text-foreground">For quick questions</p>
            <p className="text-sm">
              Post in the #family-safety-design Slack channel. Designers monitor it and can provide quick guidance.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">For bigger questions</p>
            <p className="text-sm">
              Schedule an ad-hoc DOH session or ping the design lead directly. We'd rather you ask than guess.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">For system component questions</p>
            <p className="text-sm">
              Refer to the Fluent 2 Design System documentation or ask in #design-system-support.
            </p>
          </div>
        </div>
      </ArtifactSection>
    </ArtifactPageShell>
  );
}

export { PmChecklistPage };
