import React from "react"
import { UFO } from "./ufo"
import "./app.css"

export const App = () => {
    return <div>
        <h2> Click in the box where you want to land! </h2>
        <UFO xAxis={210} yAxis={190} />
    </div>
}

