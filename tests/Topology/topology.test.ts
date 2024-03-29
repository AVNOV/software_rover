import { expect, test } from "vitest";
import { Rover } from "../../src/Rover/Rover";
import { RoverInterpreter } from "../../src/Rover/RoverInterpreter";
import { CardinalPoint, Orientation } from "../../src/Topology/Orientation";
import { Position } from "../../src/Topology/Position";
import { Map } from "../../src/Topology/Map";
import { describe } from "node:test";

describe("obstacle topology", () => {
  // when interpreter indicates move forward or backward, rover position should change correctly in each orientation
  test("when rover encounter an obstacle, rover should* stops when it encounters an obstacle", () => {
    const map = new Map(5, 5); // Par exemple, une carte de largeur 5 et hauteur 5

    const initialPosition = new Position(0, 0);
    const obstacle = new Position(0, 1);
    const orientation = new Orientation(CardinalPoint.North)
    const rover = new Rover(initialPosition, orientation, map);

    // Effectuer un mouvement en avant
    const roverPosition = RoverInterpreter.interpret(
      "A",
      rover,
      obstacle
    );

    if (typeof roverPosition === "string") {
      expect(roverPosition).toEqual("Commande invalide");
    } else {
      // Vérifier que la position a été mise à jour correctement
      expect(roverPosition.getPosition()).toEqual({ x: 0, y: 0 });
    }
  });
});
