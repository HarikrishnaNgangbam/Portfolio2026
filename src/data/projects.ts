export interface ProjectSummary {
  slug: string;
  period: string;
  role: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  coverImage: string;
  coverAlt: string;
  /** Company the project was built at, for the compact project-card logo. Reuses the same logo assets as EXPERIENCE. */
  companyLogo?: string;
  companyLogoAlt?: string;
  /**
   * Homepage-only narrative framing for the "Selected Work" section. Falls
   * back to the case-study fields above (used on /work and the case-study
   * page itself) when absent.
   */
  narrative?: {
    title: string;
    /** Short editorial hook, e.g. "When the system spans devices". */
    label: string;
    description: string;
    /** Homepage badge labels — distinct from `tags`, which stays on /work. */
    capabilities: string[];
    /** Optional supporting metric line, only shown when backed by verified case-study data. */
    evidence?: string;
  };
}

export const PROJECTS: ProjectSummary[] = [
  {
    slug: 'phone-to-pc-resume',
    period: '2025-2026',
    role: 'Lead UX Designer',
    title: 'Phone to PC Resume: Designing Windows Cross Device Continuity Experience',
    subtitle: 'Designing Sync & Async Continuity',
    description:
      'System-level capability enabling users to continue active tasks from phone to PC, turning Windows into an active continuation partner with 3.1M monthly alerts and 28% taskbar engagement.',
    tags: ['Phone to PC Continuity', 'Task Continuity', 'Cross Platform'],
    coverImage: '/images/shared/project-phone-to-pc-cover.webp',
    coverAlt: 'Phone to PC Resume - Taskbar and system-level continuity',
    companyLogo: '/images/logos/microsoft-windows.webp',
    companyLogoAlt: 'Microsoft',
    narrative: {
      title: 'Windows Phone → PC Continuity',
      label: 'When the system spans devices',
      description:
        'Designing a cross-device experience that helps people resume work across phone and PC, without turning continuity into another task.',
      capabilities: ['Systems', 'Platform', 'Shipped'],
      evidence: '3.1M monthly alerts · 290K+ engaged users · 8.5% conversion',
    },
  },
  {
    slug: 'kopdar-initiative',
    period: '2019-2020',
    role: 'Lead Product Designer',
    title: 'Kopdar Initiative: Scaling Driver Engagement for Gojek',
    subtitle: 'Community Engagement Platform',
    description:
      'Improving efficiency, consistency, and community connection across Indonesia. Redesigned how thousands of drivers connect through face-to-face sessions, cutting effort per session by 20% and reaching 2× more drivers with the same team.',
    tags: ['System Design', 'Community Engagement', 'Super App'],
    coverImage: '/images/shared/project-kopdar-cover.webp',
    coverAlt: 'Gojek motorcycle driver in green jacket representing driver community',
    companyLogo: '/images/logos/gojek-tech.webp',
    companyLogoAlt: 'Gojek',
    narrative: {
      title: 'GoAgent / Kopdar',
      label: 'When the system spans an organization',
      description:
        "Turning fragmented field operations into a product ecosystem that could evolve with Gojek's rapidly growing network.",
      capabilities: ['Ecosystem', 'Operations', 'Scale'],
      evidence: '20% less effort per Kopdar · 2× drivers reached',
    },
  },
  {
    slug: 'family-safety',
    period: '2025',
    role: 'Design Lead',
    title: 'Family Safety: Scaling Design Exploration Through Vibe Coding',
    subtitle: 'Design Systems & Operations',
    description:
      'Democratizing early-stage design while maintaining system quality through a design-led governance model. Enabled PMs to ideate independently while Design retained quality ownership.',
    tags: ['AI Workflow', 'Vibe Coding', 'Design Operations'],
    coverImage: '/images/shared/project-family-safety-cover.webp',
    coverAlt: 'Family Safety app interface with collaborative team environment',
    companyLogo: '/images/logos/microsoft-windows.webp',
    companyLogoAlt: 'Microsoft',
    narrative: {
      title: 'Family Safety',
      label: 'When the system includes the design team',
      description:
        'Exploring how AI-assisted prototyping, design governance and new collaboration models could expand product exploration without creating a design bottleneck.',
      capabilities: ['Leadership', 'AI', 'Design Operations'],
    },
  },
  {
    slug: 'pc-to-phone-resume',
    period: '2025-Present',
    role: 'Lead Product Designer',
    title: 'PC to Phone Resume: Completing the Continuity Loop',
    subtitle: 'Bidirectional Cross-Device Continuity',
    description:
      'System-level capability enabling users to continue PC tasks on mobile when they step away, completing the bidirectional continuity loop and making Windows a connected journey.',
    tags: ['PC to Phone Continuity', 'Bi-directional Continuity', 'Connected Experience'],
    coverImage: '/images/shared/project-pc-to-phone-cover.webp',
    coverAlt: 'PC to Phone continuity - Desktop to mobile transition',
    companyLogo: '/images/logos/microsoft-windows.webp',
    companyLogoAlt: 'Microsoft',
    narrative: {
      title: 'PC → Phone Continuity',
      label: "When the system doesn't exist yet",
      description:
        'Exploring what continuity should look like when the user leaves the PC rather than arrives at it.',
      capabilities: ['0→1', 'Vision', 'Cross-platform'],
    },
  },
];

/**
 * Homepage display order. /work uses a separate mechanism (Settings >
 * Project Management order, defaulting to PROJECTS' declaration order
 * above), so keep this list and the PROJECTS array order in sync when a
 * project is added or reordered, unless the two pages should intentionally
 * diverge.
 */
export const HOME_PROJECT_ORDER = [
  'phone-to-pc-resume',
  'kopdar-initiative',
  'family-safety',
  'pc-to-phone-resume',
];
