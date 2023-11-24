/*
** YNOV PROJECT, 2023
*/

#include <ostream>
#include <iostream>

#include "../include/IRover.hpp"
#include "../include/Rover.hpp"

void main() {
    IRover* myRover = new Rover(5, 5, NULL);

    std::cout << "In main" << std::endl;
}