export interface BrandIconProps {
  className?: string;
}

/** Brand app/service marks used in case-study "shipped scenario" cards. Full-color, unlike the stroke-style lucide icon set. */

function SpotifyIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1ED760" />
      <path
        d="M17.3 16.2a.75.75 0 0 1-1.03.26c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.58-1.04 8.5-.6 11.65 1.33.36.22.47.68.26 1.03Zm1.2-2.67a.94.94 0 0 1-1.29.31c-3.23-1.99-8.15-2.56-11.97-1.4a.94.94 0 1 1-.55-1.8c4.37-1.33 9.8-.68 13.5 1.6.44.27.58.85.31 1.29Zm.1-2.78C15.15 8.6 8.94 8.4 5.34 9.5a1.13 1.13 0 1 1-.66-2.16c4.14-1.26 11-1.02 15.34 1.57a1.13 1.13 0 0 1-1.14 1.94Z"
        fill="#fff"
      />
    </svg>
  );
}

function SamsungBrowserIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877D3" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" fill="#fff" />
    </svg>
  );
}

function Microsoft365Icon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#fff" stroke="#e5e7eb" />
      <rect x="3" y="3" width="8" height="8" fill="#EB3C00" />
      <rect x="13" y="3" width="8" height="8" fill="#87C900" />
      <rect x="3" y="13" width="8" height="8" fill="#00A5E5" />
      <rect x="13" y="13" width="8" height="8" fill="#FFB800" />
      <rect x="0.5" y="17" width="23" height="6.5" rx="2" fill="#0A2767" />
      <text x="12" y="21.6" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fff" fontFamily="system-ui, sans-serif">
        M365
      </text>
    </svg>
  );
}

function WhatsAppIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="23" height="23" rx="6" fill="#25D366" />
      <path
        d="M12 5.5a6.5 6.5 0 0 0-5.6 9.79L5.5 18.5l3.32-.87A6.5 6.5 0 1 0 12 5.5Zm0 1.3a5.2 5.2 0 1 1-2.66 9.67l-.2-.12-1.98.52.53-1.93-.13-.2A5.2 5.2 0 0 1 12 6.8Zm-2.4 2.35c-.14 0-.36.05-.55.27-.19.21-.72.7-.72 1.72s.74 2 .84 2.13c.1.14 1.44 2.28 3.54 3.1 1.75.68 2.1.55 2.48.51.38-.04 1.22-.5 1.4-.98.17-.48.17-.9.12-.98-.05-.09-.19-.14-.4-.24-.2-.1-1.21-.6-1.4-.66-.19-.07-.32-.1-.46.1-.14.2-.53.66-.65.8-.12.14-.24.15-.44.05-.2-.1-.86-.32-1.63-1.01-.6-.54-1.01-1.2-1.13-1.4-.12-.2-.01-.31.09-.4.09-.1.2-.24.3-.37.1-.12.13-.2.2-.34.07-.14.03-.26-.02-.37-.05-.1-.46-1.12-.63-1.53-.16-.4-.33-.34-.46-.35Z"
        fill="#fff"
      />
    </svg>
  );
}

function ChromeIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <path d="M12 3a9 9 0 0 1 7.79 4.5H12a4.5 4.5 0 0 0-3.9 2.25L4.2 5.4A9 9 0 0 1 12 3Z" fill="#EA4335" />
      <path d="M4.2 5.4 8.1 9.75A4.48 4.48 0 0 0 7.5 12a4.5 4.5 0 0 0 .6 2.25L4.2 18.6A9 9 0 0 1 3 12a9 9 0 0 1 1.2-6.6Z" fill="#FBBC05" />
      <path d="M8.1 14.25A4.5 4.5 0 0 0 12 16.5a4.5 4.5 0 0 0 3.9-2.25l3.9 4.35A9 9 0 0 1 12 21a9 9 0 0 1-7.8-4.5l3.9-4.35v2.1Z" fill="#34A853" />
      <circle cx="12" cy="12" r="4.5" fill="#4285F4" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
    </svg>
  );
}

function EdgeIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#0C59A4" />
      <path
        d="M4.5 14.2c0 3.3 3 5.8 6.8 5.8 2.6 0 4.7-1 6-2.7-1 .4-2 .6-3 .6-3.4 0-6.4-2.3-6.4-5.6 0-.5.1-1 .2-1.3-2 .5-3.6 1.8-3.6 3.2Z"
        fill="#3FE0FF"
      />
      <path
        d="M12 4c4.4 0 8 3.3 8 7.9 0 1.7-.6 3.1-1.6 4.1.4-.8.6-1.7.6-2.6 0-3.7-3.2-6.6-7.4-6.6-4 0-7.1 2.6-7.1 6 0 .8.2 1.5.5 2.1-.9-1-1.5-2.3-1.5-3.8C3.5 7.3 7.3 4 12 4Z"
        fill="#37D3FF"
      />
      <path
        d="M12 6.8c4.2 0 7.4 2.9 7.4 6.6 0 3.6-3.1 6.6-7.7 6.6-2 0-3.7-.6-5-1.5.9.3 1.8.4 2.7.4 3.6 0 6.6-2.3 6.6-5.3 0-2.6-2.1-4.6-5-4.6-2.5 0-4.5 1.6-4.5 3.7 0 .5.1.9.3 1.3-.9-.5-1.4-1.4-1.4-2.5 0-2.6 2.9-4.7 6.6-4.7Z"
        fill="#00BCF2"
      />
    </svg>
  );
}

function SamsungNotesIcon({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="23" height="23" rx="6" fill="#FF5722" />
      <rect x="6" y="5" width="12" height="14" rx="1.5" fill="#fff" />
      <rect x="8" y="8" width="8" height="1.3" fill="#FF5722" />
      <rect x="8" y="11" width="8" height="1.3" fill="#FF5722" />
      <rect x="8" y="14" width="5" height="1.3" fill="#FF5722" />
    </svg>
  );
}

export {
  SpotifyIcon,
  SamsungBrowserIcon,
  Microsoft365Icon,
  WhatsAppIcon,
  ChromeIcon,
  EdgeIcon,
  SamsungNotesIcon,
};
