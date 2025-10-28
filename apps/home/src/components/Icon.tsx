"use client";
import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";
import { ComponentType } from "react";

const AvatarLineIcon = ({
  className,
  strokeWidth = 5,
  color = "currentColor",
  ...props
}: LucideProps) => (
  <svg
    className={className}
    fill="none"
    height="1em"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 100 100"
    width="1em"
    {...props}
  >
    <circle cx="50" cy="34" r="18" />
    <path d="M20 82c0-16 13-30 30-30s30 14 30 30" />
  </svg>
);

const AnalyticsLineIcon = ({
  className,
  strokeWidth = 5,
  color = "currentColor",
  ...props
}: LucideProps) => (
  <svg
    className={className}
    fill="none"
    height="1em"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 100 100"
    width="1em"
    {...props}
  >
    <path d="M20 80h60" />
    <path d="M32 80V48" />
    <path d="M50 80V32" />
    <path d="M68 80V60" />
    <path d="M80 20v60" />
  </svg>
);

const DollarLineIcon = ({
  className,
  strokeWidth = 5,
  color = "currentColor",
  ...props
}: LucideProps) => (
  <svg
    className={className}
    fill="none"
    height="1em"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 100 100"
    width="1em"
    {...props}
  >
    <path d="M50 18v12" />
    <path d="M50 70v12" />
    <path d="M64 30c0-9-7-16-16-16s-16 7-16 16 7 16 16 16h12c9 0 16 7 16 16s-7 16-16 16H38c-9 0-16-7-16-16" />
  </svg>
);

const ICONS: Record<string, ComponentType<any>> = {
  play: Lucide.Play,
  pause: Lucide.Pause,
  volume: Lucide.Volume2,
  mute: Lucide.VolumeX,
  video: Lucide.Video,
  avatar: AvatarLineIcon,
  template: Lucide.FileStack,
  remix: Lucide.Shuffle,
  analytics: AnalyticsLineIcon,
  api: Lucide.Network,
  check: Lucide.Check,
  close: Lucide.X,
  arrowRight: Lucide.ArrowRight,
  chevronDown: Lucide.ChevronDown,
  external: Lucide.ExternalLink,
  search: Lucide.Search,
  star: Lucide.Star,
  shield: Lucide.ShieldCheck,
  creditCard: Lucide.CreditCard,
  wallet: Lucide.Wallet,
  dollar: DollarLineIcon,
  github: Lucide.Github,
  twitter: Lucide.Twitter,
  linkedin: Lucide.Linkedin,
  instagram: Lucide.Instagram,
  youtube: Lucide.Youtube,
};

export function Icon({
  name, className, "aria-label": ariaLabel, "aria-hidden": ariaHidden,
}: { name: keyof typeof ICONS | string; className?: string; "aria-label"?: string; "aria-hidden"?: boolean }) {
  const C = ICONS[name as string];
  if (!C) return null;
  return <C className={className} aria-label={ariaLabel} aria-hidden={ariaHidden} />;
}
