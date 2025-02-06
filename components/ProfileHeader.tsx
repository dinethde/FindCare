"use client"

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Pencil} from "lucide-react"

export function ProfileHeader() {
    return (
        <div className="">
            <div className="flex justify-between items-center px-1">
                <h1 className="text-2xl font-semibold text-regular-text-thicker">Caregiver Profile</h1>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <Pencil className="h-5 w-5 text-[#007aff]"/>
                </button>
            </div>
            <div className="text-h2 m-0"><p className="font-jura"> Overview </p></div>
        </div>
    )
}

