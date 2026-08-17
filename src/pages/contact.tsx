import { Mail, Phone, MapPin } from 'lucide-react';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { ContactInfoCard } from '@/design-system/ui/contact-info-card';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';

const CONTACT_PAGE_METHODS = [
  {
    icon: Mail,
    iconColor: 'var(--icon-orange)',
    label: 'Email',
    value: 'ngangbam.harikrishna@gmail.com',
    href: 'mailto:ngangbam.harikrishna@gmail.com',
    copyOnClick: true,
  },
  {
    icon: Linkedin,
    iconColor: 'var(--icon-blue)',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'http://linkedin.com/in/harikrishna-ngangbam',
    external: true,
  },
  {
    icon: Phone,
    iconColor: 'var(--icon-green)',
    label: 'Phone',
    value: '+91 999 89 567 28',
    href: 'tel:+919998956728',
    copyOnClick: true,
  },
  {
    icon: MapPin,
    iconColor: 'var(--icon-purple)',
    label: 'Location',
    value: 'Hyderabad, India',
  },
];

function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <Seo
        title="Contact"
        description="Let's discuss how we can work together to create exceptional user experiences."
      />
      <Reveal>
        <H1>Get In Touch</H1>
        <LeadParagraph className="mt-4">
          Let's discuss how we can work together to create exceptional user experiences
        </LeadParagraph>
      </Reveal>

      <Reveal>
        <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Contact Methods</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {CONTACT_PAGE_METHODS.map((c) => (
            <ContactInfoCard key={c.label} {...c} />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <AcrylicCard variant="surface" interactive={false} className="mt-6">
          <h3 className="text-xl font-bold text-foreground mb-3">Current Availability</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether you're
            looking for a full-time UX designer, a consultant for a specific project, or
            just want to discuss design ideas, feel free to reach out. I typically
            respond within 24-48 hours.
          </p>
        </AcrylicCard>
      </Reveal>
    </div>
  );
}

export { ContactPage };
