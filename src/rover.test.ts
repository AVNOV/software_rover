import { expect, test } from "vitest";

import { Rover } from "./Rover";
import { Orientation } from "./Orientation";
import { Map } from "./Map";

// Tests
test("Rover moves forward and backward correctly in each orientation", () => {
  const map = new Map(5, 5); // Par exemple, une carte de largeur 5 et hauteur 5

  const orientations = [Orientation.North, Orientation.South, Orientation.East, Orientation.West];

  orientations.forEach((initialOrientation) => {
    const roverForward = new Rover({ x: 0, y: 0 }, initialOrientation, map);
    const roverBackward = new Rover({ x: 0, y: 0 }, initialOrientation, map);

    // Effectuer un mouvement vers l'avant
    roverForward.moveForward();

    // Vérifier que la position a été mise à jour correctement en tenant compte de la carte
    switch (initialOrientation) {
      case Orientation.North:
        expect(roverForward.getPosition()).toEqual({ x: 0, y: 1 });
        break;
      case Orientation.South:
        expect(roverForward.getPosition()).toEqual({ x: 0, y: 4 }); // La carte reboucle à partir du haut vers le bas
        break;
      case Orientation.East:
        expect(roverForward.getPosition()).toEqual({ x: 1, y: 0 });
        break;
      case Orientation.West:
        expect(roverForward.getPosition()).toEqual({ x: 4, y: 0 }); // La carte reboucle à partir de la droite vers la gauche
        break;
      default:
        break;
    }

    // Effectuer un mouvement vers l'arrière
    roverBackward.moveBackward();

    // Vérifier que la position a été mise à jour correctement en tenant compte de la carte
    switch (initialOrientation) {
      case Orientation.North:
        expect(roverBackward.getPosition()).toEqual({ x: 0, y: 4 }); // La carte reboucle du bas vers le haut
        break;
      case Orientation.South:
        expect(roverBackward.getPosition()).toEqual({ x: 0, y: 1 });
        break;
      case Orientation.East:
        expect(roverBackward.getPosition()).toEqual({ x: 4, y: 0 }); // La carte reboucle de la gauche vers la droite
        break;
      case Orientation.West:
        expect(roverBackward.getPosition()).toEqual({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  });
});

test("Rover turns left and right correctly in each orientation", () => {
  const map = new Map(5, 5); // Par exemple, une carte de largeur 5 et hauteur 5

  const orientations = [Orientation.North, Orientation.South, Orientation.East, Orientation.West];

  orientations.forEach((initialOrientation) => {
    const roverLeft = new Rover({ x: 0, y: 0 }, initialOrientation, map);
    const roverRight = new Rover({ x: 0, y: 0 }, initialOrientation, map);

    // Effectuer un virage à gauche
    roverLeft.turnLeft();

    // Vérifier que l'orientation a été mise à jour correctement
    switch (initialOrientation) {
      case Orientation.North:
        expect(roverLeft.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverLeft.getOrientation()).toEqual(Orientation.West); // Utiliser la méthode getOrientation
        break;
      case Orientation.South:
        expect(roverLeft.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverLeft.getOrientation()).toEqual(Orientation.East); // Utiliser la méthode getOrientation
        break;
      case Orientation.East:
        expect(roverLeft.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverLeft.getOrientation()).toEqual(Orientation.North); // Utiliser la méthode getOrientation
        break;
      case Orientation.West:
        expect(roverLeft.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverLeft.getOrientation()).toEqual(Orientation.South); // Utiliser la méthode getOrientation
        break;
      default:
        break;
    }

    // Effectuer un virage à droite
    roverRight.turnRight();

    // Vérifier que l'orientation a été mise à jour correctement
    switch (initialOrientation) {
      case Orientation.North:
        expect(roverRight.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverRight.getOrientation()).toEqual(Orientation.East); // Utiliser la méthode getOrientation
        break;
      case Orientation.South:
        expect(roverRight.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverRight.getOrientation()).toEqual(Orientation.West); // Utiliser la méthode getOrientation
        break;
      case Orientation.East:
        expect(roverRight.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverRight.getOrientation()).toEqual(Orientation.South); // Utiliser la méthode getOrientation
        break;
      case Orientation.West:
        expect(roverRight.getPosition()).toEqual({ x: 0, y: 0 });
        expect(roverRight.getOrientation()).toEqual(Orientation.North); // Utiliser la méthode getOrientation
        break;
      default:
        break;
    }
  });
});
