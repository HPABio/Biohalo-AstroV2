import type { SVGProps } from "react";

export default function AtomDiagram({
  color = "currentColor",
  width = 24,
  height = 24,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { color?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke={color} strokeWidth="1.5" transform="rotate(-60 12 12)" />
    </svg>
  );
}
