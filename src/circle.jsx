import React, { useRef, useEffect } from "react"
import { render } from "react-dom";
export const Circle = () => {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d");
        let requestId;
        let x = 1;
        const render = () => {
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, x * Math.PI);
        ctx.fill();
        x += 0.05;
        requestId = requestAnimationFrame(render);
        };
        render();
        return () => {
            cancelAnimationFrame(requestId)
        }
    });
   return <canvas width="100px" height="100px" ref={canvasRef} />
};