import React, { useRef, useEffect } from "react";

class UFODrawer {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
  }

  clear() {
    const { width, height } = this.canvas;
    this.ctx.clearRect(0, 0, width, height);
  }

  draw(x, y) {
    this.clear();
    this.drawTop(x, y);
    this.drawBottom(x, y);
    this.drawAntenna(x, y);
    this.drawAntennaCircle(x, y);
    this.drawBodyCircles(x, y);
  }

  drawTop(x, y) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.quadraticCurveTo(x + 70, y - 100, x + 150, y);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'pink'
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.stroke();
  }

  drawBottom(x, y) {
    const { ctx } = this;
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
  }

  drawAntenna(x, y) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo(x - 50, y - 30);
    ctx.moveTo(x + 150, y)
    ctx.lineTo(x + 200, y - 30);
    ctx.moveTo(x + 200, y - 30)
    ctx.arc(x + 200, y - 30, 4, 0, 2 * Math.PI)
    ctx.moveTo(x - 50, y - 30)
    ctx.arc(x - 50, y - 30, 4, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'orange'
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.stroke();
  }

  drawAntennaCircle(x, y) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.arc(x + 200, y - 30, 4, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green'
    ctx.fillStyle = 'green'
    ctx.fill()
    ctx.stroke();
  }

  drawBodyCircle(x, y, lineColour, fillColour) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = lineColour
    ctx.fillStyle = fillColour
    ctx.fill()
    ctx.stroke();
  }

  drawBodyCircles(x, y) {
    let currentX = x - 35
    let colour = 'blue'

    while (currentX <= x + 200) {
      this.drawBodyCircle(currentX, y + 31, 'orange', colour)
      currentX += 15;

      if (colour === 'blue') {
        colour = 'orange';
      } else {
        colour = 'blue';
      }
    }
  }
}

UFODrawer.fromCanvas = canvas => {
  return new UFODrawer(canvas, canvas.getContext("2d"));
}

export const UFO = ({ x, y }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const drawer = UFODrawer.fromCanvas(canvasRef.current)
    let requestId = null;

    const render = () => {
      drawer.draw(x, y);
      requestId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(requestId);
  });

  return (
    <canvas width="800px" height="450px" ref={canvasRef} />
  );
}
