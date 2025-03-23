import type { ButtonProps } from "../types";
import { cn } from "@/lib/utils";

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-5 py-2 rounded-md transition-colors",
        variant === "primary" &&
        `bg-brand-colors-main text-white hover:bg-[#FF4500]/90`,
        variant === "feedback" &&
        ` bg-[#FFEFD6] text-[#FF9B00] border border-[#FFAF33] hover:bg-[#FFE4B5]/90`,
        variant === "compliment" &&
        `bg-[#E4FFE0] text-[#0C6600] border border-[#18CC00] hover:bg-[#90EE90]/90`,
        variant === "complaint" &&
        "bg-[#FFEBEF] text-[#CB0128] border border-[#FE0132] hover:bg-[#FFB6C1]/90"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
