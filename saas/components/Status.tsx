export function Status() {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Total Shifts</h3>
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#ffe9c8] flex items-center justify-center">
                        <span className="text-[#ff4b00]">20</span>
                    </div>
                    <span className="text-2xl font-bold">/24</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Has cancelled 4 shifts out of 24 total shifts</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Late Arrivals</h3>
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#ffccd6] flex items-center justify-center">
                        <span className="text-[#ff2d55]">4</span>
                    </div>
                    <span className="text-2xl font-bold">/20</span>
                </div>
            </div>
        </div>
    )
}

