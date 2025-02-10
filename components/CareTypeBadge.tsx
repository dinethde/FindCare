interface CareTypeBadgeProps {
  type: string;
  rate?: number;
}

export function CareTypeBadge({ type, rate }: CareTypeBadgeProps) {
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
