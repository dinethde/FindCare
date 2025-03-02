import Image from "next/image";
import { X } from "lucide-react";
import type { NotificationType } from "@/types/notification_types";

interface FullNotificationViewProps {
  notification: NotificationType;
  onClose: () => void;
}

export default function FullNotificationView({
  notification,
  onClose,
}: FullNotificationViewProps) {
  const { user, timestamp, message } = notification;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4 ">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={48}
              height={48}
              className="rounded-full h-11 w-11 overflow-hidden"
            />
            <div className="space-y-1">
              <h2 className="text-regular-text-thicker">{user.name}</h2>
              <p className="text-tagline text-neutral-8">{timestamp}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="h-[1px] w-full bg-neutral-4"> </div>

        <div>
          <p className="text-regular-text text-neutral-9">{message}</p>
        </div>
      </div>
    </div>
  );
}
