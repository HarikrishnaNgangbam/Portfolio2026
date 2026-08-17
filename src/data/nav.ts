import { House, Briefcase, User, FileText, Mail, type LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: House },
  { label: 'Work', href: '/work', icon: Briefcase },
  { label: 'About', href: '/about', icon: User },
  { label: 'Resume', href: '/resume', icon: FileText },
  { label: 'Contact', href: '/contact', icon: Mail },
];
