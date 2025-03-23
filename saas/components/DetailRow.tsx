/**
 * Interface defining the props for the DetailRow component
 * @interface DetailRowProps
 * @property {string} label - The label text to display on the left side
 * @property {string} value - The value text to display on the right side
 * @property {string} [className] - Optional CSS classes to apply to the container
 */
interface DetailRowProps {
    label: string;
    value: string;
    className?: string;
}

/**
 * A component that displays a label and value in a horizontal row with justified spacing
 * @param {DetailRowProps} props - The component props
 * @param {string} props.label - The label text to display
 * @param {string} props.value - The value text to display
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {JSX.Element} A row with label and value
 */
export function DetailRow({ label, value, className = "" }: DetailRowProps) {
    return (
        <div className={`flex justify-between items-center py-0 ${className}`}>
            <span className="text-tagline text-grey">{label}</span>
            <span className="text-regular-text text-neutral-12">{value}</span>
        </div>
    );
}
