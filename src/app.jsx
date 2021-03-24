import React from "react"
import { UFO } from "./ufo"
import "./app.css"

export const App = () => {
    return <div>
        <h2> Land a UFO! </h2>
        <h3> Click in the box where you want to land </h3>
        <UFO xAxis={205} yAxis={265} />
    </div>
}

