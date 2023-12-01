/*
** YNOV PROJECT, 2023
*/

#include <ostream>
#include <iostream>

#include "include/IRover.hpp"
#include "include/Rover.hpp"

int main() {
    std::vector<std::string> vec;
    for (int i = 1; i <= 10; i++) {
        vec.push_back("..........");
    }
    
    Map map(vec);
    // map.displayMap();
    std::cout << std::endl;

    IRover* myRover = new Rover(5, 5, map, IRover::Direction::N);

    std::cout << std::endl;


    myRover->moveForward();
    // map.displayMap();

    std::cout << std::endl;


    myRover->turnLeft();
    myRover->moveForward();
    // map.displayMap();

    myRover->moveBackward();
    delete myRover;

    return (0);
}