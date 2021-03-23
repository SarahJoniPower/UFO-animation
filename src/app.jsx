import React from "react"
import { UFO } from "./ufo"
import "./app.css"

export const App = () => {
    return <div>
        <h1> Lights off on landing! </h1>
        <UFO xAxis={-100} yAxis={-60} yAxisStop={400} xAxisStop={300} />
    </div>
}

