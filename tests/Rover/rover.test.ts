import { beforeAll, describe, expect, test } from "vitest";
import { Rover } from '../../src/Rover/Rover';
import { Orientation } from "../../src/Topology/Orientation";
import { Position } from "../../src/Topology/Position";
import { Map } from "../../src/Topology/Map";

describe("Rover class", () => {
  const orientations = [
    Orientation.North,
    Orientation.West,
    Orientation.South,
    Orientation.East,
  ];
  const map = new Map(5, 5);

  describe("moveForward function", () => {
    test("when rover move forward, his position should change and he should return his position (0, 1)", () => {
      const rover = new Rover(new Position(0, 0), Orientation.North, map);
      const roverPosition = rover.moveForward(new Position(1, 1)).getPosition();
      const expectedResult = new Position(0, 1);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move forward to edge of the map, rover should goes at the other end of the map and he should return his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 4), Orientation.North, map);
      const roverPosition = rover.moveForward(new Position(1, 1)).getPosition();
      const expectedResult = new Position(0, 0);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move forward and an obstacle is in front of him, his position should not change and he should return his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 0), Orientation.North, map);
      const roverPosition = rover.moveForward(new Position(0, 1)).getPosition();
      const expectedResult = new Position(0, 0);
      expect(roverPosition).toEqual(expectedResult);
    });
  });

  describe("moveBackward function", () => {
    test("when rover move backward, his position should change and he should return his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 1), Orientation.North, map);
      const roverPosition = rover.moveBackward(new Position(1, 1)).getPosition();
      const expectedResult = new Position(0, 0);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move backward to edge of the map, rover should goes at the other end of the map and he should return his position (0, 4)", () => {
      const rover = new Rover(new Position(0, 0), Orientation.North, map);
      const roverPosition = rover.moveBackward(new Position(1, 1)).getPosition();
      const expectedResult = new Position(0, 4);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move backward and an obstacle is behind him, his position should not change and he should return his position (0, 1)", () => {
      const rover = new Rover(new Position(0, 1), Orientation.North, map);
      const roverPosition = rover.moveBackward(new Position(0, 0)).getPosition();
      const expectedResult = new Position(0, 1);
      expect(roverPosition).toEqual(expectedResult);
    });
  });

  describe("turnLeft function", () => {
    let rover = new Rover(new Position(0, 0), Orientation.East, map);

    for (let index = 0; index < orientations.length; index++) {
      test(`when the rover turn left, he should return the new orientation of the rover (${orientations[index]})`, () => {
        rover = rover.turnLeft(new Position(0, 1));
        const expectedResult = orientations[index];
        expect(rover.getOrientation()).toEqual(expectedResult);
      });
    }
  });

  describe("turnRight", () => {
    let rover = new Rover(new Position(0, 0), Orientation.North, map);

    for (let index = orientations.length - 1; index >= 0; index--) {
      test(`when the rover turn right, he should return the new orientation of the rover (${orientations[index]})`, () => {
        rover = rover.turnRight(new Position(1, 1));
        const expectedResult = orientations[index];
        expect(rover.getOrientation()).toEqual(expectedResult);
      });
    }
  });
});
