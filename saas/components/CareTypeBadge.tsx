/**
 * Interface for CareTypeBadge component props
 * @interface CareTypeBadgeProps
 * @property {string} type - The type of care service
 * @property {number} [rate] - Optional hourly rate for the care service
 */
interface CareTypeBadgeProps {
  type: string;
  rate?: number;
}

/**
 * Component that displays a badge for different types of care services
 * @param {CareTypeBadgeProps} props - The component props
 * @returns {JSX.Element} A styled badge component
 */
export function CareTypeBadge({ type, rate }: CareTypeBadgeProps) {
  /**
   * Determines the background and text color for the badge based on care type
   * @param {string} type - The type of care service
   * @returns {string} CSS classes for styling the badge
   */
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Domici Care":
        return " bg-support-colors-color1 text-white";
      case "Senior Care":
        return "bg-support-colors-color2 text-white";
      case "Child Care":
        return "bg-support-colors-color3 text-white";
      default:
        return " bg text-gray-700";
    }
  };

  return (
    <span
      className={`px-4 py-2 rounded-[4px] text-regular-text-thicker  ${getBadgeColor(type)}`}
    >
      {type}
    </span>
  );
}
