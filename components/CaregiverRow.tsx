import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2 } from "lucide-react";
import photo from "@/public/images/photo.png";

type CaregiverRowProps = {
  caregiver: {
    id: string;
    name: string;
    image: string;
    clients: number;
    stats: {
      satisfaction: number;
      lateArrivals: number;
      cancelShifts: number;
      leave: number;
    };
  };
};

export default function CaregiverRow({ caregiver }: CaregiverRowProps) {
  return (
    <div className="flex justify-between">
      {/* Row left wrapper */}
      <div className="flex flex-row items-center justify-start gap-2 text-neutral-10">
        {/* Caregiver Image */}
        <Avatar>
          <AvatarImage src={photo.src} alt={caregiver.name} />
          <AvatarFallback>
            <User2 className="" />
          </AvatarFallback>
        </Avatar>

        {/* CG name & id wrapper */}
        <div className="self-stretch flex justify-start items-start flex-col">
          <div className="leading-[150%] text-regular-text-thicker">
            {caregiver.name}
          </div>
          <p className="text-xsmall-text w-auto inline-block">{caregiver.id}</p>
        </div>
      </div>

      {/* Row right */}
      <div className="leading-[110%] text-regular-text-thicker">
        {caregiver.clients}
      </div>
    </div>
  );
}
