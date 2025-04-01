interface CareTypeBadgeProps {
  type: string;
}

export function CareTypeBadge({ type }: CareTypeBadgeProps) {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Domici Care":
        return " bg-support-colors-color1 text-white";
      case "Active":
        return " bg-support-colors-color1 text-white";
      case "Senior Care":
        return "bg-support-colors-color2 text-white";
      case "Child Care":
        return "bg-support-colors-color3 text-white";
      case "Not Active":
        return "bg-support-colors-color3 text-white";
      default:
        return " bg text-gray-700";
    }
  };

  return (
    <div
      className={`px-4 py-2 rounded-[4px] text-regular-text-thicker w-fit ${getBadgeColor(type)}`}
    >
      {type}
    </div>
  );
}
