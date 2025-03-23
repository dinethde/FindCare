import Image from 'next/image';
import { Button } from './ui/Button';

/**
 * Interface for NotFound component props
 */
interface NotFoundProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

/**
 * NotFound component displays a 404 error page with customizable content
 * Provides optional back navigation functionality
 * 
 * @param props Component properties including title, message and navigation options
 * @returns JSX.Element The rendered not found error page
 */
export function NotFound({
  title = 'Page Not Found',
  message = 'The page you are looking for does not exist.',
  showBackButton = true,
  onBack
}: NotFoundProps): JSX.Element {
  /**
   * Handles the back button click
   * Uses provided onBack handler or browser history
   */
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-64 h-64 relative mb-8">
        <Image
          src="/404.svg"
          alt="404 illustration"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600 text-center mb-8">{message}</p>
      {showBackButton && (
        <Button
          variant="primary"
          onClick={handleBack}
          className="min-w-[200px]"
        >
          Go Back
        </Button>
      )}
    </div>
  );
}