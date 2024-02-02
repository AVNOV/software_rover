import { Rover } from "./Rover";
import { Position } from '../Topology/Position';

// Service
export class RoverInterpreter {
  static interpret(
    command: string,
    rover: Rover,
    obstacle: Position
  ): Rover {
    switch (command) {
      case "A":
        return rover.moveForward(obstacle);

      case "R":
        return rover.moveBackward(obstacle);

      case "D":
        return rover.turnRight(obstacle);

      case "G":
        return rover.turnLeft(obstacle);

      default:
        return rover;
    }
  }
}
