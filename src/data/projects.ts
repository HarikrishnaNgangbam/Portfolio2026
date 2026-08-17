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
    coverImage: '/images/shared/project-phone-to-pc-cover.png',
    coverAlt: 'Phone to PC Resume - Taskbar and system-level continuity',
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
    coverImage: '/images/shared/project-pc-to-phone-cover.png',
    coverAlt: 'PC to Phone continuity - Desktop to mobile transition',
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
    coverImage: '/images/shared/project-family-safety-cover.png',
    coverAlt: 'Family Safety app interface with collaborative team environment',
  },
  {
    slug: 'kopdar-initiative',
    period: '2019-2020',
    role: 'Lead Product Designer',
    title: 'Kopdar Initiative: Scaling Driver Engagement for Gojek',
    subtitle: 'Community Engagement Platform',
    description:
      'Improving efficiency, consistency, and community connection across Indonesia. Transformed how thousands of drivers connect through face-to-face sessions, increasing attendance 3.2× and reducing admin time 65%.',
    tags: ['System Design', 'Community Engagement', 'Super App'],
    coverImage: '/images/shared/project-kopdar-cover.png',
    coverAlt: 'Gojek motorcycle driver in green jacket representing driver community',
  },
];
