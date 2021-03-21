import React, { useRef, useEffect } from "react"
export const UFO = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");

    // top of UFO 
    ctx.beginPath();
    ctx.moveTo(200, 200)
    ctx.quadraticCurveTo(270, 100, 350, 200);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'pink'
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.stroke();

    // Bottom of UFO
    ctx.beginPath();
    ctx.moveTo(350, 200)
    ctx.lineTo(420, 240);
    ctx.moveTo(200, 200)
    ctx.lineTo(130, 240);
    ctx.moveTo(130, 240)
    ctx.lineTo(420, 240);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'pink'
    ctx.stroke();

    // Antenna
    ctx.beginPath();
    ctx.moveTo(200, 200)
    ctx.lineTo(150, 170);
    ctx.moveTo(350, 200)
    ctx.lineTo(400, 170);
    ctx.moveTo(400, 170)
    ctx.arc(400, 170, 4, 0, 2 * Math.PI)
    ctx.moveTo(150, 170)
    ctx.arc(150, 170, 4, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'orange'
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.stroke();

    // green Antenna circle
    ctx.beginPath();
    ctx.arc(400, 170, 4, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green'
    ctx.fillStyle = 'green'
    ctx.fill()
    ctx.stroke();

    // Body circles 
    function createBodyCircle(xAxis, yAxis, lineColour, fillColour) {
      ctx.beginPath();
      ctx.arc(xAxis, yAxis, 4, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = lineColour
      ctx.fillStyle = fillColour
      ctx.fill()
      ctx.stroke();
    }

    let xAxis = 165
    let colour = 'blue'

    while (xAxis <= 400) {
      createBodyCircle(xAxis, 231, 'orange', colour)
      xAxis += 15

      if (colour === 'blue') {
        colour = 'orange'
      }
      else {
        colour = 'blue'
      }
    }
  },[]
  )
  return <canvas width="800px" height="450px" ref={canvasRef} />
}
