export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(value: number) {
  return Intl.NumberFormat('en-US', { notation: 'compact' }).format(value);
}

export const brandGradients = {
  emeraldToBlue: 'linear-gradient(120deg, rgba(34,197,94,0.85), rgba(56,189,248,0.85))',
  blueToPurple: 'linear-gradient(120deg, rgba(56,189,248,0.85), rgba(129,140,248,0.85))',
};

export const companyName = 'EASOPS';

export function resolveSlug(value: string | { current?: string } | undefined, fallback: string) {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.current || fallback;
}
