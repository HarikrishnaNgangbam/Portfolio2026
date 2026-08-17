import { Mail, MapPin } from 'lucide-react';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import type { ContactInfoCardProps } from '@/design-system/ui/contact-info-card';

export const CONTACT_METHODS: ContactInfoCardProps[] = [
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
    value: 'linkedin.com/in/harikrishna-ngangbam',
    href: 'http://linkedin.com/in/harikrishna-ngangbam',
    external: true,
  },
  {
    icon: MapPin,
    iconColor: 'var(--icon-green)',
    label: 'Location',
    value: 'Hyderabad, India',
  },
  {
    // The reference site reuses the mail icon (not a phone icon) for this card — reproduced as-is.
    icon: Mail,
    iconColor: 'var(--icon-purple)',
    label: 'Phone',
    value: '+91 999 89 567 28',
    href: 'tel:+919998956728',
    copyOnClick: true,
  },
];
