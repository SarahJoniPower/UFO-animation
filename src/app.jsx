import React, { useState } from "react"
import { UFO } from "./ufo"
import "./app.css"

export const App = () => {

let [speed, setSpeed] = useState( 5 )

    return <body>
        <title> UFO Landing </title>
        <h2> Land a UFO! </h2>
        <h3> Pick a speed, then click in the box where you want to land. </h3>
        <div>
        <UFO xAxis={400} yAxis={165} speed={speed} />
        <button onClick={() => setSpeed(10)}>Fast!</button>
        <button onClick={() => setSpeed(5)}>Regular</button>
        <button onClick={() => setSpeed(2)}>Maxo relaxo</button>
        <button onClick={() => window.location.reload()}>Re-Land</button>
        </div>
    </body>
}

