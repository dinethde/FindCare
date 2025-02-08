interface DetailRowProps {
  label: string
  value: string
  className?: string
}

export function DetailRow({ label, value, className = "" }: DetailRowProps) {
  return (
    <div className={`flex justify-between items-center py-2 ${className}`}>
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

