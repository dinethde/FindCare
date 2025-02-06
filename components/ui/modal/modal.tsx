import Link from 'next/link'

export function Modal({children}: { children: React.ReactNode }) {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[90%] h-[87%] z-10 bg-big-card">
            <Link href="/">Close modal</Link>
            <div>{children}</div>
        </div>
    )
}
