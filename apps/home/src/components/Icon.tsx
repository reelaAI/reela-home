"use client";
import * as Lucide from "lucide-react";
import type { ComponentType } from "react";

export const ICONS: Record<string, ComponentType<any>> = {
  play: Lucide.Play,
  pause: Lucide.Pause,
  volume: Lucide.Volume2,
  mute: Lucide.VolumeX,
  video: Lucide.Video,
  avatar: Lucide.UserCircle2,
  template: Lucide.FileStack,
  remix: Lucide.Shuffle,
  analytics: Lucide.BarChart3,
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
  dollar: Lucide.DollarSign,
  github: Lucide.Github,
  twitter: Lucide.Twitter,
  linkedin: Lucide.Linkedin,
  instagram: Lucide.Instagram,
  youtube: Lucide.Youtube,
  languages: Lucide.Languages,
  aspect: Lucide.AspectRatio,
  subtitles: Lucide.Subtitles,
  music: Lucide.Music2,
  styles: Lucide.Sparkles,
  sfx: Lucide.AudioLines,
};

export function Icon({ name, className, ...a11y }: { name: keyof typeof ICONS | string; className?: string }) {
  const C = ICONS[name as string];
  if (!C) return null;
  return <C className={className} {...a11y} />;
}
