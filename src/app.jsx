import React from "react"
import { UFO } from "./ufo"
import { Circle } from "./circle"
export const App = () => {
    return <div>
        <h1> hey Theo, look I'm using props now: </h1>
        <Circle />
        <UFO />
        {/* <UFO xAxis={300} yAxis={350} /> */}
    </div>
}

