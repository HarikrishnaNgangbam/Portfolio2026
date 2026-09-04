export interface EvidenceStat {
  value: string;
  label: string;
}

/**
 * Evidence is one verified string like "3.1M monthly alerts · 290K+ engaged
 * users · 8.5% conversion" — split into stat/label pairs for display, never
 * fabricated for projects that don't have one.
 */
function parseEvidenceStats(evidence?: string): EvidenceStat[] | undefined {
  return evidence
    ?.split('·')
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const [value, ...labelWords] = chunk.split(' ');
      return { value, label: labelWords.join(' ') };
    });
}

export { parseEvidenceStats };
