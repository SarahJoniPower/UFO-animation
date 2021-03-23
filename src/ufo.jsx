import React, { useRef, useEffect } from "react"

export const UFO = (props) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");

    let xAxis = props.xAxis
    let yAxis = props.yAxis
    let yAxisStop = props.yAxisStop
    let xAxisStop = props.xAxisStop

    let requestId;

    const render = () => {
      ctx.clearRect(0, 0, 800, 450);
      drawUFO(xAxis, yAxis)

      if (yAxis < yAxisStop) {
        yAxis += 1;
      } else {
        yAxis = yAxisStop;
      };

      if (xAxis < xAxisStop) {
        xAxis += 1;
      } else {
        xAxis = xAxisStop;
      };
      
      requestId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(requestId)
    }
  
    function drawUFO(x, y) {
      drawTop(x, y)
      drawBottom(x, y)
      drawAntenna(x, y)
      
      if (yAxis === yAxisStop && xAxis === xAxisStop) { 
        drawAntennaCircle(x, y, 'pink')
        drawBodyCircles(x, y, 'white')
      } else {
        drawAntennaCircle(x, y, 'green')
        drawBodyCircles(x, y, 'blue')
      }
    };

    function drawTop(x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y)
      ctx.quadraticCurveTo(x + 70, y - 100, x + 150, y);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'pink'
      ctx.fillStyle = 'orange'
      ctx.fill()
      ctx.stroke();
    };

    function drawBottom(x, y) {
      ctx.beginPath();
      ctx.moveTo(x + 150, y)
      ctx.lineTo(x + 220, y + 40);
      ctx.moveTo(x, y)
      ctx.lineTo(x - 70, y + 40);
      ctx.moveTo(x - 70, y + 40)
      ctx.lineTo(x + 220, y + 40);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'pink'
      ctx.stroke();
    };

    function drawAntenna(x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y)
      ctx.lineTo(x - 50, y - 30);
      ctx.moveTo(x + 150, y)
      ctx.lineTo(x + 200, y - 30);
      ctx.moveTo(x+ 200, y - 30)
      ctx.arc(x + 200, y - 30, 4, 0, 2 * Math.PI)
      ctx.moveTo(x- 50, y - 30)
      ctx.arc(x- 50, y - 30, 4, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'orange'
      ctx.fillStyle = 'orange'
      ctx.fill()
      ctx.stroke();
    };

    function drawAntennaCircle(x, y, colour) {
      ctx.beginPath();
      ctx.arc(x + 200, y - 30, 4, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = colour
      ctx.fillStyle = colour
      ctx.fill()
      ctx.stroke();
    };

    function drawBodyCircle(x, y, lineColour, fillColour) {
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = lineColour
      ctx.fillStyle = fillColour
      ctx.fill()
      ctx.stroke();
    }

    function drawBodyCircles(x, y, fillColour) {
      let xAxisCircle = xAxis - 35

      while (xAxisCircle <= xAxis + 200) {
        drawBodyCircle(xAxisCircle, yAxis + 31, 'orange', fillColour)
        xAxisCircle += 15
      }
    };
  });

  return <canvas width="800px" height="450px" ref={canvasRef} />
}
