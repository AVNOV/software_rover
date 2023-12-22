import { Map } from "./Map";

// Objet-valeur
export class Position {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  private getPosition(map: Map): void {
    if (this.x < 0) {
      this.x = map.width - 1;
    } else if (this.x > map.width - 1) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = map.height - 1;
    } else if (this.y > map.height - 1) {
      this.y = 0;
    }
  }

  public checkPosition(obstacle: Position, map: Map, position: Position, x:number, y: number): void {
    if (obstacle.x === position.x + x && obstacle.y === position.y + y) {
      console.log(`Obstacle detected - position: x: ${this.x}, y: ${this.y}`)
      return 
    }
    this.x = this.x + x
    this.y = this.y + y

    this.getPosition(map)
  }
}
