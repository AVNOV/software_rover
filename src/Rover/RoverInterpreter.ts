import { Rover } from "./Rover";
import { Position } from "../Topology/Position";
import { Orientation } from "../Topology/Orientation";

// Service
export class RoverInterpreter {
  static interpret(
    command: string,
    rover: Rover,
    obstacle: Position
  ): Position | Orientation | string {
    switch (command) {
      case "avancer":
        return rover.moveForward(obstacle);

      case "reculer":
        return rover.moveBackward(obstacle);

      case "droite":
        return rover.turnRight();

      case "gauche":
        return rover.turnLeft();

      default:
        return "Commande invalide";
    }
  }
}
