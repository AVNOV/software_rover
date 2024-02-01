import { Map } from "./Map";

// Objet-valeur
export class Position {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  private checkMapLimitAndSetNewPosition(map: Map, position: Position): void {
    if (position.x < 0) {
      position.x = map.width - 1;
    } else if (position.x > map.width - 1) {
      position.x = 0;
    }

    if (position.y < 0) {
      position.y = map.height - 1;
    } else if (position.y > map.height - 1) {
      position.y = 0;
    }
  }

  public checkObstacleAndSetNewPosition(obstacle: Position, map: Map, x: number, y: number): Position {
    if (obstacle.x === this.x + x && obstacle.y === this.y + y) {
      return new Position(this.x, this.y);
    }
    const newPosition = new Position(this.x + x, this.y + y);
  
    this.checkMapLimitAndSetNewPosition(map, newPosition);

    return newPosition;
  }

  public equals(position: Position): boolean {
    return this.x === position.x && this.y === position.y;
  }
  
}
