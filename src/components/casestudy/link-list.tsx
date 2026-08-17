import { ExternalLink } from 'lucide-react';

export interface LinkItem {
  label: string;
  href: string;
}

function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-primary hover:underline text-sm"
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { LinkList };
