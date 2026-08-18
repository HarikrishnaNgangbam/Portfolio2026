import { Users, LifeBuoy, Layers, MonitorSmartphone, UserCog, Handshake, Target, Sparkles, Hammer } from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { CardHeading } from '@/design-system/ui/card-heading';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { EditorialColumn } from '@/design-system/ui/editorial-column';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-6">
      <Seo
        title="About"
        description="Why Harikrishna became the kind of designer he is: an engineer and industrial designer by training who learned to design for reality at Gojek, think beyond the product at Microsoft, and lead teams through complexity."
      />
      <Reveal>
        <H1>I've always liked figuring out how things work.</H1>
        <LeadParagraph className="mt-4">
          I'm an engineer and industrial designer by training, and a product designer by
          experience. That foundation still influences how I work today. I naturally want to
          understand how things are constructed, where constraints come from and how
          individual parts interact to create a whole.
        </LeadParagraph>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={Users} iconColor="var(--icon-green)">
            Gojek taught me to design for reality.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I've spent over 10 years designing products across operating systems,
              mobility, fintech, healthcare and emergency services. Five of those years were
              at Gojek, during its high-growth phase.
            </p>
            <p>
              Working closely with Operations changed how I thought about users. Drivers,
              agents and merchants weren't simply people using an app. For many of them, the
              product was tightly connected to their livelihood: how much they earned, how
              smoothly their day went, whether a support issue got resolved before it cost
              them a trip or a customer.
            </p>
            <p>
              Some of the most important users are also the least visible. They rarely show
              up in typical product feedback loops, but the decisions we made mattered
              enormously to them. Learning to notice and design for that group changed how I
              approach every product since.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={LifeBuoy} iconColor="var(--icon-orange)">
            The real test of customer experience is when things go wrong.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Everybody is good at customer experience when things are going well. The real
              test is what happens when they don't.
            </p>
            <p>
              When something breaks, whether it's a payment that failed or a ride that went
              wrong, people feel anxious. What they need in that moment is fast resolution,
              clear communication and a sense that someone is accountable for making it
              right. Recovering trust well often matters more than never losing it in the
              first place.
            </p>
            <p>
              At Gojek, I designed the broader Care ecosystem that made this possible: an
              end-to-end customer support system spanning the Help Center, a help-article
              CMS, HelpBot, an Automation Designer and a Bot Builder that let the support
              organization keep improving how issues got resolved.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={Layers} iconColor="var(--icon-purple)">
            From task tool to operating platform.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              GoAgent started as a simple tool to help Gojek's field agents complete their
              daily tasks. Over time, it evolved into a foundation for six or more
              operational capabilities spanning the driver lifecycle: lead capture,
              onboarding, engagement, growth and loyalty.
            </p>
            <p>
              The most valuable part wasn't any individual feature. It was creating a
              foundation that made the next operational requirement easier to build, from
              Driver Health Checks to COVID Kit distribution during the pandemic.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={MonitorSmartphone} iconColor="var(--icon-blue)">
            Microsoft taught me to think beyond the product.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Microsoft, the problem often doesn't stop at the edge of an application.
              Someone might start a task on their phone, continue it on a PC, move between
              applications, cross platform boundaries, and come back to it later in a
              completely different context.
            </p>
            <p>
              Working on Windows Connected Experience & Ecosystem means designing for
              cross-device continuity: platform behavior, ecosystem thinking and,
              increasingly, AI-driven contextual experiences that adapt to where and how
              someone is working.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={UserCog} iconColor="var(--icon-pink)">
            Leadership changed the question.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              As my scope grew, I realized that designing the right experience wasn't always
              the hardest problem. Sometimes the harder problem was creating the conditions
              for a team to make good decisions consistently.
            </p>
            <p>
              That's meant managing and mentoring up to four designers: running 1:1s,
              unblocking their work, supporting their career development, and setting a
              cadence of design reviews that kept quality consistent without slowing the team
              down. It's also meant taking on stakeholder management, capacity management
              and design governance as the team's scope grew.
            </p>
            <p>
              Three of the designers I led were promoted to senior designer during that time.
              It's one of the things I'm proudest of from those years.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={Handshake} iconColor="var(--icon-teal)">
            Clarity is a leadership tool.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              For a stretch of my time at Gojek, I was the only designer supporting seven
              different products. That experience taught me lessons I still carry today,
              some of them the hard way.
            </p>
            <p>
              Capacity is finite, and pretending otherwise just moves the problem downstream.
              Making that capacity visible, instead of quietly absorbing more work, made
              conversations with stakeholders more honest. I learned not to over-promise, to
              prioritize alongside Product rather than in isolation, and to build workflows
              transparent enough to reduce anxiety instead of creating it.
            </p>
            <p>
              When priorities conflict, I work with Product to decide together, rather than
              trying to resolve it alone.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={Target} iconColor="var(--icon-cyan)">
            Design should have a seat at the decision table.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I don't see design as a downstream service for Product. I work alongside
              Product and Engineering to frame problems, shape direction, define goals and
              take ownership of outcomes.
            </p>
            <p>
              In practice, that means being part of the conversations about product mission,
              vision and goals, not just the ones about screens, and treating OKRs as
              something design should help shape, not just support.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={Sparkles} iconColor="var(--icon-green)">
            AI is changing the equation again.
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              AI is changing not just what we can build, but who gets to explore ideas and
              how quickly teams can learn.
            </p>
            <p>
              That's the question behind Family Safety: using AI-assisted prototyping to let
              PMs explore ideas independently, running design office hours to support them,
              and building enough governance that system quality held up even as more people
              could contribute to early-stage design. It expanded design capacity without
              diluting design quality.
            </p>
            <p>
              I'm interested in using that capability without losing the things that make
              good design good: empathy, judgement, systems thinking and craft.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading as="h2" icon={Hammer} iconColor="var(--icon-orange)">
            Outside the screen
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>I like making things.</p>
            <p>
              Sometimes that's a product prototype. Sometimes it's a piece of furniture, a
              shelf, or whatever DIY rabbit hole I've fallen into recently. I'm the kind of
              person who watches gadget reviews for fun and can't resist taking something
              apart just to see how it works.
            </p>
            <p>
              Maybe that's why I've always been drawn to problems where you can take
              something complicated, pull it apart, understand the pieces and put it back
              together in a way that feels simpler.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <NarrativeSection heading="Clarity. Empathy. Ownership.">
          <div className="grid sm:grid-cols-3 gap-8">
            <EditorialColumn heading="Clarity">
              Make complexity visible so teams can make better decisions.
            </EditorialColumn>
            <EditorialColumn heading="Empathy">
              Understand the people affected by the system, especially those whose voices
              are easiest to miss.
            </EditorialColumn>
            <EditorialColumn heading="Ownership">
              Designers should participate in product decisions and own outcomes, not just
              deliverables.
            </EditorialColumn>
          </div>
          <p className="text-lg font-medium text-foreground italic">
            That's the kind of designer I'm trying to become better at being.
          </p>
        </NarrativeSection>
      </Reveal>
    </div>
  );
}

export { AboutPage };
