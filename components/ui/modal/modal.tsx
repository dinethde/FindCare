import Link from 'next/link'

export function Modal({children}: { children: React.ReactNode }) {
    return (
        <div
            className="
            absolute top-0 bottom-0 left-0 right-0 m-auto w-[90vw] h-[87vh] z-10 max-h-screen bg-white
             rounded-regular shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden
            ">
            <div className="max-h-full">{children}</div>
        </div>
    )
}
