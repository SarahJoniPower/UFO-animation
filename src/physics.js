
export class Physics {
  constructor({ x, y, vx, vy, lastUpdated, floor }) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.lastUpdated = lastUpdated
    this.floor = floor;
  }

  static startingAt(x, y) {
    return new Physics({
      x,
      y,
      vx: 0.5,
      vy: 0,
      lastUpdated: Physics.getTimestamp(),
      floor: 500,
    });
  }

  static getTimestamp() {
    return new Date().valueOf();
  }

  tick() {
    const now = Physics.getTimestamp();
    const interval = now - this.lastUpdated;

    this.x = this.recalculateX(interval);
    this.y = this.recalculateY(interval);
    this.vy = this.recalculateVY(interval);
    this.vx = this.recalculateVX(interval);

    this.lastUpdated = now;
    return { x: this.x, y: this.y };
  }
  
  thrust(vx, vy) {
    this.vx += vx;
    this.vy += vy;
  }

  recalculateX(interval) {
    return this.x + this.vx * interval;
  }

  recalculateY(interval) {
    return Math.min(this.y + this.vy * interval, this.floor);
  }

  recalculateVX(interval) {
    return this.y === this.floor
      ? this.vx * 0.8
      : this.vx * 0.99;
  }

  recalculateVY(interval) {
    return this.y === this.floor
      ? -this.vy * 0.4
      : this.vy + 0.05;
  }
}
