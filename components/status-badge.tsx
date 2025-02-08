interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="relative rounded bg-lightgoldenrodyellow border-limegreen border-[0.2px] border-solid box-border flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-left text-[0.875rem] text-limegreen font-plus-jakarta-sans">
      {status}
    </span>
  );
}
