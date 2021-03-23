import React, { useRef, useEffect } from "react";
import { UFOPainter } from "./ufoPainter";

export const UFO = ({ physics }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const painter = UFOPainter.fromCanvas(canvasRef.current)
    let requestId = null;

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
    <canvas height="1000px" width="1000px" ref={canvasRef} />
  );
}
