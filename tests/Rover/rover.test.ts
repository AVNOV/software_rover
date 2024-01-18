import { beforeAll, describe, expect, test } from "vitest";
import { Rover } from "../../src/Rover/Rover";
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
    test("should move forward and return his position (0, 1)", () => {
      const rover = new Rover(new Position(0, 0), Orientation.North, map);
      const roverPostion: Position = rover.moveForward(new Position(1, 1));
      const expectedResult = new Position(0, 1);
      expect(roverPostion).toEqual(expectedResult);
    });
    test("should not move because of obstacle and send his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 0), Orientation.North, map);
      const roverPostion: Position = rover.moveForward(new Position(0, 1));
      const expectedResult = new Position(0, 0);
      expect(roverPostion).toEqual(expectedResult);
    });
  });
  
  describe("moveBackward function", () => {
    test("should move forward and return his position (0, 5)", () => {
      const rover = new Rover(new Position(0, 0), Orientation.North, map);
      const roverPostion: Position = rover.moveBackward(new Position(1, 1));
      const expectedResult = new Position(0, 4);
      expect(roverPostion).toEqual(expectedResult);
    });
    test("should not move because of obstacle and send his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 0), Orientation.North, map);
      const roverPostion: Position = rover.moveBackward(new Position(0, 0));
      const expectedResult = new Position(0, 4);
      expect(roverPostion).toEqual(expectedResult);
    });
  });

  describe("turnLeft function", () => {
    const rover = new Rover(new Position(0, 0), Orientation.East, map);

    for (let index = 0; index < orientations.length; index++) {
      test(`should return orientation of the rover (${orientations[index]})`, () => {
        const roverOriention = rover.turnLeft();
        const expectedResult = orientations[index];
        expect(roverOriention).toEqual(expectedResult);
      });
    }
  });

  describe("turnRight", () => {
    const rover = new Rover(new Position(0, 0), Orientation.North, map);

    for (let index = orientations.length - 1; index >= 0; index--) {
      test(`should return orientation of the rover (${orientations[index]})`, () => {
        const roverOriention = rover.turnRight();
        const expectedResult = orientations[index];
        expect(roverOriention).toEqual(expectedResult);
      });
    }
  });
});
