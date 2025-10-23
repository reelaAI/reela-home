import type { LucideProps } from 'lucide-react';
import { icons } from 'lucide-react';

const warnOnce = (() => {
  const seen = new Set<string>();
  return (name: string) => {
    if (seen.has(name)) {
      return;
    }
    seen.add(name);
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Icon "${name}" does not exist in lucide-react.`);
    }
  };
})();

type IconName = keyof typeof icons;

type NormalizedName = IconName | (string & {});

export type IconProps = Omit<LucideProps, 'className'> & {
  name: NormalizedName;
  class?: string;
  className?: string;
};

const toPascalCase = (value: string) =>
  value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

export const Icon = ({
  name,
  class: classAttr,
  className,
  ...rest
}: IconProps) => {
  const normalized = typeof name === 'string' ? (name as string) : (name as IconName);
  const directMatch = normalized as IconName;
  const fallbackMatch = toPascalCase(normalized);
  const LucideIcon = icons[directMatch] ?? icons[fallbackMatch as IconName];

  if (!LucideIcon) {
    warnOnce(normalized);
    return null;
  }

  return <LucideIcon className={className ?? classAttr} {...rest} />;
};

export default Icon;
