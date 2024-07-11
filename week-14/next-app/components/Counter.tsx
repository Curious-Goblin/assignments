"use client"

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="flex justify-center items-center">
            <div
                className="border-2 p-2 border-gray-700 font-bold px-4 rounded-full mt-10 cursor-pointer"
                onClick={() => {
                    setCount(prev =>
                        prev + 1
                    )
                }}
            >
                count is {count}
            </div>
        </div>
    )
}