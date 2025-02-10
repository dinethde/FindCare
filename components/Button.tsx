import type { ButtonProps } from "../types"
import { cn } from "@/lib/utils"

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors",
        variant === "primary" && "bg-[#FF4500] text-white hover:bg-[#FF4500]/90",
        variant === "feedback" && "bg-[#FFE4B5] text-[#FF8C00] hover:bg-[#FFE4B5]/90",
        variant === "compliment" && "bg-[#90EE90] text-[#006400] hover:bg-[#90EE90]/90",
        variant === "complaint" && "bg-[#FFB6C1] text-[#FF1493] hover:bg-[#FFB6C1]/90",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

