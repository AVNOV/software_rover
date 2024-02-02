import { Map } from "../Topology/Map";
import { CardinalPoint, Orientation } from "../Topology/Orientation";
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

  public moveForward(obstacle: Position) {
    let position: Position;
    switch (this.orientation.getCardinalPoint()) {
      case CardinalPoint.North:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          0,
          1
        );
        break;
      case CardinalPoint.South:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          0,
          -1
        );
        break;
      case CardinalPoint.East:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          1,
          0
        );
        break;
      case CardinalPoint.West:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          -1,
          0
        );
        break;
      default:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          0,
          0
        );
        break;
    }

    return new Rover(position, this.orientation, this.map);
  }

  public moveBackward(obstacle: Position) {
    let position: Position;
    switch (this.orientation.getCardinalPoint()) {
      case CardinalPoint.North:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          0,
          -1
        );
        break;
      case CardinalPoint.South:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          0,
          1
        );
        break;
      case CardinalPoint.East:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          -1,
          0
        );
        break;
      case CardinalPoint.West:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          +1,
          0
        );
        break;
      default:
        position = this.position.checkObstacleAndSetNewPosition(
          obstacle,
          this.map,
          0,
          0
        );
        break;
    }

    return new Rover(position, this.orientation, this.map);
  }

  public turnLeft(obstacle: Position): Rover {
    const newOrientation = this.orientation.decrementOrientation();
    const position = this.position.checkObstacleAndSetNewPosition(
      obstacle,
      this.map,
      0,
      0
    );
    return new Rover(position, newOrientation, this.map);
  }

  public turnRight(obstacle: Position): Rover {
    const newOrientation = this.orientation.incrementOrientation();
    const position = this.position.checkObstacleAndSetNewPosition(
      obstacle,
      this.map,
      0,
      0
    );
    return new Rover(position, newOrientation, this.map);
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
    return this.orientation.equals(orientation);
  }
}
