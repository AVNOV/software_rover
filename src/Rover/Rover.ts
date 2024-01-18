import { Map } from "../Topology/Map";
import { Orientation } from "../Topology/Orientation";
import { Position } from "../Topology/Position";

// Objet-valeur
export class Rover {
  private position: Position;
  private orientation: Orientation;
  private map: Map;

  public constructor(position: Position, orientation: Orientation, map: Map) {
    this.position = position;
    this.orientation = orientation;
    this.map = map;
  }

  public moveForward(obstacle: Position): Position {
    switch (this.orientation) {
      case Orientation.North:
        this.position.checkPosition(obstacle, this.map, this.position, 0, 1);
        break;
      case Orientation.South:
        this.position.checkPosition(obstacle, this.map, this.position, 0, -1);
        break;
      case Orientation.East:
        this.position.checkPosition(obstacle, this.map, this.position, 1, 0);
        break;
      case Orientation.West:
        this.position.checkPosition(obstacle, this.map, this.position, -1, 0);
        break;
      default:
        break;
    }
    return this.position;
  }

  public moveBackward(obstacle: Position): Position {
    switch (this.orientation) {
      case Orientation.North:
        this.position.checkPosition(obstacle, this.map, this.position, 0, -1);
        break;
      case Orientation.South:
        this.position.checkPosition(obstacle, this.map, this.position, 0, 1);
        break;
      case Orientation.East:
        this.position.checkPosition(obstacle, this.map, this.position, -1, 0);
        break;
      case Orientation.West:
        this.position.checkPosition(obstacle, this.map, this.position, +1, 0);
        break;
      default:
        break;
    }
    return this.position;
  }

  private turn(direction: string): Orientation {
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
    return this.orientation;
  }

  public turnLeft(): Orientation {
    return this.turn("L");
  }

  public turnRight(): Orientation {
    return this.turn("R");
  }
}
