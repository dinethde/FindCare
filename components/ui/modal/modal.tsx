"use client"

import {useRouter} from "next/navigation";

export function Modal({children}: { children: React.ReactNode }) {
    const router = useRouter();

    // When the overlay is clicked, navigate to "/cargiver"
    const handleOverlayClick = () => {
        router.back();
    };

    // Prevent clicks inside the modal from propagating to the overlay
    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
       <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50"
            onClick={handleOverlayClick}>
           <div
               className="
            absolute top-0 bottom-0 left-0 right-0 m-auto w-[90vw] h-[87vh] z-10 max-h-screen bg-white
             rounded-regular shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden
            " onClick={handleModalClick} >
               <div className="max-h-full">{children}</div>
           </div>
       </div>
    )
}



// import {
//     Dialog, DialogContent,
//     DialogOverlay
// } from "@/components/ui/dialog"
// import { useRouter} from "next/navigation";
//
// export function Modal({
//                           children,
//                       }:{
//     children :React.ReactNode
// }) {
//     const router = useRouter()
//
//     const handleOpenChange = () => {
//         router.back()
//         // router.push("/caregivers")
//     }
//
//     return (
//
//         <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange} >
//             <DialogOverlay className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[90vw] h-[87vh] z-10 max-h-screen bg-white
//              rounded-regular shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden">
//                 <DialogContent className="max-h-full">
//                     {children}
//                 </DialogContent>
//             </DialogOverlay>
//         </Dialog>
//
//     )
// }
