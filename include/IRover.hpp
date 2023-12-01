/*
** YNOV PROJECT, 2023
*/

#ifndef IROVER_HPP_
#define IROVER_HPP_

#include <vector>
#include <string>

class IRover {
    public:
        enum Direction
        {
            N,
            S,
            E,
            W
        };
        virtual void moveForward() = 0;
        virtual void turnLeft() = 0;
        virtual void turnRight() = 0;
        virtual void moveBackward() = 0;

        virtual ~IRover() {}
};

#endif