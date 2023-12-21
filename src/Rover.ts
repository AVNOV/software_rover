import { Map } from "./Map";
import { Orientation } from "./Orientation";
import { Position } from "./Position";

export class Rover {
  private position: Position;
  private orientation: Orientation;
  private map: Map;

  public constructor(
    position: Position,
    orientation: Orientation,
    map: Map
  ) {
    this.position = position;
    this.orientation = orientation;
    this.map = map;
  }

  public moveForward(obstacle: Position): string | void {
    const position = this.position.getPosition();
    const obstaclePosition = obstacle.getPosition();
    switch (this.orientation) {
      case Orientation.North:
        if (position.y + 1 === obstaclePosition.y)
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        else this.position = this.map.getPosition({ x: position.x, y: position.y + 1 });
        break;
      case Orientation.South:
        if (position.y - 1 === obstaclePosition.y) 
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        else this.position = this.map.getPosition({ x: position.x, y: position.y - 1 });
        break;
      case Orientation.East:
        if (position.x + 1 === obstaclePosition.x) 
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        this.position = this.map.getPosition({ x: position.x + 1, y: position.y });
        break;
      case Orientation.West:
        if (position.x - 1 === obstaclePosition.x) 
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        this.position = this.map.getPosition({ x: position.x - 1, y: position.y });
        break;
      default:
        break;
    }
  }

  public moveBackward(obstacle: Position): string | void {
    const position = this.position.getPosition();
    const obstaclePosition = obstacle.getPosition();
    switch (this.orientation) {
      case Orientation.North:
        if (position.y - 1 === obstaclePosition.y) 
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        else this.position = this.map.getPosition({ x: position.x, y: position.y - 1 });
        break;
      case Orientation.South:
        if (position.y + 1 === obstaclePosition.y) 
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        this.position = this.map.getPosition({ x: position.x, y: position.y + 1 });
        break;
      case Orientation.East:
        if (position.x - 1 === obstaclePosition.x) 
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        this.position = this.map.getPosition({ x: position.x - 1, y: position.y });
        break;
      case Orientation.West:
        if (position.x + 1 === obstaclePosition.x) 
          console.log(`Obstacle detected - position: x: ${position.x}, y: ${position.y}`)
        this.position = this.map.getPosition({ x: position.x + 1, y: position.y });
        break;
      default:
        break;
    }
  }

  public turnLeft(): void {
    this.turn("L")
  }

  public turnRight(): void {
   this.turn("R")
  }

  private turn(direction: string): void {
    switch (this.orientation) {
      case Orientation.North:
        if (direction == "L") {
          this.orientation = Orientation.West;
        } else {
          this.orientation = Orientation.East;
        }
        break;
      case Orientation.South:
        if (direction == "L") {
          this.orientation = Orientation.East;
        } else {
          this.orientation = Orientation.West;
        }
        break;
      case Orientation.East:
        if (direction == "L") {
          this.orientation = Orientation.North;
        } else {
          this.orientation = Orientation.South;
        }
        break;
      case Orientation.West:
        if (direction == "L") {
          this.orientation = Orientation.South;
        } else {
          this.orientation = Orientation.North;
        }
        break;
      default:
        break;
    }
  }

  public getPosition(): Position {
    return this.position;
  }

  public getOrientation(): Orientation {
    return this.orientation;
  }
}
