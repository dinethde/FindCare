export default function CaregiverLayout({
                                            children,
                                            modal
                                        }: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <div className="">
            {children}
            {modal}
        </div>
    )
}