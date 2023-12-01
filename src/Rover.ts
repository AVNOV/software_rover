import { Map } from "./Map";
import { Orientation } from "./Orientation";

export class Rover {
  private position: { x: number; y: number };
  private orientation: Orientation;
  private map: Map;

  public constructor(
    position: { x: number; y: number },
    orientation: Orientation,
    map: Map
  ) {
    this.position = position;
    this.orientation = orientation;
    this.map = map;
  }

  public moveForward(): void {
    switch (this.orientation) {
      case Orientation.North:
        this.position = this.map.getPosition({ x: this.position.x, y: this.position.y + 1 });
        break;
      case Orientation.South:
        this.position = this.map.getPosition({ x: this.position.x, y: this.position.y - 1 });
        break;
      case Orientation.East:
        this.position = this.map.getPosition({ x: this.position.x + 1, y: this.position.y });
        break;
      case Orientation.West:
        this.position = this.map.getPosition({ x: this.position.x - 1, y: this.position.y });
        break;
      default:
        break;
    }
  }

  public moveBackward(): void {
    switch (this.orientation) {
      case Orientation.North:
        this.position = this.map.getPosition({ x: this.position.x, y: this.position.y - 1 });
        break;
      case Orientation.South:
        this.position = this.map.getPosition({ x: this.position.x, y: this.position.y + 1 });
        break;
      case Orientation.East:
        this.position = this.map.getPosition({ x: this.position.x - 1, y: this.position.y });
        break;
      case Orientation.West:
        this.position = this.map.getPosition({ x: this.position.x + 1, y: this.position.y });
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

  public getPosition(): { x: number; y: number } {
    return this.position;
  }
}
