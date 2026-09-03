import {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactSubLabel,
  ChecklistItem,
  ChecklistList,
  ArtifactQuote,
  OutcomeTrio,
} from './artifact-layout';

function DesignOfficeHoursPage() {
  return (
    <ArtifactPageShell
      currentSlug="design-office-hours"
      title="Design Office Hours (DOH)"
      description="Quality gate governance model that scales design leadership by enabling PM-led exploration while protecting system quality."
      eyebrow="Design Office Hours"
      heading="Design Office Hours (DOH)"
      supporting="Quality gate governance model that scales design leadership by enabling PM-led exploration while protecting system quality."
    >
      <ArtifactSection title="What is Design Office Hours?">
        <p>
          A structured governance model where PMs present prototype
          explorations to a designer for system alignment and quality
          validation.
        </p>
      </ArtifactSection>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <p className="font-bold text-foreground mb-1.5">Not a crit session</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            DOH isn't subjective design feedback or pixel-perfect polish. It
            is about system correctness and behaviour validation.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <p className="font-bold text-foreground mb-1.5">A quality checkpoint</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every session ends with Proceed, Iterate, or Escalate. No
            ambiguous feedback.
          </p>
        </div>
      </div>

      <ArtifactSection title="Purpose &amp; goals">
        <div className="space-y-8">
          <div>
            <p className="font-semibold text-foreground mb-2">01 — Validate system alignment</p>
            <p className="text-sm mb-3">Approved components, Fluent patterns, system consistency.</p>
            <ArtifactSubLabel>Checks</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Approved components?</ChecklistItem>
              <ChecklistItem>Established interaction patterns?</ChecklistItem>
              <ChecklistItem>Correct colors, spacing, type tokens?</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">02 — Catch quality issues early</p>
            <p className="text-sm mb-3">Edge cases, accessibility, usability.</p>
            <ArtifactSubLabel>Checks</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Error states?</ChecklistItem>
              <ChecklistItem>No-data states?</ChecklistItem>
              <ChecklistItem>Keyboard navigation?</ChecklistItem>
              <ChecklistItem>Loading states?</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3">03 — Enable PM autonomy</p>
            <ArtifactQuote>
              DOH shifts design from doing pixels to curating quality —
              scaling design leadership through governance, not execution.
            </ArtifactQuote>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="How DOH works">
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <ArtifactSubLabel>Session</ArtifactSubLabel>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li><span className="text-foreground font-medium">Duration</span> — 30 minutes</li>
              <li><span className="text-foreground font-medium">Attendees</span> — PM + Designer (1:1 preferred)</li>
              <li><span className="text-foreground font-medium">Frequency</span> — as needed, scheduled by PM</li>
            </ul>
          </div>
          <div>
            <ArtifactSubLabel>Before</ArtifactSubLabel>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>PM shares prototype/context</li>
              <li>Designer reviews async (5–10 min)</li>
              <li>Both prepare questions/feedback</li>
            </ul>
          </div>
          <div>
            <ArtifactSubLabel>During</ArtifactSubLabel>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>PM presents key flows (10 min)</li>
              <li>Designer reviews system alignment/quality (15 min)</li>
              <li>Discussion of feedback, questions, edge cases</li>
              <li>Decision and next steps documented (5 min)</li>
            </ul>
          </div>
          <div>
            <ArtifactSubLabel>After</ArtifactSubLabel>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Decision and action items captured</li>
              <li><span className="text-foreground font-medium">Proceed</span> → merge to master / engineering</li>
              <li><span className="text-foreground font-medium">Iterate</span> → PM updates / follow-up</li>
              <li><span className="text-foreground font-medium">Escalate</span> → leadership resolution</li>
            </ul>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="What gets reviewed">
        <ChecklistList>
          <ChecklistItem>System component usage</ChecklistItem>
          <ChecklistItem>Interaction patterns &amp; behaviours</ChecklistItem>
          <ChecklistItem>Edge cases &amp; states</ChecklistItem>
          <ChecklistItem>Accessibility &amp; usability</ChecklistItem>
          <ChecklistItem>Platform consistency</ChecklistItem>
        </ChecklistList>
      </ArtifactSection>

      <ArtifactSection title="Decision outcomes">
        <OutcomeTrio
          proceed={{ label: 'Proceed', description: 'System-aligned, ready for engineering handoff.' }}
          iterate={{ label: 'Iterate', description: 'Needs refinement, specific changes identified.' }}
          escalate={{ label: 'Escalate', description: 'Requires new component, pattern, or leadership review.' }}
        />
      </ArtifactSection>

      <ArtifactSection title="Best practices">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <ArtifactSubLabel>For PMs</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Bring an interactive prototype with the proposed changes, not a static spec</ChecklistItem>
              <ChecklistItem>Bring a list of key decisions or open questions</ChecklistItem>
              <ChecklistItem>Come with the edge cases you've already considered</ChecklistItem>
              <ChecklistItem>Name the specific areas where you need guidance</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <ArtifactSubLabel>For designers</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Review system component usage and alignment</ChecklistItem>
              <ChecklistItem>Review interaction patterns and behaviour consistency</ChecklistItem>
              <ChecklistItem>Review edge case coverage, accessibility and usability</ChecklistItem>
              <ChecklistItem>Close every session with a clear decision and owner</ChecklistItem>
            </ChecklistList>
          </div>
        </div>
      </ArtifactSection>

<ArtifactSection title="Why DOH works">
        <ChecklistList>
          <ChecklistItem>Scales design leadership</ChecklistItem>
          <ChecklistItem>Unblocks PM velocity</ChecklistItem>
          <ChecklistItem>Reduces engineering rework</ChecklistItem>
          <ChecklistItem>Protects system quality</ChecklistItem>
        </ChecklistList>
      </ArtifactSection>
    </ArtifactPageShell>
  );
}

export { DesignOfficeHoursPage };
