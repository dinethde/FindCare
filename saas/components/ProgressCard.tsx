import type { CardData } from "@/types/progressCardType";
import { StatusIndicator } from "./StatusIndicator";

interface ProgressCardProps {
  data: CardData;
}

export function ProgressCard({ data }: ProgressCardProps) {
  return (
    <div className="bg-main rounded-regular flex flex-col gap-4 p-4 border border-neutral-3 w-full">
      <div className="">
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
      <p className="text-regular-text text-neutral-10">{data.description}</p>
      <StatusIndicator status={data.status} />
    </div>
  );
}
