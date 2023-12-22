export class Position {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public getPosition() {
    return { x: this.x, y: this.y }
  }
}
