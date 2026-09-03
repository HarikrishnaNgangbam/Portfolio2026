import { CheckCircle2, RefreshCw, ArrowUpCircle } from 'lucide-react';
import {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactSubLabel,
  ChecklistItem,
  ChecklistList,
  ArtifactQuote,
} from './artifact-layout';
import type { IconComponent } from '@/lib/utils';

/**
 * The richer, single-column version of an outcome card — DOH's "Decision
 * Outcomes" section needs to carry a description plus "what happens next"
 * and (for Iterate/Escalate) "common reasons" beneath each outcome, which is
 * more detail than the compact OutcomeTrio grid (used on the simpler
 * Ideation Workflow page) is built for. Kept local to this page since only
 * DOH needs this shape.
 */
function OutcomeDetail({
  icon: Icon,
  color,
  label,
  description,
  nextSteps,
  commonReasons,
}: {
  icon: IconComponent;
  color: string;
  label: string;
  description: string;
  nextSteps: string[];
  commonReasons?: string[];
}) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ borderColor: `color-mix(in srgb, ${color} 30%, transparent)`, backgroundColor: `color-mix(in srgb, ${color} 6%, transparent)` }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
        <p className="font-bold text-foreground">{label}</p>
      </div>
      <p className="text-sm text-foreground mb-4">{description}</p>
      <ArtifactSubLabel>What happens next</ArtifactSubLabel>
      <ul className={commonReasons ? 'space-y-1 mb-4' : 'space-y-1'}>
        {nextSteps.map((step) => (
          <li key={step} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
            {step}
          </li>
        ))}
      </ul>
      {commonReasons && (
        <>
          <ArtifactSubLabel>Common reasons</ArtifactSubLabel>
          <ul className="space-y-1">
            {commonReasons.map((reason) => (
              <li key={reason} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

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
          Design Office Hours (DOH) is a structured governance model where PMs
          present their prototype explorations to a designer for system
          alignment and quality validation. It's the quality backbone that
          makes democratized design exploration possible.
        </p>
      </ArtifactSection>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <p className="font-bold text-foreground mb-1.5">Not a crit session</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            DOH isn't about subjective design feedback or pixel-perfect
            polish. It's about system correctness and behavior validation.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <p className="font-bold text-foreground mb-1.5">A quality checkpoint</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every session ends with a clear decision: Proceed, Iterate, or
            Escalate. No ambiguous feedback.
          </p>
        </div>
      </div>

      <ArtifactSection title="Purpose &amp; goals">
        <div className="space-y-8">
          <div>
            <p className="font-semibold text-foreground mb-1.5">Validate System Alignment</p>
            <p className="text-sm mb-3">
              Ensure prototypes use approved components, follow Fluent
              patterns, and maintain system consistency.
            </p>
            <ArtifactSubLabel>What we check</ArtifactSubLabel>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Are all components from the approved system?</li>
              <li>Do interactions follow established patterns?</li>
              <li>Are tokens (colors, spacing, type) correct?</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1.5">Catch Quality Issues Early</p>
            <p className="text-sm mb-3">
              Identify edge cases, accessibility gaps, and usability concerns
              before engineering handoff, reducing downstream rework.
            </p>
            <ArtifactSubLabel>What we check</ArtifactSubLabel>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Are error states designed?</li>
              <li>What happens when there's no data?</li>
              <li>Is keyboard navigation supported?</li>
              <li>Are loading states clear?</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3">Enable PM Autonomy</p>
            <p className="text-sm mb-3">
              By providing a clear quality gate, PMs can explore independently
              without waiting for designers to be available for every step.
            </p>
            <ArtifactQuote>
              DOH shifts design from doing pixels to curating quality —
              scaling design leadership through governance, not execution.
            </ArtifactQuote>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="How DOH works">
        <div>
          <ArtifactSubLabel>Session format</ArtifactSubLabel>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><span className="text-foreground font-medium">Duration</span> — 30 minutes per session</li>
            <li><span className="text-foreground font-medium">Attendees</span> — PM + Designer (1:1 preferred)</li>
            <li><span className="text-foreground font-medium">Frequency</span> — as needed, scheduled by PM</li>
          </ul>
        </div>
        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-6">
          <div>
            <ArtifactSubLabel>Before the session</ArtifactSubLabel>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>PM shares prototype link and context (problem, goals, questions)</li>
              <li>Designer reviews prototype async (5–10 min prep)</li>
              <li>Both prepare specific questions/feedback areas</li>
            </ul>
          </div>
          <div>
            <ArtifactSubLabel>During the session</ArtifactSubLabel>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>PM presents prototype and walks through key flows (10 min)</li>
              <li>Designer reviews system alignment and quality (15 min)</li>
              <li>Discussion of feedback, open questions, and edge cases</li>
              <li>Clear decision and next steps documented (5 min)</li>
            </ul>
          </div>
          <div>
            <ArtifactSubLabel>After the session</ArtifactSubLabel>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Decision and action items captured in notes</li>
              <li>If "Proceed": Designer merges to master, PM moves to engineering</li>
              <li>If "Iterate": PM updates prototype, may schedule follow-up</li>
              <li>If "Escalate": Designer brings to leadership for resolution</li>
            </ul>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="What gets reviewed">
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-foreground mb-2">1. System Component Usage</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Are all components from the approved Fluent system?</li>
              <li>Are components used correctly (right component for the job)?</li>
              <li>Any detached or custom components that shouldn't be?</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">2. Interaction Patterns &amp; Behaviors</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Do interactions follow established Fluent patterns?</li>
              <li>Is navigation consistent with the platform?</li>
              <li>Are confirmation dialogs used appropriately?</li>
              <li>Do states transition logically?</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">3. Edge Cases &amp; States</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Empty states: what shows when there's no data?</li>
              <li>Error states: what happens when something fails?</li>
              <li>Loading states: are async operations indicated?</li>
              <li>Offline mode: what works without connectivity?</li>
              <li>Permission states: what if a user lacks access?</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">4. Accessibility &amp; Usability</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Is contrast sufficient for text and controls?</li>
              <li>Are touch targets appropriately sized?</li>
              <li>Is keyboard navigation supported?</li>
              <li>Are error messages clear and actionable?</li>
              <li>Is content scannable and well-organized?</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">5. Platform Consistency</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Does this feel like Windows?</li>
              <li>Are we following Windows 11 design language?</li>
              <li>Is it consistent with other Family Safety surfaces?</li>
            </ul>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="Decision outcomes">
        <p>
          Every DOH session ends with one of three clear outcomes. No
          ambiguous feedback like "looks good" or "needs work."
        </p>
        <div className="space-y-4">
          <OutcomeDetail
            icon={CheckCircle2}
            color="var(--icon-green)"
            label="Proceed"
            description="System-aligned, quality-validated, ready for engineering handoff."
            nextSteps={[
              'Designer merges approved changes back to master prototype',
              'PM shares prototype with Engineering for spec review',
              'PM documents decisions and rationale in project wiki',
              'Team proceeds to implementation planning',
            ]}
          />
          <OutcomeDetail
            icon={RefreshCw}
            color="var(--icon-orange)"
            label="Iterate"
            description="Needs refinement. Specific changes identified and documented."
            nextSteps={[
              'Designer provides specific, actionable feedback',
              'PM updates prototype based on guidance',
              'Minor changes: async review via Slack',
              'Major changes: schedule follow-up DOH session',
            ]}
            commonReasons={[
              'Missing edge cases (error, empty, loading states)',
              'Component misuse or non-system components',
              'Accessibility gaps (contrast, touch targets, keyboard nav)',
              'Unclear interaction patterns or navigation',
            ]}
          />
          <OutcomeDetail
            icon={ArrowUpCircle}
            color="var(--icon-red)"
            label="Escalate"
            description="Requires new component, design system change, or leadership decision."
            nextSteps={[
              'Designer escalates to design leadership or system owners',
              'PM pauses this exploration path',
              'PM may explore alternative approaches in parallel',
              'Decision timeline communicated (typically 1–2 weeks)',
            ]}
            commonReasons={[
              'Need for a new component not in the system',
              'Conflict with established interaction patterns',
              'Cross-team consistency issue',
              'Platform policy or accessibility concern',
            ]}
          />
        </div>
      </ArtifactSection>

      <ArtifactSection title="Best practices">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <ArtifactSubLabel>For PMs</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Share context before the session (problem, goals)</ChecklistItem>
              <ChecklistItem>Test your prototype — fix broken links</ChecklistItem>
              <ChecklistItem>Prioritize your top questions</ChecklistItem>
              <ChecklistItem>Be open to feedback and iteration</ChecklistItem>
              <ChecklistItem>Document decisions after the session</ChecklistItem>
            </ChecklistList>
          </div>
          <div>
            <ArtifactSubLabel>For designers</ArtifactSubLabel>
            <ChecklistList>
              <ChecklistItem>Review prototype async before the session</ChecklistItem>
              <ChecklistItem>Focus on system correctness, not subjective polish</ChecklistItem>
              <ChecklistItem>Provide specific, actionable feedback</ChecklistItem>
              <ChecklistItem>End with a clear decision (Proceed/Iterate/Escalate)</ChecklistItem>
              <ChecklistItem>Merge approved work back to master promptly</ChecklistItem>
            </ChecklistList>
          </div>
        </div>
      </ArtifactSection>

      <ArtifactSection title="Why DOH works">
        <p>
          DOH succeeds because it shifts design's role from pixel production
          to system stewardship. Instead of designers being a bottleneck,
          they become enablers.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mt-2">
          <div>
            <p className="font-semibold text-foreground mb-1">Scales Design Leadership</p>
            <p className="text-sm">One designer can govern quality for multiple PMs, without becoming a pixel factory.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Unblocks PM Velocity</p>
            <p className="text-sm">PMs explore independently, only involving design for validation — not every step.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Reduces Engineering Rework</p>
            <p className="text-sm">Catching quality issues before handoff means fewer surprises during implementation.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Protects System Quality</p>
            <p className="text-sm">Formal quality gate ensures consistency without gatekeeping exploration.</p>
          </div>
        </div>
      </ArtifactSection>
    </ArtifactPageShell>
  );
}

export { DesignOfficeHoursPage };
