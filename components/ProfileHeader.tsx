"use client"

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Pencil} from "lucide-react"

export function ProfileHeader() {
    return (
        <div className="">
            <div className="flex justify-between items-center px-1">
                <h1 className="text-2xl font-semibold text-regular-text-thicker">Caregiver Profile</h1>
                <button
                    className="p-2 rounded-full hover:bg-gray-100 text-support-colors-color1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.12)] rounded-regular bg-gray border-neutral-3 border-[0.5px] border-solid flex flex-col items-center justify-center ">
                    <Pencil
                        className="h-6 w-6 "/>
                </button>
            </div>
            <div className="text-h2 m-0"><p className="font-jura"> Overview </p></div>
        </div>
    )
}

