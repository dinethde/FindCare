"use client";

import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
  routePath: string;
  width?: number;
}

export function Modal({ children, routePath, width = 90 }: ModalProps) {
  const router = useRouter();

  // When the overlay is clicked, navigate to "/cargiver"
  const handleOverlayClick = () => {
    // router.back();
    router.push(routePath);
  };

  // Prevent clicks inside the modal from propagating to the overlay
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-[90vw] h-[87vh] z-10 max-h-screen bg-white
             rounded-regular shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden`}
        onClick={handleModalClick}
      >
        <div className="max-h-full">{children}</div>
      </div>
    </div>
  );
}
