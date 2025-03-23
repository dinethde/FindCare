/**
 * Type import for the card data structure
 */
import type { CardData } from "@/types/progressCardType";
import { StatusIndicator } from "./StatusIndicator";

/**
 * Interface defining the props for the ProgressCard component
 * @interface ProgressCardProps
 * @property {CardData} data - The data object containing card information
 */
interface ProgressCardProps {
  data: CardData;
}

/**
 * ProgressCard component displays a card with progress information
 * @param {ProgressCardProps} props - Component props
 * @param {CardData} props.data - The data object containing card details
 * @returns {JSX.Element} A card displaying progress information
 */
export function ProgressCard({ data }: ProgressCardProps) {
  return (
    // Container div with styling for the card
    <div className="bg-main rounded-regular flex flex-col gap-4 p-4 border border-neutral-3 w-full">
      <div className="">
        {/* Header section with name, code, and timestamp */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-neutral-12 text-regular-text-thicker">
              {data.name}
            </h2>
            <p className="text-tagline text-neutral-6">{data.code}</p>
          </div>
          <span className="text-tagline text-neutral-7">{data.timestamp}</span>
        </div>
      </div>
      <hr />
      {/* Description section */}
      <p className="text-regular-text text-neutral-10">{data.description}</p>
      {/* Status indicator component */}
      <StatusIndicator status={data.status} />
    </div>
  );
}
