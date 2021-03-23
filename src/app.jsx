import React from "react"
import { UFO } from "./ufo"
import "./app.css"

export const App = () => {
    return <div>
        <h1> Click in the box where you want to land </h1>
        <UFO xAxis={200} yAxis={200} yAxisStop={400} xAxisStop={300} />
    </div>
}

