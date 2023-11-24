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
    map.displayMap();
    std::cout << std::endl;

    IRover* myRover = new Rover(5, 5, map);

    std::cout << std::endl;


    myRover->moveForward();
    map.displayMap();

    std::cout << std::endl;


    myRover->moveLeft();
    map.displayMap();
    delete myRover;
    std::cout << "In main" << std::endl;

    return (0);
}