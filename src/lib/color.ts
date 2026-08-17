/**
 * Mixes a CSS color with transparent to produce a tinted background/border,
 * e.g. tint('var(--icon-green)', 6) -> a translucent light-green wash. Used
 * throughout case-study cards to derive a tinted surface from one accent
 * color instead of hand-writing the color-mix() string at each call site.
 */
function tint(color: string, opacityPercent: number): string {
  return `color-mix(in srgb, ${color} ${opacityPercent}%, transparent)`;
}

export { tint };
