import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-[var(--surface-warm-border)] bg-[var(--surface-warm)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>© 2026 Harikrishna Ngangbam</span>
          <span aria-hidden="true">·</span>
          <Heart className="w-3.5 h-3.5" style={{ color: 'var(--icon-pink)' }} fill="currentColor" />
          <span aria-hidden="true">·</span>
          <span>This portfolio took passion to imagine and prompt to bring it to life.</span>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
