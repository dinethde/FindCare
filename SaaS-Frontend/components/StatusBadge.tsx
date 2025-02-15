"use client";

import { colorProps } from "@/data/ColorProps";

interface StatusBadgeProps {
  status: string;
  color: string;
}

export function StatusBadge({ status, color }: StatusBadgeProps) {
  console.log(color);

  return (
    <span
      className={`relative rounded border-solid box-border flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-regular-text font-plus-jakarta-sans`}
      style={{
        backgroundColor: updateHslLightness(color, 93),
        borderWidth: "0.2px",
        borderColor: updateHslLightness(color, 60),
        color: color,
      }}
    >
      {status}
    </span>
  );
}

function updateHslLightness(hsl: string, newLightness: number) {
  if (newLightness < 0 || newLightness > 100) {
    throw new Error("newLightness must be between 0 and 100");
  }

  const hslRegex = /hsl\(\s*([\d.]+)\s*,\s*([\d.]+%)\s*,\s*([\d.]+%)\s*\)/i;
  const match = hsl.match(hslRegex);

  if (!match) {
    throw new Error(
      "Invalid HSL color format. Expected format: hsl(hue, saturation%, lightness%)"
    );
  }

  const hue = match[1];
  const saturation = match[2];

  return `hsl(${hue}, ${saturation}, ${newLightness}%)`;
}
