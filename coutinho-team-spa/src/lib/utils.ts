/** Merges class names, filtering out falsy values. Does NOT handle Tailwind class conflicts. */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
