import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Box,
  Building2,
  Calendar,
  Cpu,
  Flag,
  Heart,
  Layers,
  Mail,
  MapPin,
  Puzzle,
  Share2,
  Sparkles,
  User,
  Users,
  Users2,
  FileText,
} from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { DotPattern } from '@/design-system/ui/dot-pattern';
import { buttonVariants } from '@/design-system/ui/button';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { CtaBand } from '@/components/portfolio/cta-band';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { EMAIL_HREF, LINKEDIN_URL, LOCATION } from '@/data/contact';
import { tint } from '@/lib/color';
import { cn, type IconComponent } from '@/lib/utils';

/**
 * Same warm-editorial token override Home, About and Work use, scoped to
 * this page's own root wrapper only. Duplicated rather than imported from a
 * shared constant so this change never touches those pages.
 */
const CONTACT_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-purple)',
  '--ring': 'var(--icon-purple)',
} as React.CSSProperties;

const INTERESTS: { icon: IconComponent; color: string; title: string; description: string }[] = [
  {
    icon: Users2,
    color: 'var(--icon-purple)',
    title: 'Design Leadership',
    description: 'Leading and mentoring design teams, raising the bar and helping people grow.',
  },
  {
    icon: Puzzle,
    color: 'var(--icon-blue)',
    title: 'Complex Product Problems',
    description: 'Tackling problems with many moving parts and no obvious solution.',
  },
  {
    icon: Flag,
    color: 'var(--icon-orange)',
    title: '0→1 & Product Strategy',
    description: 'Defining opportunities, shaping vision and building from the ground up.',
  },
  {
    icon: Sparkles,
    color: 'var(--icon-teal)',
    title: 'AI / Intelligent Experiences',
    description: 'Exploring how AI can expand design capacity without losing the craft.',
  },
];

const CONTEXT_ITEMS: { icon: IconComponent; color: string; title: string; description: string }[] = [
  {
    icon: MapPin,
    color: 'var(--icon-purple)',
    title: `Based in ${LOCATION}`,
    description: 'Proud of my roots and the perspective they bring to my work.',
  },
  {
    icon: Calendar,
    color: 'var(--icon-blue)',
    title: '10+ years designing products',
    description: 'Across Microsoft and Gojek, from 0→1 ideas to scale.',
  },
  {
    icon: Building2,
    color: 'var(--icon-orange)',
    title: 'Microsoft & Gojek',
    description: 'Different contexts, same throughline: understanding the system and finding where design can create leverage.',
  },
  {
    icon: Heart,
    color: 'var(--icon-teal)',
    title: 'Outside of work',
    description: 'I enjoy figuring out how things work, DIY projects and the occasional gadget rabbit hole.',
  },
];

const NETWORK_NODES: { icon: IconComponent; color: string; label: string; top: string; left: string }[] = [
  { icon: Box, color: 'var(--icon-blue)', label: 'Products', top: '12%', left: '20%' },
  { icon: Users, color: 'var(--icon-purple)', label: 'People', top: '12%', left: '80%' },
  { icon: Layers, color: 'var(--icon-teal)', label: 'Platforms', top: '50%', left: '92%' },
  { icon: Share2, color: 'var(--icon-green)', label: 'Ecosystems', top: '88%', left: '50%' },
  { icon: Cpu, color: 'var(--icon-orange)', label: 'Technology', top: '50%', left: '8%' },
];

/** Icon + short label chip used inside the hero and network illustrations. */
function NodeCard({ icon: Icon, color, label }: { icon: IconComponent; color: string; label?: string }) {
  return (
    <div
      className="flex items-center gap-1.5 md:gap-2 rounded-2xl bg-background border shadow-sm px-2 py-1.5 md:px-3 md:py-2.5"
      style={{ borderColor: tint(color, 25) }}
    >
      <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color }} />
      {label && (
        <span className="text-[11px] md:text-xs font-medium text-foreground whitespace-nowrap">{label}</span>
      )}
    </div>
  );
}

/**
 * Lightweight editorial diagram recreating the reference's communication
 * visual entirely with existing icons/CSS/SVG — no new image assets, and no
 * invented signature/quote card.
 */
function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto lg:max-w-sm lg:mx-0 lg:ml-auto aspect-square">
      <DotPattern
        className="hidden lg:block absolute -right-6 -top-6 w-24 h-24 -z-10"
        spacing={14}
        size={1.25}
        color="var(--icon-purple)"
      />
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 280 280"
        fill="none"
        aria-hidden="true"
      >
        <path d="M140 90 Q90 140 70 195" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 5" />
        <path d="M150 100 Q195 150 205 200" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 5" />
      </svg>

      <div
        className="absolute left-1/2 top-6 -translate-x-1/2 w-24 h-24 md:w-28 md:h-28 rounded-3xl flex items-center justify-center shadow-sm"
        style={{ backgroundColor: tint('var(--icon-purple)', 10) }}
      >
        <Mail className="w-10 h-10 md:w-12 md:h-12" style={{ color: 'var(--icon-purple)' }} />
      </div>

      <div className="absolute left-2 bottom-10 md:bottom-14">
        <NodeCard icon={Linkedin} color="var(--icon-blue)" />
      </div>
      <div className="absolute right-2 bottom-2">
        <NodeCard icon={FileText} color="var(--icon-teal)" />
      </div>

      <span
        className="absolute left-[20%] top-[58%] w-2 h-2 rounded-full"
        style={{ backgroundColor: 'var(--icon-orange)' }}
        aria-hidden="true"
      />
      <span
        className="absolute right-[22%] top-[62%] w-2 h-2 rounded-full"
        style={{ backgroundColor: 'var(--icon-teal)' }}
        aria-hidden="true"
      />
    </div>
  );
}

/** Central-hub network diagram illustrating the "products / people / technology / platforms / ecosystems" positioning. */
function NetworkDiagram() {
  return (
    <div className="relative w-full max-w-[240px] mx-auto lg:max-w-sm aspect-square">
      <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        {NETWORK_NODES.map((node) => (
          <line
            key={node.label}
            x1="50"
            y1="50"
            x2={`${parseFloat(node.left)}`}
            y2={`${parseFloat(node.top)}`}
            stroke="var(--border)"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-sm"
        style={{ backgroundColor: tint('var(--icon-purple)', 15) }}
      >
        <User className="w-7 h-7" style={{ color: 'var(--icon-purple)' }} />
      </div>

      {NETWORK_NODES.map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: node.top, left: node.left }}
        >
          <NodeCard icon={node.icon} color={node.color} label={node.label} />
        </div>
      ))}
    </div>
  );
}

interface ContactOptionCardProps {
  icon: IconComponent;
  color: string;
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  to?: string;
  external?: boolean;
  highlighted?: boolean;
}

function ContactOptionCard({
  icon: Icon,
  color,
  title,
  description,
  ctaLabel,
  href,
  to,
  external,
  highlighted,
}: ContactOptionCardProps) {
  const content = (
    <>
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: tint(color, 18) }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mt-1.5">{description}</p>
      <span className="inline-flex items-center gap-2 font-medium mt-4 text-sm" style={{ color }}>
        {ctaLabel}
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </>
  );
  const className = 'rounded-2xl border p-6 transition-colors duration-200 block';
  const style = highlighted
    ? { borderColor: tint(color, 30), backgroundColor: tint(color, 5) }
    : { borderColor: 'var(--border)' };

  if (to) {
    return (
      <Link to={to} className={className} style={style}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
      style={style}
    >
      {content}
    </a>
  );
}

function ContactPage() {
  return (
    <div style={CONTACT_THEME_VARS} className="bg-background text-foreground">
      <Seo
        title="Contact"
        description="Get in touch with Harikrishna about Senior Product Design and Lead Product Design opportunities, complex product problems and design leadership."
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
              Contact
            </p>
            <H1 size="page" className="font-serif mt-3 leading-[1.05]">
              Let's work on something difficult.
            </H1>
            <LeadParagraph className="mt-5 max-w-xl">
              I'm interested in complex product problems where design has a seat at the table. If
              you're building a product, platform or ecosystem and looking for someone who can
              think strategically while staying close to the craft, I'd be glad to talk.
            </LeadParagraph>
            <div className="flex flex-wrap items-center gap-5 mt-7">
              <a
                href={EMAIL_HREF}
                className={cn(buttonVariants(), 'rounded-full bg-foreground text-background hover:bg-foreground/90')}
              >
                Let's talk
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" style={{ color: 'var(--icon-purple)' }} />
                {LOCATION}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <HeroIllustration />
          </Reveal>
        </div>
      </section>

      {/* Get in touch */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Get in touch</h2>
          <div className="grid sm:grid-cols-3 gap-4 mt-8 items-start">
            <ContactOptionCard
              icon={Mail}
              color="var(--icon-purple)"
              title="Email"
              description="The best way to reach me for projects, ideas or a hello."
              ctaLabel="Email me"
              href={EMAIL_HREF}
              highlighted
            />
            <ContactOptionCard
              icon={Linkedin}
              color="var(--icon-blue)"
              title="LinkedIn"
              description="Let's connect and start a conversation."
              ctaLabel="Connect on LinkedIn"
              href={LINKEDIN_URL}
              external
            />
            <ContactOptionCard
              icon={FileText}
              color="var(--icon-teal)"
              title="Resume"
              description="Want a quick overview of my experience and work?"
              ctaLabel="View resume"
              to="/resume"
            />
          </div>
        </Reveal>
      </section>

      {/* Interests */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            I'm especially interested in...
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 items-start">
            {INTERESTS.map((item) => (
              <div key={item.title} className="rounded-2xl p-5" style={{ backgroundColor: tint(item.color, 6) }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: tint(item.color, 18) }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-foreground leading-snug">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Bring me a problem */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-snug">
                Bring me a problem,
                <br />
                not just a job description.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mt-5">
                <p>
                  The most interesting work lives at the intersection of products, platforms,
                  ecosystems, people and technology.
                </p>
                <p>
                  If you have a challenge in that space, I'd love to hear about it and explore
                  what's possible together.
                </p>
              </div>
            </div>
            <NetworkDiagram />
          </div>
        </Reveal>
      </section>

      {/* Personal context */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            A little context before we talk.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:divide-x lg:divide-border">
            {CONTEXT_ITEMS.map((item, i) => (
              <div key={item.title} className={cn(i > 0 && 'lg:pl-8')}>
                <item.icon className="w-5 h-5 mb-3" style={{ color: item.color }} />
                <h3 className="font-bold text-foreground text-sm leading-snug">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-medium mt-8 hover:gap-3 transition-all"
          >
            Read more about my journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <CtaBand
            variant="panel"
            heading="Have a complex problem worth exploring?"
            button={
              <a
                href={EMAIL_HREF}
                className={cn(buttonVariants(), 'rounded-full bg-foreground text-background hover:bg-foreground/90')}
              >
                Let's talk
                <ArrowRight className="w-4 h-4" />
              </a>
            }
            links={
              <div className="space-y-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <Link
                  to="/resume"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </Link>
              </div>
            }
          >
            I'm interested in Design Leadership opportunities where I can help shape products,
            platforms, ecosystems and 0→1 challenges.
          </CtaBand>
        </Reveal>
      </section>
    </div>
  );
}

export { ContactPage };
