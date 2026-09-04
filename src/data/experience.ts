export interface ExperienceEntry {
  role: string;
  company: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  dates: string;
  location?: string;
  /** One-paragraph narrative summary for Home's "Career across scale and systems" section. */
  narrativeSummary?: string;
  /** Full bullet list shown on the Resume page. */
  resumeBullets: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Senior Product Designer',
    company: 'Microsoft - Windows',
    companyLogo: '/images/logos/microsoft-mark.svg',
    companyLogoAlt: 'Microsoft - Windows logo',
    dates: 'Aug 2024 - Present',
    location: 'Hyderabad, India',
    narrativeSummary:
      'Designing cross-device experiences across Windows, phones and connected ecosystems, while exploring how AI can make those experiences more adaptive and intelligent.',
    resumeBullets: [
      "Connected Experience & Ecosystem: Lead UX strategy for Windows cross-device continuity, shaping how users seamlessly move, resume, and complete tasks across PCs, phones, and connected devices.",
      'AI-Driven Experience Innovation: Spearheaded multiple AI-Led Design exploration sprints and workshops.',
    ],
  },
  {
    role: 'Head of Design',
    company: 'RED.HEALTH',
    companyLogo: '/images/logos/red-health.png',
    companyLogoAlt: 'RED.HEALTH logo',
    dates: 'Jun 2024 - Aug 2024',
    resumeBullets: [
      'Head of Design: Led the company-wide design strategy for next-generation emergency medical service products.',
      'Designed the Emergency Medical Service App & 5G-Ambulance Command Center, enabling faster response, streamlined triage, and intuitive user flows for critical situations.',
    ],
  },
  {
    role: 'Principal Product Designer',
    company: 'Funding Societies',
    companyLogo: '/images/logos/funding-societies.svg',
    companyLogoAlt: 'Funding Societies logo',
    dates: 'Feb 2023 - Nov 2023',
    resumeBullets: [
      'Principal Product Designer: Responsible for leading the design & features of the Product Growth Team.',
    ],
  },
  {
    role: 'Design Manager',
    company: 'Gojek Tech',
    companyLogo: '/images/logos/gojek.svg',
    companyLogoAlt: 'Gojek Tech logo',
    dates: 'Nov 2017 - Nov 2022',
    narrativeSummary:
      'Designing products for drivers, agents, merchants and customers during a period of extraordinary growth, and leading teams as the design organization scaled.',
    resumeBullets: [
      "Leadership & Ownership: Led a team of four Product Designers. Owned product and experience vision for Gojek's Care Platform and Communication Platform.",
      "Designed and scaled Gojek's entire Customer Support Ecosystem. Built the GoAgent - SuperApp for agents.",
      'Improved support accuracy and operational efficiency across Consumer, Driver, Merchant, and Agent verticals.',
    ],
  },
  {
    role: 'Industrial Designer',
    company: 'Godrej & Boyce',
    companyLogo: '/images/logos/godrej-boyce.svg',
    companyLogoAlt: 'Godrej & Boyce logo',
    dates: 'Mar 2016 - Nov 2017',
    resumeBullets: [
      'Industrial Designer (R&D Appliance): Responsible for the design & growth of Refrigerator Portfolio.',
    ],
  },
  {
    role: 'UX Design Intern',
    company: 'Samsung R&D Institute',
    companyLogo: '/images/logos/samsung.png',
    companyLogoAlt: 'Samsung R&D Institute logo',
    dates: 'Apr 2014 - Dec 2014',
    resumeBullets: [
      'Smart Sleep Assistant System: A system of connected devices that help sleep better and enhance the experience of sleeping.',
    ],
  },
];

/**
 * Companies grouped under Home's "Earlier" career-narrative card, in
 * reverse-chronological order. Deliberately only the pre-Gojek roles (both
 * 2014-2017): Funding Societies (2023) and RED.HEALTH (2024) fall between
 * Gojek and Microsoft chronologically, not before them, so folding them into
 * this "2014 - 2017" bucket would misstate their timing. They still appear,
 * correctly dated, in the full chronology on the Resume page.
 */
export const EARLIER_COMPANIES = ['Samsung', 'Godrej & Boyce'];

export interface EducationEntry {
  degree: string;
  school: string;
  logo?: string;
  logoAlt?: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Master of Design, ID',
    school: 'National Institute of Design',
    logo: '/images/logos/nid.svg',
    logoAlt: 'National Institute of Design logo',
  },
  {
    degree: 'Bachelor of Engineering',
    school: 'Mumbai University',
    logo: '/images/logos/mumbai-university.webp',
    logoAlt: 'Mumbai University logo',
  },
];

export const SKILLS = {
  Product: ['Product Strategy', 'Product Design', '0→1 Product Development', 'Experience Strategy'],
  Systems: ['Systems Thinking', 'Platform Design', 'Cross-Device Experiences', 'Ecosystem Design'],
  Leadership: [
    'Design Leadership',
    'Team Development',
    'Stakeholder Management',
    'Design Operations',
    'Design Governance',
  ],
  Craft: ['Interaction Design', 'Prototyping', 'Design Systems', 'User Research'],
  Emerging: ['AI-Assisted Product Design', 'AI Prototyping', 'AI-Native Product Exploration'],
};
