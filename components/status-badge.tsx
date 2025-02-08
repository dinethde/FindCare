interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">{status}</span>
}

