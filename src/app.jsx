import React from "react"
import { UFO } from "./ufo"
import { Circle } from "./circle"
export const App = () => {
    return <div>
        <h1> We're landing! </h1>
        <UFO xAxis={-100} yAxis={-60} yAxisStop={400} xAxisStop={300} />
    </div>
}

