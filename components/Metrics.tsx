"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {metrics} from "@/data/dashboard-2"
import {TotalShiftsCard} from "@/components/cards/TotalShiftsCard";
import {shiftStats} from "@/data/mock-data";
import SelectTime from "@/components/cards/SelectTime";
import type {Month} from "@/types/CardTypes";
import {commentStyles} from "style-dictionary/enums";
import none = commentStyles.none;

const months: Month[] = [
    {value: "oct-2024", label: "Oct 2024"},
    {value: "sep-2024", label: "Sep 2024"},
    {value: "aug-2024", label: "Aug 2024"},
];

export function Metrics() {
    const {clientSatisfaction, totalShifts, tasks} = metrics

    return (
        <div className="grid grid-cols-3 gap-4">
            {/* Client Satisfaction Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">Client Satisfaction</CardTitle>
                    <span className="text-sm text-muted-foreground">{clientSatisfaction.period}</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center">
                        <div className="relative w-40 h-40">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    className="text-[#ffe9c8] stroke-current"
                                    strokeWidth="10"
                                    fill="transparent"
                                    r="40"
                                    cx="50"
                                    cy="50"
                                />
                                <circle
                                    className="text-[#ff4b00] stroke-current"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    r="40"
                                    cx="50"
                                    cy="50"
                                    strokeDasharray={`${clientSatisfaction.percentage * 2.51} ${100 * 2.51}`}
                                    strokeDashoffset="0"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xl font-semibold">{clientSatisfaction.percentage}%</span>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">User satisfaction</p>
                    </div>
                </CardContent>
            </Card>

            {/* Total Shifts Card */}
            <TotalShiftsCard
                total={shiftStats.total}
                late={shiftStats.late}
                cancelled={shiftStats.cancelled}
            />

            {/* Tasks Card */}
            <Card className="big-card space-y-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 ">
                    <CardTitle className="text-h6">Tasks</CardTitle>
                    <span className=""> <SelectTime selectedYear={none}
                                                    setSelectedYear={() => {
                                                    }} data={months}/> </span>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="flex flex-col items-start gap-3">
                        {tasks.items.map((task, i) => (
                            <div key={i} className="flex items-start justify-center gap-2">
                                <Checkbox id={`task-${i}`}/>
                                <label
                                    htmlFor={`task-${i}`}
                                    className="text-regular-text text-neutral-10 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {task}
                                </label>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

