import { cn } from "@/lib/utils";

/**
 * Props interface for the LoadingSpinner component
 */
interface LoadingSpinnerProps {
  className?: string;
}

/**
 * A reusable loading spinner component that shows an animated loading state
 * @param props Component properties including optional className for styling
 * @returns JSX.Element The rendered loading spinner
 */
export function LoadingSpinner({ className = "" }: LoadingSpinnerProps): JSX.Element {
  return (
    <div
      className={`inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}