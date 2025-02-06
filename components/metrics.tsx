"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {metrics} from "@/data/dashboard-2"

export function Metrics() {
    const {clientSatisfaction, totalShifts, tasks} = metrics

    return (
        <div className="grid grid-cols-3 gap-6">
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
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">Total Shifts</CardTitle>
                    <span className="text-sm text-muted-foreground">{totalShifts.period}</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center">
                        <div className="relative w-40 h-40">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    className="text-[#ff4b00] stroke-current"
                                    strokeWidth="10"
                                    fill="transparent"
                                    r="40"
                                    cx="50"
                                    cy="50"
                                />
                                <circle
                                    className="text-[#007aff] stroke-current"
                                    strokeWidth="10"
                                    fill="transparent"
                                    r="40"
                                    cx="50"
                                    cy="50"
                                    strokeDasharray="31.4 251"
                                    strokeDashoffset="0"
                                    transform="rotate(-90 50 50)"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl font-bold">{totalShifts.count}</span>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2 w-full">
                            <div className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-[#007aff] rounded-full mr-2"/>
                                <span>{totalShifts.lateShifts} late shifts</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-[#ff4b00] rounded-full mr-2"/>
                                <span>{totalShifts.cancelledShifts} Cancelled shifts</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Tasks Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">Tasks</CardTitle>
                    <span className="text-sm text-muted-foreground">{tasks.period}</span>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {tasks.items.map((task, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <Checkbox id={`task-${i}`}/>
                                <label
                                    htmlFor={`task-${i}`}
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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

