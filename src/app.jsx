import React from "react"
import { UFO } from "./ufo"
import { Circle } from "./circle"
export const App = () => {
    return <div>
        <h1> We're landing! </h1>
        <UFO xAxis={400} yAxis={0} yAxisStop={400} />
    </div>
}

