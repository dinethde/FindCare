import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { JSX } from "react";

/**
 * Props interface for the Avatar component
 */
interface AvatarProps {
  imageUrl?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Avatar component displays a user's profile picture or initials
 * Uses Radix UI Avatar primitive for accessibility and fallback handling
 * @param props Component properties including image URL and fallback text
 * @returns JSX.Element The rendered avatar component
 */
export function Avatar({
  imageUrl,
  fallback,
  size = 'md',
  className = '',
}: AvatarProps): JSX.Element {
  /**
   * Get size-specific classes for the avatar
   */
  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'h-8 w-8';
      case 'md':
        return 'h-10 w-10';
      case 'lg':
        return 'h-12 w-12';
      default:
        return 'h-10 w-10';
    }
  };

  return (
    <AvatarPrimitive.Root
      className={`relative flex shrink-0 overflow-hidden rounded-full ${getSizeClasses()} ${className}`}
    >
      {imageUrl && (
        <AvatarPrimitive.Image
          src={imageUrl}
          className="aspect-square h-full w-full"
          alt={fallback}
        />
      )}
      <AvatarPrimitive.Fallback
        className="flex h-full w-full items-center justify-center rounded-full bg-muted"
        delayMs={600}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
