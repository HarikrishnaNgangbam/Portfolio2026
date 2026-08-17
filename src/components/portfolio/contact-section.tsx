import { Mail } from 'lucide-react';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { ContactInfoCard } from '@/design-system/ui/contact-info-card';
import { Button } from '@/design-system/ui/button';
import { CONTACT_METHODS } from '@/data/contact';

export interface ContactSectionProps {
  /** Whether to render the "Let's Connect" H2 heading (Home embeds it inline; Contact renders its own H1 instead). */
  showHeading?: boolean;
}

function ContactSection({ showHeading = true }: ContactSectionProps) {
  return (
    <>
      {showHeading && (
        <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground mb-8">
          <Mail className="w-7 h-7" style={{ color: 'var(--icon-orange)' }} />
          Let's Connect
        </h2>
      )}
      <AcrylicCard variant="surface" interactive={false}>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I'm always interested in hearing about new opportunities, collaborations, or
          just connecting with fellow designers.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {CONTACT_METHODS.map((c) => (
            <ContactInfoCard key={c.label} {...c} />
          ))}
        </div>
        <Button
          className="mt-6"
          onClick={() => {
            window.location.href =
              'mailto:ngangbam.harikrishna@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Harikrishna,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...';
          }}
        >
          <Mail className="w-4 h-4" />
          Get in Touch
        </Button>
      </AcrylicCard>
    </>
  );
}

export { ContactSection };
