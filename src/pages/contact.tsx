import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { buttonVariants } from '@/design-system/ui/button';
import { ContactInfoCard } from '@/design-system/ui/contact-info-card';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { DotList } from '@/design-system/ui/dot-list';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { assetUrl } from '@/lib/asset-url';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { EMAIL_HREF, LINKEDIN_URL, PHONE, PHONE_HREF, LOCATION } from '@/data/contact';

const TALK_TOPICS = [
  'Complex product problems',
  '0→1 product opportunities',
  'Product and design strategy',
  'Cross-platform experiences',
  'Design leadership',
  'AI and new ways of working',
  'Design systems and organizational capability',
];

function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10">
      <Seo
        title="Contact Harikrishna"
        description="Get in touch with Harikrishna about Senior Product Design and Lead Product Design opportunities, complex product problems and design leadership."
      />
      <Reveal>
        <H1>Let's work on something difficult.</H1>
        <LeadParagraph className="mt-4">
          I'm interested in complex product problems where design has a seat at the table. If
          you're building a product, platform or ecosystem and looking for someone who can
          think strategically while staying close to the craft, I'd be glad to talk.
        </LeadParagraph>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a href={EMAIL_HREF} className={buttonVariants({ variant: 'default' })}>
            <Mail className="w-4 h-4" />
            Email Harikrishna
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'outline' })}
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
          <a
            href={assetUrl('/documents/Harikrishna_Product_Designer_Resume.pdf')}
            download
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Download Resume
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>

      <Reveal>
        <p className="text-sm font-medium text-muted-foreground mb-3">Also reachable at</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <ContactInfoCard icon={MapPin} iconColor="var(--icon-purple)" label="Location" value={LOCATION} />
          <ContactInfoCard
            icon={Phone}
            iconColor="var(--icon-green)"
            label="Phone"
            value={PHONE}
            href={PHONE_HREF}
            copyOnClick
          />
        </div>
      </Reveal>

      <Reveal>
        <NarrativeSection heading="What I'm looking for">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Senior Product Design and Lead Product Design opportunities where the problem
              is bigger than a screen.
            </p>
            <p>
              I'm especially interested in products, platforms and ecosystems where design
              can influence both the experience and the system behind it.
            </p>
          </div>
        </NarrativeSection>
      </Reveal>

      <Reveal>
        <NarrativeSection heading="We could talk about...">
          <DotList items={TALK_TOPICS} />
        </NarrativeSection>
      </Reveal>

      <Reveal>
        <div className="pt-4 text-center">
          <p className="text-muted-foreground italic">
            If you've made it this far, you probably have an interesting problem.
          </p>
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-2 text-primary font-medium mt-3 hover:gap-3 transition-all"
          >
            Email me
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export { ContactPage };
