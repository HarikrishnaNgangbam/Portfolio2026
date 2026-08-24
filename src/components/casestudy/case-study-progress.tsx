import { useEffect, useState } from 'react';

/**
 * A thin reading-progress line fixed just below the header, filling as the
 * reader moves through a long case study. Deliberately minimal — a single
 * 2px bar, no page count, no floating panel — so orientation doesn't come
 * at the cost of dominating the page on desktop or mobile alike.
 */
function CaseStudyProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-[72px] left-0 right-0 z-40 h-[2px] bg-transparent"
      role="progressbar"
      aria-label="Case study reading progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out motion-reduce:transition-none"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export { CaseStudyProgress };
