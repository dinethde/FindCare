import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Props interface extending HTML button attributes
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hovBlack: "hover:bg-neutral-10 hover:text-white",
        secondary:
          "bg-main2 text-tagline p-0  shadow-[0px_-1px_4px_rgba(0,_0,_0,_0.10)_inset] focus:ring-blue-500 focus:border-blue-500 pr-2",
        primary:
          "bg-brand-colors-brand2 text-white w-fit  rounded-md shadow-[inset_0px_-1px_4px_2px_rgba(255,255,255,0.30)] border border-brand-colors-brand5 text-regular-text-thicker h-fit items-center",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Base button component with multiple variants and sizes
 * @param props Component properties including variant, size, loading state and HTML button attributes
 * @returns JSX.Element The rendered button component
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    /**
     * Get variant-specific classes
     */
    const getVariantClasses = (): string => {
      switch (variant) {
        case 'primary':
          return 'bg-blue-600 text-white hover:bg-blue-700';
        case 'secondary':
          return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
        case 'outline':
          return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50';
        case 'ghost':
          return 'text-blue-600 hover:bg-blue-50';
        default:
          return '';
      }
    };

    /**
     * Get size-specific classes
     */
    const getSizeClasses = (): string => {
      switch (size) {
        case 'sm':
          return 'px-3 py-1.5 text-sm';
        case 'md':
          return 'px-4 py-2';
        case 'lg':
          return 'px-6 py-3 text-lg';
        default:
          return '';
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
