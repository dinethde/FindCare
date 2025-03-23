/**
 * Props interface for the ReviewBox component
 * @interface ReviewBoxProps
 * @property {string} review - The review text to display
 * @property {number} rate - The rating value (1-5)
 */
interface ReviewBoxProps {
  review: string;
  rate: number;
}

/**
 * ReviewBox component displays a review with different styling based on the rating
 * @param {ReviewBoxProps} props - The component props
 * @returns {JSX.Element} A styled div containing the review text
 */
export function ReviewBox({ review, rate }: ReviewBoxProps) {
  /**
   * Determines the styling for the review box based on the rating
   * @param {number} rate - The rating value (1-5)
   * @returns {Object} An object containing background, border, and text colors
   */
  const getReviewStyles = (rate: number) => {
    if (rate < 3) {
      return {
        background: "#FFEBEF",
        border: "#CC0027",
        text: "#8F001B",
      };
    } else if (rate >= 3 && rate <= 4) {
      return {
        background: "#fff",
        border: "#e6e6e6",
        text: "#000000",
      };
    } else {
      return {
        background: "#E4FFE0",
        border: "#18CC00",
        text: "#0C6600",
      };
    }
  };

  // Get the appropriate styles based on the rating
  const styles = getReviewStyles(rate);

  return (
    <div
      className="p-4 rounded-lg shadow-[0px_1px_4px_rgba(0,_0,_0,_0.1)]"
      style={{
        backgroundColor: styles.background,
        border: `1px solid ${styles.border}`,
        color: styles.text,
      }}
    >
      {review}
    </div>
  );
}
