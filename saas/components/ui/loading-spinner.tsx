import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
    className?: string;
}

export function LoadingSpinner({ className }: LoadingSpinnerProps) {
    return (
        <div
            className={cn(
                "w-6 h-6 border-t-2 border-blue-500 border-solid rounded-full animate-spin",
                className
            )}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
}