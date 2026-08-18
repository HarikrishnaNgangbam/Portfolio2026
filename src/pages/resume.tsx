import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Award, Download, ArrowRight } from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { buttonVariants } from '@/design-system/ui/button';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { ExperienceCard } from '@/design-system/ui/experience-card';
import { DotList } from '@/design-system/ui/dot-list';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { EditorialColumn } from '@/design-system/ui/editorial-column';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { assetUrl } from '@/lib/asset-url';
import { EXPERIENCE, EDUCATION, SKILLS } from '@/data/experience';
import { LINKEDIN_URL } from '@/data/contact';

const LEADERSHIP_EVIDENCE = [
  {
    heading: 'People',
    body: 'Led up to four designers and supported career development, with three junior designers progressing to senior roles.',
  },
  {
    heading: 'Product',
    body: 'Partnered with Product and Engineering on mission, vision, goals, priorities and outcomes.',
  },
  {
    heading: 'Systems',
    body: 'Designed products and platforms spanning cross-device experiences, operations, care and communication.',
  },
  {
    heading: 'Practice',
    body: 'Established design reviews, workflows, governance and AI-assisted exploration to improve design quality and team capability.',
  },
];

function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10">
      <Seo
        title="Resume"
        description="Design Leader and Senior Product Designer with 10+ years designing products, platforms and ecosystems across Microsoft and Gojek."
      />
      <Reveal>
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">Resume</p>
        <H1 className="mt-2">Design Leader · Senior Product Designer</H1>
        <LeadParagraph className="mt-4">
          10+ years designing products, platforms and ecosystems across Microsoft and Gojek,
          from 0→1 experiences to systems operating at scale.
        </LeadParagraph>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href={assetUrl('/documents/Harikrishna_Product_Designer_Resume.pdf')}
            download
            className={buttonVariants()}
          >
            <Download className="w-4 h-4" />
            Download Resume PDF
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'outline' })}
          >
            <Linkedin className="w-4 h-4" />
            View LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground mb-8">
          <Briefcase className="w-7 h-7" style={{ color: 'var(--icon-blue)' }} />
          Professional Experience
        </h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 60}>
              <ExperienceCard
                role={exp.role}
                company={exp.company}
                companyLogo={exp.companyLogo}
                companyLogoAlt={exp.companyLogoAlt}
                dates={exp.dates}
                bullets={exp.resumeBullets}
              />
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <NarrativeSection heading="Leadership & Impact">
          <div className="grid sm:grid-cols-2 gap-8">
            {LEADERSHIP_EVIDENCE.map((item) => (
              <EditorialColumn key={item.heading} heading={item.heading}>
                {item.body}
              </EditorialColumn>
            ))}
          </div>
        </NarrativeSection>
      </Reveal>

      <Reveal>
        <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground mb-8">
          <GraduationCap className="w-7 h-7" style={{ color: 'var(--icon-blue)' }} />
          Education
        </h2>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <AcrylicCard key={edu.degree} variant="surface" interactive={false}>
              <h3 className="font-bold text-xl text-foreground">{edu.degree}</h3>
              <p className="text-muted-foreground mt-1 flex items-center gap-2">
                {edu.logo && (
                  <ImageWithFallback
                    src={edu.logo}
                    alt={edu.logoAlt}
                    className="h-[1em] w-auto object-contain"
                  />
                )}
                {edu.school}
              </p>
            </AcrylicCard>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground mb-8">
          <Award className="w-7 h-7" style={{ color: 'var(--icon-blue)' }} />
          Core Capabilities
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([category, items]) => (
            <AcrylicCard key={category} variant="surface" interactive={false}>
              <h3 className="font-bold text-foreground mb-3">{category}</h3>
              <DotList items={items} />
            </AcrylicCard>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Looking for the next complex problem.
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-3 max-w-xl mx-auto">
            I'm interested in Senior Product Design and Lead Product Design opportunities
            where I can contribute to product direction, design craft and the systems that
            help teams do their best work.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium mt-5 hover:gap-3 transition-all"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AcrylicCard>
      </Reveal>
    </div>
  );
}

export { ResumePage };
