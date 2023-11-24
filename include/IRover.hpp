/*
** YNOV PROJECT, 2023
*/

#ifndef IROVER_HPP_
#define IROVER_HPP_

#include <vector>
#include <string>

class IRover {
    public:
        virtual void moveForward() = 0;
        virtual void moveLeft() = 0;
        virtual void moveRight() = 0;
        virtual void moveBackward() = 0;

        virtual ~IRover() {}
};

#endif