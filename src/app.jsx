import React, { useState } from "react"
import { UFO } from "./ufo"

export const App = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const onMouseMove = ({ clientX, clientY }) => {
      setHeight(clientY - 100);
      setWidth(clientX - 150);
    };

    return (
      <div onMouseMove={onMouseMove}>
        <h1>Hey Sarah - I'm using mousemove now!</h1>
        <UFO x={width} y={height} />
      </div>
    );
}

