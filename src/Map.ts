import { Orientation } from "./Orientation";

export class Map {
  public width: number;
  public height: number;

  public constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getPosition (position: { x: number, y: number }) {
    if (position.x < 0) {
      position.x = this.width - 1
    } else if (position.x > this.width - 1) {
      position.x = 0
    }

    if (position.y < 0) {
      position.y = this.height - 1
    } else if (position.y > this.height - 1) {
      position.y = 0
    }

    return position
  }
}
