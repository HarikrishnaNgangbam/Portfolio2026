import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { buttonVariants } from '@/design-system/ui/button';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { ExperienceCard } from '@/design-system/ui/experience-card';
import { DotList } from '@/design-system/ui/dot-list';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { assetUrl } from '@/lib/asset-url';
import { EXPERIENCE, EDUCATION, SKILLS } from '@/data/experience';

const ALL_SKILLS = [...SKILLS.coreStrengths, ...SKILLS.capabilities];

function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10">
      <Seo
        title="Resume"
        description="Multi-disciplinary UX Designer with 10+ years shaping high-scale products across operating systems and diverse industries."
      />
      <Reveal>
        <H1>Resume</H1>
        <LeadParagraph className="mt-4">
          Multi-disciplinary UX Designer with 10+ years shaping high-scale products
          across operating systems and diverse industries
        </LeadParagraph>
        <a
          href={assetUrl('/documents/Harikrishna_Product_Designer_Resume.pdf')}
          download
          className={buttonVariants({ className: 'mt-6' })}
        >
          <Download className="w-4 h-4" />
          Download PDF Resume
        </a>
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
          Skills & Expertise
        </h2>
        <AcrylicCard variant="surface" interactive={false}>
          <DotList items={ALL_SKILLS} />
        </AcrylicCard>
      </Reveal>
    </div>
  );
}

export { ResumePage };
