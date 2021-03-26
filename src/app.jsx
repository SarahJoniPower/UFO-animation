import React, { useState } from "react"
import { UFO } from "./ufo"
import "./app.css"

export const App = () => {

let [speed, setSpeed] = useState( 5 )

    return <body>
        <title> UFO Landing </title>
        <h2> Land a UFO! </h2>
        <h3> Pick a speed, then click in the box where you want to land. 
        </h3>
        <div id="allButtons">
        <button id="fastBtn" onClick={() => setSpeed(10)}>Fast!</button>
        <button id="RegularBtn" onClick={() => setSpeed(5)}>Classic</button>
        <button id="RelaxoBtn" onClick={() => setSpeed(2)}>Maxo relaxo</button>
        <button id="Re-LandBtn" onClick={() => window.location.reload()}>Re-Land</button>
        </div>
        <div id="canvas">
        <UFO xAxis={200} yAxis={165} landed={false} landing={true} starColour={'pink'} />
        </div>
    </body>
}

