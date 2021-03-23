export class UFOPainter {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
  }

  static fromCanvas(canvas) {
    return new UFOPainter(canvas, canvas.getContext("2d"));
  }

  clear() {
    const { width, height } = this.canvas;
    this.ctx.clearRect(0, 0, width, height);
  }

  paint(x, y, size = 1) {
    const { ctx } = this;

    this.clear();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.ellipse(x, y, size, size, 0, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
  }
}

