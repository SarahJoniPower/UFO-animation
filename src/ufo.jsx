import React, { useRef, useEffect } from "react"
export const UFO = (props) => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");

    // UFO 
    // let xAxis = props.xAxis
    // let yAxis = props.yAxis

    let requestId;
    let xAxis = 400
    let yAxis = 0
    const render = () => {
    ctx.clearRect(0, 0, 800, 450);

    // top of UFO 
    ctx.beginPath();
    ctx.moveTo(xAxis, yAxis)
    ctx.quadraticCurveTo(xAxis + 70, yAxis - 100, xAxis + 150, yAxis);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'pink'
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.stroke();

    // Bottom of UFO
    ctx.beginPath();
    ctx.moveTo(xAxis + 150, yAxis)
    ctx.lineTo(xAxis + 220, yAxis + 40);
    ctx.moveTo(xAxis, yAxis)
    ctx.lineTo(xAxis - 70, yAxis + 40);
    ctx.moveTo(xAxis - 70, yAxis + 40)
    ctx.lineTo(xAxis + 220, yAxis + 40);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'pink'
    ctx.stroke();

    // Antenna
    ctx.beginPath();
    ctx.moveTo(xAxis, yAxis)
    ctx.lineTo(xAxis - 50, yAxis - 30);
    ctx.moveTo(xAxis + 150, yAxis)
    ctx.lineTo(xAxis + 200, yAxis - 30);
    ctx.moveTo(xAxis + 200, yAxis - 30)
    ctx.arc(xAxis + 200, yAxis - 30, 4, 0, 2 * Math.PI)
    ctx.moveTo(xAxis - 50, yAxis - 30)
    ctx.arc(xAxis - 50, yAxis - 30, 4, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'orange'
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.stroke();

    // green Antenna circle
    ctx.beginPath();
    ctx.arc(xAxis + 200, yAxis - 30, 4, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green'
    ctx.fillStyle = 'green'
    ctx.fill()
    ctx.stroke();

    // Body circles 
    function createBodyCircle(xAxisCircle, yAxisCircle, lineColour, fillColour) {
      ctx.beginPath();
      ctx.arc(xAxisCircle, yAxisCircle, 4, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = lineColour
      ctx.fillStyle = fillColour
      ctx.fill()
      ctx.stroke();
    }

    let xAxisCircle = xAxis - 35
    let colour = 'blue'

    while (xAxisCircle <= xAxis + 200) {
      createBodyCircle(xAxisCircle, yAxis + 31, 'orange', colour)
      xAxisCircle += 15

      if (colour === 'blue') {
        colour = 'orange'
      } else {
        colour = 'blue'
      }
    }
    yAxis += 1
    requestId = requestAnimationFrame(render)
  }
  render()

  return () => {
    cancelAnimationFrame(requestId)
  }
  });

  return <canvas width="800px" height="450px" ref={canvasRef} />
}
