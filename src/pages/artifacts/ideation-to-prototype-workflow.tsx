import {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactStep,
  ArtifactSubLabel,
  ChecklistItem,
  ChecklistList,
  ArtifactQuote,
  OutcomeTrio,
} from './artifact-layout';

function IdeationToPrototypeWorkflowPage() {
  return (
    <ArtifactPageShell
      currentSlug="ideation-to-prototype-workflow"
      title="Ideation → Prototype Workflow"
      description="Master workflow documentation for democratised design exploration with quality governance."
      eyebrow="Ideation to Prototype Workflow (Master)"
      heading="Ideation → Prototype Workflow"
      supporting="Master workflow documentation for democratised design exploration with quality governance."
    >
      <ArtifactSection title="Workflow overview">
        <p>
          This workflow enables Product Managers to explore design solutions
          independently while maintaining system quality through structured
          checkpoints and Design Office Hours governance.
        </p>
      </ArtifactSection>

      <ArtifactSection title="Goals">
        <ChecklistList>
          <ChecklistItem>Unblock PM-led exploration</ChecklistItem>
          <ChecklistItem>Maintain system quality</ChecklistItem>
          <ChecklistItem>Reduce engineering rework</ChecklistItem>
          <ChecklistItem>Scale design leadership</ChecklistItem>
        </ChecklistList>
      </ArtifactSection>

      <ArtifactSection title="Key principles">
        <ChecklistList>
          <ChecklistItem>Copy, don't create from scratch</ChecklistItem>
          <ChecklistItem>System components only</ChecklistItem>
          <ChecklistItem>Design Office Hours required</ChecklistItem>
          <ChecklistItem>Clear decision outcomes</ChecklistItem>
        </ChecklistList>
      </ArtifactSection>

      <div className="pt-2">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">The 5-step process</p>
        <div className="space-y-12">
          <ArtifactStep number="01" title="Ideation Readiness">
            <p className="text-muted-foreground">Ensure the problem space is well-defined before beginning design exploration.</p>
            <div>
              <ArtifactSubLabel>Requirements</ArtifactSubLabel>
              <ChecklistList>
                <ChecklistItem>Clear problem statement documented</ChecklistItem>
                <ChecklistItem>"How Might We" (HMW) questions defined</ChecklistItem>
                <ChecklistItem>User scenarios or jobs-to-be-done identified</ChecklistItem>
                <ChecklistItem>Success criteria established</ChecklistItem>
              </ChecklistList>
            </div>
            <div>
              <ArtifactSubLabel>Checkpoint questions</ArtifactSubLabel>
              <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                <li>Is the problem statement clear and specific?</li>
                <li>Have we aligned with stakeholders on the scope?</li>
                <li>Do we understand user needs and pain points?</li>
              </ul>
            </div>
          </ArtifactStep>

          <ArtifactStep number="02" title="Explore in a Copy">
            <p className="text-muted-foreground">Duplicate the master prototype to explore solutions safely.</p>
            <div>
              <ArtifactSubLabel>Actions</ArtifactSubLabel>
              <ChecklistList>
                <ChecklistItem>Duplicate the Family Safety Portal Master Prototype</ChecklistItem>
                <ChecklistItem>Rename with clear naming convention: [Project Name] – [PM Name] – [Date]</ChecklistItem>
                <ChecklistItem>Work only with approved components from the design system</ChecklistItem>
                <ChecklistItem>Modify flows, not component structures</ChecklistItem>
              </ChecklistList>
            </div>
            <div>
              <ArtifactSubLabel>Critical rules</ArtifactSubLabel>
              <ChecklistList>
                <ChecklistItem>Never create net-new components</ChecklistItem>
                <ChecklistItem>Never modify the master prototype directly</ChecklistItem>
                <ChecklistItem>Maintain system tokens (colors, spacing, typography)</ChecklistItem>
                <ChecklistItem>Document your exploration rationale</ChecklistItem>
              </ChecklistList>
            </div>
          </ArtifactStep>

          <ArtifactStep number="03" title="Design Office Hours (DOH)">
            <p className="text-muted-foreground">Present your exploration for designer-led system and behavior review.</p>
            <div>
              <ArtifactSubLabel>What to prepare</ArtifactSubLabel>
              <ChecklistList>
                <ChecklistItem>Interactive prototype with your proposed changes</ChecklistItem>
                <ChecklistItem>List of key decisions or questions</ChecklistItem>
                <ChecklistItem>Edge cases you've considered (error states, empty states, etc.)</ChecklistItem>
                <ChecklistItem>Specific feedback areas you need guidance on</ChecklistItem>
              </ChecklistList>
            </div>
            <div>
              <ArtifactSubLabel>What gets reviewed</ArtifactSubLabel>
              <ChecklistList>
                <ChecklistItem>System component usage and alignment</ChecklistItem>
                <ChecklistItem>Interaction patterns and behavior consistency</ChecklistItem>
                <ChecklistItem>Edge case coverage (loading, error, empty states)</ChecklistItem>
                <ChecklistItem>Accessibility and usability considerations</ChecklistItem>
                <ChecklistItem>Platform consistency (does this feel like Windows?)</ChecklistItem>
              </ChecklistList>
            </div>
          </ArtifactStep>

          <ArtifactStep number="04" title="Decision Checkpoint">
            <p className="text-muted-foreground">Receive clear outcome: Proceed, Iterate, or Escalate.</p>
            <OutcomeTrio
              proceed={{ label: 'Proceed', description: 'System-aligned, ready for engineering handoff.' }}
              iterate={{ label: 'Iterate', description: 'Needs refinement, specific changes identified.' }}
              escalate={{ label: 'Escalate', description: 'Requires new component, pattern, or leadership review.' }}
            />
            <ArtifactQuote>
              No ambiguous feedback. Every DOH session ends with a clear next action and owner.
            </ArtifactQuote>
          </ArtifactStep>

          <ArtifactStep number="05" title="Execute &amp; Document">
            <p className="text-muted-foreground">Merge approved changes and prepare for engineering handoff.</p>
            <div>
              <ArtifactSubLabel>Final steps</ArtifactSubLabel>
              <ChecklistList>
                <ChecklistItem>Designer merges approved changes back to master prototype</ChecklistItem>
                <ChecklistItem>Update prototype documentation with new flows</ChecklistItem>
                <ChecklistItem>Create engineering specs or annotations as needed</ChecklistItem>
                <ChecklistItem>Share prototype link in engineering handoff</ChecklistItem>
                <ChecklistItem>Document decisions and rationale in project wiki</ChecklistItem>
              </ChecklistList>
            </div>
          </ArtifactStep>
        </div>
      </div>

      <ArtifactSection title="Success indicators">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <ArtifactSubLabel>Process health</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>PMs explore independently without design bottlenecks</ChecklistItem>
              <ChecklistItem>DOH sessions have clear outcomes</ChecklistItem>
              <ChecklistItem>Most explorations proceed on first review</ChecklistItem>
              <ChecklistItem>Escalations are rare and well-justified</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <ArtifactSubLabel>Quality outcomes</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Engineering handoffs require minimal clarification</ChecklistItem>
              <ChecklistItem>System consistency maintained across features</ChecklistItem>
              <ChecklistItem>Reduced rework during implementation</ChecklistItem>
              <ChecklistItem>Components remain system-aligned</ChecklistItem>
            </ChecklistList>
          </div>
        </div>
      </ArtifactSection>
    </ArtifactPageShell>
  );
}

export { IdeationToPrototypeWorkflowPage };
