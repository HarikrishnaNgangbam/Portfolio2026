import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Box,
  Cpu,
  Flag,
  Layers,
  Mail,
  MapPin,
  Puzzle,
  Share2,
  Sparkles,
  Users,
  Users2,
  FileText,
} from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { DotPattern } from '@/design-system/ui/dot-pattern';
import { PillCtaLink } from '@/design-system/ui/pill-cta-link';
import { CtaLinkRow } from '@/design-system/ui/cta-link-row';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { CtaBand } from '@/components/portfolio/cta-band';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { EditorialColumn } from '@/design-system/ui/editorial-column';
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

interface ContactOption {
  icon: IconComponent;
  color: string;
  title: string;
  hook: string;
  description: string;
  ctaLabel: string;
  href?: string;
  to?: string;
  external?: boolean;
}

const CONTACT_OPTIONS: ContactOption[] = [
  {
    icon: Mail,
    color: 'var(--icon-purple)',
    title: 'Email',
    hook: 'The best place to start.',
    description: 'For projects, opportunities, ideas, or simply a conversation about something you’re figuring out.',
    ctaLabel: 'Email me',
    href: EMAIL_HREF,
  },
  {
    icon: Linkedin,
    color: 'var(--icon-blue)',
    title: 'LinkedIn',
    hook: 'For a lighter hello.',
    description: "Let's connect and start a conversation.",
    ctaLabel: 'Connect on LinkedIn',
    href: LINKEDIN_URL,
    external: true,
  },
  {
    icon: FileText,
    color: 'var(--icon-teal)',
    title: 'Resume',
    hook: 'Want the short version?',
    description: "A quick overview of my experience, roles and the work I've done.",
    ctaLabel: 'View resume',
    to: '/resume',
  },
];

interface Interest {
  icon: IconComponent;
  color: string;
  category: string;
  hook: string;
  description: string;
}

const INTERESTS: Interest[] = [
  {
    icon: Users2,
    color: 'var(--icon-purple)',
    category: 'Design leadership',
    hook: 'Building teams that do better work.',
    description:
      'Helping designers grow, raising the quality bar, and creating the conditions for good design to influence product decisions.',
  },
  {
    icon: Puzzle,
    color: 'var(--icon-blue)',
    category: 'Complex products',
    hook: 'Making complicated things understandable.',
    description:
      "Products with multiple users, constraints, systems and moving parts — where the obvious solution usually isn't the right one.",
  },
  {
    icon: Flag,
    color: 'var(--icon-orange)',
    category: '0 → 1 & product strategy',
    hook: 'Figuring out what should exist in the first place.',
    description: 'Finding opportunities, shaping direction and turning ambiguity into something a team can build.',
  },
  {
    icon: Sparkles,
    color: 'var(--icon-teal)',
    category: 'AI & intelligent experiences',
    hook: 'Exploring what changes when software can think with us.',
    description: 'Designing AI experiences that are useful, understandable and still feel intentional.',
  },
];

const NETWORK_NODES: { icon: IconComponent; color: string; label: string; top: string; left: string }[] = [
  { icon: Box, color: 'var(--icon-blue)', label: 'Products', top: '10%', left: '18%' },
  { icon: Users, color: 'var(--icon-purple)', label: 'People', top: '10%', left: '82%' },
  { icon: Cpu, color: 'var(--icon-orange)', label: 'Technology', top: '52%', left: '94%' },
  { icon: Layers, color: 'var(--icon-teal)', label: 'Platforms', top: '92%', left: '68%' },
  { icon: Share2, color: 'var(--icon-green)', label: 'Ecosystems', top: '52%', left: '6%' },
];

/** Icon + short label chip used inside the problem diagram. */
function NodeCard({ icon: Icon, color, label }: { icon: IconComponent; color: string; label: string }) {
  return (
    <div
      className="flex items-center gap-1.5 md:gap-2 rounded-2xl bg-background border shadow-sm px-2 py-1.5 md:px-3 md:py-2.5"
      style={{ borderColor: tint(color, 25) }}
    >
      <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color }} aria-hidden="true" />
      <span className="text-[11px] md:text-xs font-medium text-foreground whitespace-nowrap">{label}</span>
    </div>
  );
}

/**
 * Central-hub diagram where the PROBLEM is the center (not the person) and
 * Products / People / Technology / Platforms / Ecosystems converge toward
 * it — built entirely with existing icons and inline SVG, no new assets.
 */
function ProblemDiagram() {
  return (
    <div className="relative w-full max-w-[260px] mx-auto lg:max-w-sm aspect-square">
      <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        {NETWORK_NODES.map((node) => (
          <line
            key={node.label}
            x1={`${parseFloat(node.left)}`}
            y1={`${parseFloat(node.top)}`}
            x2="50"
            y2="50"
            stroke="var(--border)"
            strokeWidth="0.6"
            strokeDasharray="2 2"
          />
        ))}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center shadow-sm px-2"
        style={{ backgroundColor: tint('var(--icon-purple)', 15) }}
      >
        <span className="text-sm md:text-base font-bold" style={{ color: 'var(--icon-purple)' }}>
          The problem
        </span>
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

function ContactPage() {
  return (
    <div style={CONTACT_THEME_VARS} className="bg-background text-foreground">
      <Seo
        title="Contact"
        description="Get in touch with Harikrishna about Design Leadership opportunities, complex product problems, 0 to 1 challenges and design strategy."
      />

      {/* Hero — primarily typographic, generous whitespace, no illustration */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
              Contact
            </p>
            <H1 size="page" className="font-serif mt-3 leading-[1.05]">
              Let's work on
              <br />
              the hard part.
            </H1>
            <div className="space-y-4 mt-5 max-w-xl">
              <LeadParagraph>
                I'm most interested in problems that don't have an obvious answer — where
                products, people, technology and business all need to move together.
              </LeadParagraph>
              <LeadParagraph>
                If you're building something complex, changing how a product works, or figuring
                out what comes next, I'd love to hear about it.
              </LeadParagraph>
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-7">
              <PillCtaLink href={EMAIL_HREF} label="Let's talk" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" style={{ color: 'var(--icon-purple)' }} aria-hidden="true" />
                {LOCATION}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} aria-hidden="true">
            <DotPattern
              className="hidden lg:block w-full h-64"
              spacing={24}
              size={1.25}
              color={tint('var(--icon-purple)', 35)}
            />
          </Reveal>
        </div>
      </section>

      {/* Contact options — compact editorial row, not boxed cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <NarrativeSection heading="Start wherever makes sense." />
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 mt-8 sm:divide-x sm:divide-border">
            {CONTACT_OPTIONS.map((option, i) => {
              const content = (
                <>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: tint(option.color, 18) }}
                    >
                      <option.icon className="w-5 h-5" style={{ color: option.color }} aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-foreground">{option.title}</h3>
                  </div>
                  <p className="text-foreground text-sm font-medium mt-4">{option.hook}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{option.description}</p>
                  <span
                    className="inline-flex items-center gap-2 font-medium mt-4 text-sm"
                    style={{ color: option.color }}
                  >
                    {option.ctaLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </>
              );
              const className = cn(i > 0 && 'sm:pl-6');
              return option.to ? (
                <Link key={option.title} to={option.to} className={className}>
                  {content}
                </Link>
              ) : (
                <a
                  key={option.title}
                  href={option.href}
                  target={option.external ? '_blank' : undefined}
                  rel={option.external ? 'noopener noreferrer' : undefined}
                  className={className}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Areas of interest */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <NarrativeSection heading="The kinds of problems I'm drawn to." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 items-start">
            {INTERESTS.map((item) => (
              <EditorialColumn
                key={item.category}
                icon={item.icon}
                color={item.color}
                variant="bordered"
                eyebrow={item.category}
                heading={item.hook}
              >
                {item.description}
              </EditorialColumn>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Philosophy / problem diagram */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-snug">
                Bring me the problem,
                <br />
                not just the brief.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mt-5">
                <p>
                  The most interesting work lives somewhere between products, platforms, people
                  and technology.
                </p>
                <p>
                  If you're wrestling with something that doesn't have a neat answer yet, let's
                  figure it out together.
                </p>
              </div>
            </div>
            <div>
              <ProblemDiagram />
              <p
                className="font-serif italic text-sm text-center mt-4"
                style={{ color: 'var(--icon-purple)' }}
              >
                The interesting work happens between the edges.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <CtaBand
            variant="panel"
            heading={
              <>
                Have something worth
                <br />
                figuring out?
              </>
            }
            button={<PillCtaLink href={EMAIL_HREF} label="Let's talk" />}
            links={
              <div className="space-y-3">
                <CtaLinkRow
                  href={LINKEDIN_URL}
                  external
                  icon={<Linkedin className="w-4 h-4" aria-hidden="true" />}
                  label="LinkedIn"
                />
                <CtaLinkRow
                  href={EMAIL_HREF}
                  icon={<Mail className="w-4 h-4" aria-hidden="true" />}
                  label="Email"
                />
                <CtaLinkRow
                  to="/resume"
                  icon={<FileText className="w-4 h-4" aria-hidden="true" />}
                  label="Resume"
                />
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
