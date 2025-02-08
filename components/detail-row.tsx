interface DetailRowProps {
  label: string;
  value: string;
  className?: string;
}

export function DetailRow({ label, value, className = "" }: DetailRowProps) {
  return (
    <div className={`flex justify-between items-center py-0 ${className}`}>
      <span className="text-tagline text-grey">{label}</span>
      <span className="text-regular-text text-neutral-12">{value}</span>
    </div>
  );
}
