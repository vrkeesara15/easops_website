export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="EASOPS logo">
      <rect width="64" height="64" rx="16" fill="#020617" />
      <path d="M18 20h28l-6 8H24l-6-8z" fill="#22C55E" opacity="0.85" />
      <path d="M18 44h28l-6-8H24l-6 8z" fill="#38BDF8" opacity="0.85" />
      <path d="M20 32h24l-5 6H25l-5-6z" fill="#A5F3FC" opacity="0.5" />
      <path d="M32 14l12 18-12 18-12-18 12-18z" stroke="#22C55E" strokeWidth="2" />
    </svg>
  );
}

export function LogoWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <span className="text-2xl font-semibold tracking-[0.3em]">EASOPS</span>
    </div>
  );
}
