import { expect, test } from "vitest";
import { Rover } from "../../src/Rover/Rover";
import { RoverInterpreter } from "../../src/Rover/RoverInterpreter";
import { Orientation } from "../../src/Topology/Orientation";
import { Position } from "../../src/Topology/Position";
import { Map } from "../../src/Topology/Map";
import { describe } from "node:test";

describe("Topology tests ", () => {
  test("Rover stops when it encounters an obstacle", () => {
    const map = new Map(5, 5); // Par exemple, une carte de largeur 5 et hauteur 5

    const initialPosition = new Position(0, 0);
    const obstacle = new Position(0, 1);
    const rover = new Rover(initialPosition, Orientation.North, map);

    // Effectuer un mouvement en avant
    const roverPosition = RoverInterpreter.interpret(
      "avancer",
      rover,
      obstacle
    );

    if (typeof roverPosition === "string") {
      expect(roverPosition).toEqual("Commande invalide");
    } else {
      // Vérifier que la position a été mise à jour correctement
      expect(roverPosition.position).toEqual({ x: 0, y: 0 });
    }
  });
});
