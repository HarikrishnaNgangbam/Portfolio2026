import {
  Users as UsersIcon,
  Package,
  Network,
  Layers,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { ImageBlock } from '@/components/casestudy/image-block';
import { Quote } from '@/components/casestudy/quote';
import { CalloutList } from '@/components/casestudy/callout-list';
import { Badge } from '@/design-system/ui/badge';
import { Reveal } from '@/components/reveal';

function KopdarInitiativePage() {
  return (
    <div className="pb-20">
      <CaseStudyHero
        breadcrumbLabel="Kopdar"
        badges={['● Case Study']}
        title="Kopdar Initiative: Scaling Driver Engagement for Gojek"
        subtitle="Improving efficiency, consistency, and community connection across Indonesia"
        meta={[
          { label: 'Role', value: 'Product Designer' },
          { label: 'Duration', value: 'Oct 2019 – Apr 2020' },
          { label: 'Team', value: 'Cross-functional' },
        ]}
        coverImage="/images/shared/project-kopdar-cover.png"
        coverAlt="Gojek motorcycle driver in green jacket representing driver community"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <Badge>Live from Jakarta</Badge>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-14">
        <Reveal>
          <Section title="Context">
            <h3 className="text-xl font-bold text-foreground">What is Kopdar?</h3>
            <Prose>
              <p>
                Kopdar is Gojek's on-ground gathering with drivers, designed to build
                trust, share clarity, and gather unfiltered insights.
              </p>
            </Prose>
            <IconCardList
              columns={3}
              items={[
                { icon: UsersIcon, title: 'Community', description: 'Strengthening bonds' },
                { icon: Package, iconColor: 'var(--icon-green)', title: 'Products', description: 'Continuous improvement' },
                { icon: Network, iconColor: 'var(--icon-purple)', title: 'Ecosystem', description: 'Platform stability' },
              ]}
            />
            <Prose>
              <p>
                Kopdar keeps Gojek connected to the realities of the people who power
                the platform—ensuring every decision is grounded in real driver
                experiences.
              </p>
              <p>
                Kopdar (Kopi Darat, meaning "face-to-face meeting") is Gojek's flagship
                community engagement program. Led by Performance Katalysts (PKs) and
                supervised by Performance Katalyst Managers (PKMs), these regular
                sessions connect thousands of drivers across Indonesia, providing
                training, support, and building community bonds that strengthen the
                platform ecosystem.
              </p>
            </Prose>
            <StatGrid
              columns={3}
              stats={[
                { value: '170', label: 'PKs' },
                { value: '75', label: 'PKMs' },
                { value: '2.7K', label: 'Drivers' },
              ]}
            />
            <p className="text-center text-muted-foreground text-sm">
              Indonesia-wide Program — Spanning Jakarta, Surabaya, Makassar, and beyond
            </p>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="The Problem">
            <h3 className="text-xl font-bold text-foreground">The Challenge</h3>
            <Prose>
              <p>Three critical pain points blocking scale</p>
            </Prose>
            <IconCardList
              items={[
                { icon: Layers, title: '01 — Too many tools', description: 'PKs juggled between WhatsApp, Google Sheets, Forms, and Slides—fragmented workflows led to confusion and errors.' },
                { icon: RefreshCcw, iconColor: 'var(--icon-orange)', title: '02 — Too much manual work', description: 'Everything from attendance tracking to report generation was done manually, consuming hours of valuable time.' },
                { icon: ShieldCheck, iconColor: 'var(--icon-purple)', title: '03 — No consistent measurement', description: "Without standardized metrics, PKM supervisors couldn't evaluate performance or identify areas for improvement across regions." },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Discovery Phase">
            <h3 className="text-xl font-bold text-foreground">Research</h3>
            <Prose>
              <p>Deep dive into user needs across multiple regions — Jakarta • Oct 2019, Makassar • Jan 2020</p>
            </Prose>
            <StatGrid
              columns={3}
              stats={[
                { value: '170', label: 'Performance Katalysts interviewed' },
                { value: '75', label: 'PKM Supervisors consulted' },
                { value: '2,700', label: 'Drivers surveyed' },
              ]}
            />
            <IconCardList
              columns={2}
              items={[
                { icon: RefreshCcw, title: 'Context switching kills productivity', description: 'PKs spend 40% of session time managing tools instead of engaging drivers' },
                { icon: ShieldCheck, iconColor: 'var(--icon-green)', title: 'Trust requires transparency', description: 'Drivers want to see their attendance tracked in real-time' },
                { icon: Layers, iconColor: 'var(--icon-purple)', title: 'PKMs need data, not documents', description: 'Supervisors struggle to extract insights from hundreds of spreadsheets' },
                { icon: Smartphone, iconColor: 'var(--icon-orange)', title: 'Mobile-first is non-negotiable', description: '89% of PKs run sessions from their phones while on the road' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="User Journey Analysis">
            <h3 className="text-xl font-bold text-foreground">Workflow Pain Points</h3>
            <Prose>
              <p>Mapping the entire Kopdar lifecycle to identify friction</p>
            </Prose>
            <ImageBlock
              src="/images/casestudy-3/workflow-pain-points.png"
              alt="Kopdar workflow diagram showing pain points across the lifecycle"
            />
            <Prose callout>
              Each Kopdar cycle generated <strong>15+ hours of manual work</strong>{' '}
              across fragmented tools, with zero visibility for supervisors until
              reports were manually compiled days later.
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="The Solution">
            <h3 className="text-xl font-bold text-foreground">Unified Platform</h3>
            <Prose>
              <p>Consolidating the entire Kopdar workflow—from planning to insights</p>
            </Prose>
            <ImageBlock
              src="/images/casestudy-3/proposed-solution.png"
              alt="Kopdar proposed solution diagram"
            />

            <h3 className="text-xl font-bold text-foreground mt-8">
              Data Flow Architecture
            </h3>
            <StepFlow
              steps={[
                { icon: UsersIcon, title: 'PK creates session', description: 'Selects drivers, sets schedule' },
                { icon: Smartphone, iconColor: 'var(--icon-green)', title: 'Drivers receive invite', description: 'RSVP & view materials' },
                { icon: RefreshCcw, iconColor: 'var(--icon-orange)', title: 'Live session runs', description: 'Attendance, Q&A, feedback' },
                { icon: Network, iconColor: 'var(--icon-purple)', title: 'Auto-sync to PKM', description: 'Real-time dashboards' },
              ]}
            />
            <ImageBlock
              src="/images/casestudy-3/new-workflow.png"
              alt="Kopdar new workflow diagram"
            />
            <Prose>
              <p>
                All session data flows automatically through the platform, eliminating
                manual entry and providing instant visibility to supervisors.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Product Walkthrough">
            <h3 className="text-xl font-bold text-foreground">Key Screens</h3>
            <div className="space-y-8">
              <ImageBlock
                heading="01 — Kopdar Dashboard"
                src="/images/casestudy-3/dashboard-screen.png"
                alt="Kopdar Dashboard screen showing session overview and community"
                caption="PKs get an at-a-glance overview of their community: upcoming sessions, attendance trends, and pending action items—all surfaced without digging through menus."
              />
              <ImageBlock
                heading="02 — Creating New Kopdar Session"
                src="/images/casestudy-3/create-event-screens.png"
                alt="New Kopdar session creation flow showing driver selection"
                caption="PKs can now create sessions in under 2 minutes—selecting drivers from their community, choosing templates, and scheduling both K1 and K2 in one unified flow."
              />
              <ImageBlock
                heading="03 — Conducting Kopdar Session"
                src="/images/casestudy-3/conduct-event-screen.png"
                alt="Active Kopdar session screen showing attendance, notes"
                caption="During the session, PKs manage attendance, capture notes, and field driver questions in real time—everything recorded in one place so nothing is lost after the meeting."
              />
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Validation">
            <h3 className="text-xl font-bold text-foreground">Testing & Validation</h3>
            <Prose>
              <p>Usability testing in Jakarta and Makassar with 24 PKs and 8 PKMs</p>
            </Prose>
            <div className="grid sm:grid-cols-2 gap-4">
              <ImageBlock src="/images/casestudy-3/field-workshop-1.png" alt="Field research workshop" />
              <ImageBlock src="/images/casestudy-3/field-workshop-2.png" alt="Team workshop in Jakarta" />
              <ImageBlock src="/images/casestudy-3/research-session-1.jpg" alt="User research session" />
              <ImageBlock src="/images/casestudy-3/research-session-2.jpg" alt="User testing session" />
            </div>
            <h3 className="text-xl font-bold text-foreground mt-6">Key Findings</h3>
            <CalloutList
              marker="✓"
              tone="positive"
              items={[
                '92% of PKs completed session creation without assistance',
                'Average attendance recording time reduced from 8 min to 45 sec',
                'PKMs praised real-time visibility: "I can finally see what\'s happening"',
                'QR code check-in was the most-loved feature among drivers',
              ]}
            />
            <h3 className="text-xl font-bold text-foreground mt-6">Iterations</h3>
            <div className="space-y-3">
              {[
                {
                  before: 'Initial design had separate flows for K1 and K2',
                  after: 'Combined into one flow with session type selection',
                },
                {
                  before: 'Q&A required internet connection to submit',
                  after: 'Added offline mode with sync when connection returns',
                },
                {
                  before: 'Dashboard showed too many metrics at once',
                  after: 'Progressive disclosure with customizable views',
                },
              ].map((it, i) => (
                <div key={i} className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                    <span className="font-semibold">Before:</span> {it.before}
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                    <span className="font-semibold">After:</span> {it.after}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Results">
            <h3 className="text-xl font-bold text-foreground">The Impact</h3>
            <Prose>
              <p>Measurable improvements across all key metrics</p>
            </Prose>
            <StatGrid
              columns={4}
              stats={[
                { value: '85%', label: 'Reduction in manual tasks', sublabel: 'PKs save 12+ hours per month' },
                { value: '3.2×', label: 'Increase in consistency', sublabel: 'Standardized metrics nationwide' },
                { value: '94%', label: 'PK confidence score', sublabel: '"I feel more professional"' },
                { value: '500+', label: 'Scaling readiness', sublabel: 'Platform ready for expansion' },
              ]}
            />
            <h3 className="text-xl font-bold text-foreground mt-6">Business Impact</h3>
            <StatGrid
              columns={2}
              stats={[
                { value: '2,400+', label: 'Sessions processed in 3 months' },
                { value: '18,000+', label: 'Drivers engaged' },
              ]}
            />
            <Prose>
              <p>
                PKM supervisors reported that real-time insights helped them identify
                and support struggling PKs 5× faster than before.
              </p>
            </Prose>
            <Quote attribution="PKM, Jakarta Region">
              "This changed how we work. We're not just managing sessions anymore—we're
              building a smarter, more connected community."
            </Quote>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Personal Takeaways">
            <h3 className="text-xl font-bold text-foreground">Reflection</h3>
            <Prose>
              <p>
                This project pushed me to think beyond individual user flows and
                consider the entire ecosystem. Designing for PKs meant designing for
                PKMs, and designing for both meant ensuring drivers felt the impact too.
                Balancing these stakeholder needs required constant negotiation and
                prioritization.
              </p>
            </Prose>
            <h3 className="text-xl font-bold text-foreground mt-6">
              Designing for Real-World Constraints
            </h3>
            <Prose>
              <p>
                Early prototypes assumed reliable internet and modern smartphones—
                assumptions that shattered during field testing. Watching PKs struggle
                with connectivity in rural areas taught me to build resilience into the
                design from day one, not retrofit it later.
              </p>
              <p>
                I also learned the power of incremental adoption. Rather than launching
                a full replacement overnight, we designed the platform to work
                alongside existing tools initially. This reduced change management
                friction and built trust gradually. PKs chose to fully migrate because
                the value was undeniable—not because they were forced to.
              </p>
            </Prose>
            <h3 className="text-xl font-bold text-foreground mt-6">
              Impact Beyond Interfaces
            </h3>
            <Prose>
              <p>
                The real win wasn't the UI; it was giving PKs back their time, giving
                PKMs visibility they never had, and strengthening the bonds within
                Gojek's driver community. Beautiful design is meaningless without
                solving systemic problems.
              </p>
            </Prose>
            <p className="text-center text-muted-foreground italic mt-8">
              Thanks for reading this case study.
            </p>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

export { KopdarInitiativePage };
