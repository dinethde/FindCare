import type { AvatarProps } from "../types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Avatar({ src, alt, size = "sm" }: AvatarProps) {
  return (

    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={size === "xs" ? 24 : size === "sm" ? 32 : size === "md" ? 40 : 48}
      height={size === "xs" ? 24 : size === "sm" ? 32 : size === "md" ? 40 : 48}
      className={cn(
        "object-cover rounded-full",
        size === "xs" && "h-6 w-6",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-10 w-10",
        size === "lg" && "h-12 w-12"
      )}
    />

  );
}
