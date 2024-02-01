import { Map } from "../Topology/Map";
import { Orientation } from "../Topology/Orientation";
import { Position } from '../Topology/Position';

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

  public moveForward(obstacle: Position) {
    let position: Position;
    switch (this.orientation) {
      case Orientation.North:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 0, 1);
        break;
      case Orientation.South:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 0, -1);
        break;
      case Orientation.East:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 1, 0);
        break;
      case Orientation.West:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, -1, 0);
        break;
      default:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 0, 0);
        break;
    }

    return new Rover(position, this.orientation, this.map);
  }

  public moveBackward(obstacle: Position) {
    let position: Position;
    switch (this.orientation) {
      case Orientation.North:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 0, -1);
        break;
      case Orientation.South:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 0, 1);
        break;
      case Orientation.East:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, -1, 0);
        break;
      case Orientation.West:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, +1, 0);
        break;
      default:
        position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 0, 0);;
        break;
    }

    return new Rover(position, this.orientation, this.map);
  }

  private turn(direction: string, obstacle: Position): Rover {
    let orientation: Orientation;
    switch (this.orientation) {
      case Orientation.North:
        if (direction == "L") {
          orientation = Orientation.West;
        } else {
          orientation = Orientation.East;
        }
        break;
      case Orientation.South:
        if (direction == "L") {
          orientation = Orientation.East;
        } else {
          orientation = Orientation.West;
        }
        break;
      case Orientation.East:
        if (direction == "L") {
          orientation = Orientation.North;
        } else {
          orientation = Orientation.South;
        }
        break;
      case Orientation.West:
        if (direction == "L") {
          orientation = Orientation.South;
        } else {
          orientation = Orientation.North;
        }
        break;
      default:
        orientation = Orientation.North
        break;
    }

    const position = this.position.checkObstacleAndSetNewPosition(obstacle, this.map, 0, 0)
    return new Rover(position, orientation, this.map)
  }

  public turnLeft(obstacle: Position): Rover {
    return this.turn("L", obstacle);
  }

  public turnRight(obstacle: Position): Rover {
    return this.turn("R", obstacle);
  }

  public getPosition(): Position {
    return this.position;
  }

  public getOrientation(): Orientation {
    return this.orientation;
  }

  public equalsPosition(position: Position): boolean {
    return this.position.equals(position);
  }

  public equalsOrientation(orientation: Orientation): boolean {
    return this.orientation === orientation;
  }
}
