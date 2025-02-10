import type { AvatarProps } from "../types"
import { cn } from "@/lib/utils"

export function Avatar({ src, alt, size = "md" }: AvatarProps) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={cn(
        "rounded-full object-cover",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-10 w-10",
        size === "lg" && "h-12 w-12",
      )}
    />
  )
}

