import React, { useRef, useEffect, useState } from "react"

export const UFO = (props) => {
  const canvasRef = useRef(null)

  let [finalPosition, setFinalPosition] = useState({x: props.xAxis, y: props.yAxis})
  
  // let array = [1, 2, 3] 
  // let a = array[0] 
  // let [a, b] = array


  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");

    let {xAxis, yAxis} = props
    
    let requestId;

    const render = () => {
      ctx.clearRect(0, 0, 800, 450);

      drawBackground()
      drawUFO(xAxis - 150, yAxis - 150)

      
      if (yAxis < finalPosition.y) {
        yAxis += 1;
      } 

      if (xAxis < finalPosition.x) {
        xAxis += 1;
      } 
      
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
      
      if (yAxis >= finalPosition.y && xAxis >= finalPosition.x) { 
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
      ctx.quadraticCurveTo(x + 40, y - 65, x + 100, y);
      ctx.closePath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'pink'
      ctx.fillStyle = 'orange'
      ctx.fill()
      ctx.stroke();
    };

    function drawBottom(x, y) {
      ctx.beginPath();
      ctx.moveTo(x + 100, y)
      ctx.lineTo(x + 160, y + 30);
      ctx.moveTo(x, y)
      ctx.lineTo(x - 60, y + 30);
      ctx.moveTo(x - 60, y + 30)
      ctx.lineTo(x + 160, y + 30);
      ctx.closePath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'pink'
      ctx.stroke();
    };

    function drawAntenna(x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y)
      ctx.lineTo(x - 40, y - 20);
      ctx.moveTo(x + 100, y)
      ctx.lineTo(x + 140, y - 20);
      ctx.moveTo(x + 140, y - 20)
      ctx.arc(x + 140, y - 20, 3, 0, 2 * Math.PI)
      ctx.moveTo(x- 40, y - 20)
      ctx.arc(x- 40, y - 20, 3, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'orange'
      ctx.fillStyle = 'orange'
      ctx.fill()
      ctx.stroke();
    };

    function drawAntennaCircle(x, y, colour) {
      ctx.beginPath();
      ctx.arc(x + 140, y - 20, 3, 0, 2 * Math.PI)
      ctx.moveTo(x- 40, y - 20)
      ctx.arc(x- 40, y - 20, 3, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = colour
      ctx.fillStyle = colour
      ctx.fill()
      ctx.stroke();
    };

    function drawBodyCircle(x, y, lineColour, fillColour) {
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = lineColour
      ctx.fillStyle = fillColour
      ctx.fill()
      ctx.stroke();
    }

    function drawBodyCircles(x, y, fillColour) {
      let xAxisCircle = xAxis - 185

      while (xAxisCircle <= xAxis - 10) {
        drawBodyCircle(xAxisCircle, yAxis - 126, 'orange', fillColour)
        xAxisCircle += 12
      }
    };

    function drawBackground() {

      // grey box outline
      ctx.beginPath();
      ctx.rect(0, 0, 800, 400);
      ctx.strokeStyle = 'black';
      ctx.stroke();

      // 
    }

  });

  return <canvas 
    width="800px" 
    height="450px"
    ref={canvasRef} 
    onClick={(event) => {setFinalPosition({x: event.clientX, y: event.clientY})}}
    />
}
