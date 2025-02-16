import type { AvatarProps } from "../types";
import { cn } from "@/lib/utils";

export function Avatar({ src, alt, size = "sm" }: AvatarProps) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={cn(
        "object-cover",
        size === "xs" && "h-6 w-6",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-10 w-10",
        size === "lg" && "h-12 w-12"
      )}
    />
  );
}
