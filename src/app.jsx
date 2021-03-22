import React from "react"
import { UFO } from "./ufo"
export const App = () => {
    return <div>
        <h1> hey Theo, look I'm using props now: </h1>
        <UFO xAxis={200} yAxis={250} />
    </div>
}

