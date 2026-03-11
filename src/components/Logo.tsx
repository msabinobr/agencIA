import { CONFIG } from '../config';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-auto text-emerald-500">
        <path d="M12 2C6.477 2 2 6.03 2 11c0 2.84 1.537 5.37 3.91 7.03-.42 1.84-1.6 3.4-1.64 3.45-.1.12-.13.28-.08.43.05.15.18.26.33.29 2.13.38 4.2-.3 5.56-1.12 1.25.3 2.56.47 3.92.47 5.523 0 10-4.03 10-9s-4.477-9-10-9zm-4 5h8v2.5H8V7zm0 4h8v2.5H8v-2.5zm0 4h5v2.5H8v-2.5z"/>
      </svg>
      <span className="text-2xl font-bold text-white tracking-tight">{CONFIG.brand.name}</span>
    </div>
  );
}
