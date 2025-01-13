'use client'

import { useState, useEffect } from 'react'

interface CountdownProps {
    targetDate: string
}

export function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const target = new Date(targetDate).getTime()
            const difference = target - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [targetDate])

    return (
        <div className="flex justify-center space-x-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <div className="text-3xl font-bold bg-gray-800 rounded-lg p-2 min-w-[70px]">
                        {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm uppercase mt-1">{unit}</div>
                </div>
            ))}
        </div>
    )
}

