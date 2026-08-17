import { User, Briefcase, Award, Heart } from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { CardHeading } from '@/design-system/ui/card-heading';
import { DotList } from '@/design-system/ui/dot-list';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { EXPERIENCE, SKILLS } from '@/data/experience';

const CURRENT_ROLE = EXPERIENCE[0];

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-6">
      <Seo
        title="About"
        description="Multi-disciplinary UX Designer with 10+ years shaping high-scale products across operating systems and diverse industries."
      />
      <Reveal>
        <H1>About Me</H1>
        <LeadParagraph className="mt-4">
          Multi-disciplinary UX Designer with 10+ years shaping high-scale products
        </LeadParagraph>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading icon={User} iconColor="var(--icon-purple)">
            Hello, I'm Harikrishna Ngangbam
          </CardHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Multi-disciplinary designer with 10+ years building high-scale products
              across operating systems and diverse industries. I pair blue-sky vision
              with grounded execution, leveraging AI to uncover new opportunities. I
              thrive in zero-to-one product creation and in scaling ecosystems to their
              full potential.
            </p>
            <p>
              I'm a tech enthusiast and DIY tinkerer who binge-watches gadget reviews so
              you don't have to. Your unofficial guide to the next smart buy. Engineer
              and industrial designer by degree, UX designer by lived experience.
            </p>
            <p>
              Curiosity, empathy, and precision drive me to create elegant, efficient,
              and enduring design outcomes.
            </p>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading icon={Briefcase} iconColor="var(--icon-blue)">
            Current Role
          </CardHeading>
          <h4 className="font-bold text-lg text-foreground">{CURRENT_ROLE.role}</h4>
          <p className="text-muted-foreground mt-1 flex items-center gap-2">
            <img
              src={CURRENT_ROLE.companyLogo}
              alt={CURRENT_ROLE.companyLogoAlt}
              className="h-[1em] w-auto object-contain"
            />
            {CURRENT_ROLE.company}
            <span aria-hidden="true">•</span>
            {CURRENT_ROLE.dates}
          </p>
          <div className="mt-4">
            <DotList items={CURRENT_ROLE.homeBullets ?? []} />
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading icon={Award} iconColor="var(--icon-blue)">
            Skills & Expertise
          </CardHeading>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-foreground mb-3">Core Strengths</h4>
              <DotList items={SKILLS.coreStrengths} />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Capabilities</h4>
              <DotList items={SKILLS.capabilities} />
            </div>
          </div>
        </AcrylicCard>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false}>
          <CardHeading icon={Heart} iconColor="var(--icon-pink)">
            Design Philosophy
          </CardHeading>
          <p className="text-muted-foreground leading-relaxed">
            I believe great design should empower users while anticipating their needs.
            By combining systems thinking with practical execution, I create experiences
            that are both visionary and grounded. My approach leverages emerging
            technologies like AI to build product ecosystems that are elegant,
            efficient, and built to last.
          </p>
        </AcrylicCard>
      </Reveal>
    </div>
  );
}

export { AboutPage };
