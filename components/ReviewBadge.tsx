interface ReviewBoxProps {
  review: string;
  rate: number;
}

export function ReviewBox({ review, rate }: ReviewBoxProps) {
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
