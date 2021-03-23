import React, { useEffect, useState, useRef } from "react";

import { UFOPainter } from "./ufoPainter";
import { Physics } from "./physics";

export const App = () => {
  const physics = Physics.startingAt(50, 0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const painter = UFOPainter.fromCanvas(canvas);
    let requestId = null;

    document.onkeydown = ({ keyCode }) => {
      switch (keyCode) {
        case 37:
          return physics.thrust(-1, 0);
        case 38:
          return physics.thrust(0, -1);
        case 39:
          return physics.thrust(1, 0);
        case 40:
          return physics.thrust(0, 1);
      }
    };

    document.body.focus();

    const render = () => {
      const { x, y } = physics.tick();
      painter.paint(x, y, 10);
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  return (
    <canvas height="600px" width="1000px" ref={canvasRef} />
  );
}

