/*
** HEADER
*/

#include "IRover.hpp"
#include "map.hpp"
class Rover : public IRover
{
private:
    std::pair<int, int> position;
    Map &map;
    Direction currentDirection;

public:
    Rover(int startX, int startY, Map &mapRef, Direction direction) : position(std::make_pair(startX, startY)), map(mapRef)
    {
        map.setRoverPosition(position.first, position.second, 'R');
        setDirection(direction);
        std::cout << getDirection() <<std::endl;

    }

    void moveForward() override
    {
        switch (getDirection())
        {
        case Direction::N:
            position.second++;
            map.setRoverPosition(position.first, position.second, 'R');
            break;
        case Direction::S:
            position.second--;
            map.setRoverPosition(position.first, position.second - 1, 'R');
            break;
        case Direction::E:
            position.first++;
            map.setRoverPosition(position.first + 1, position.second, 'R');
            break;
        case Direction::W:
            position.first--;
            map.setRoverPosition(position.first - 1, position.second, 'R');
            break;
        default:
            break;
        }
        std::cout << this->position.first << std::endl;
        std::cout << this->position.second << std::endl;
        
        // if (position.second > 0)
        // {
        //     map.setRoverPosition(position.first, position.second, '.');
        //     position.second--;
        //     map.setRoverPosition(position.first, position.second, 'R');
        //     std::cout << "Rover avance" << std::endl;
        // }
        // else
        // {
        //     std::cout << "Bord de map" << std::endl;
        // }
    }

    void turnLeft() override
    {
        turn('L');
        // if (position.first > 0)
        // {
        //     map.setRoverPosition(position.first, position.second, '.');
        //     position.first--;
        //     map.setRoverPosition(position.first, position.second, 'R');
        //     std::cout << "Rover gauche" << std::endl;
        // }
        // else
        // {
        //     std::cout << "Bord de map" << std::endl;
        // }
    }

    void turnRight() override
    {
        turn('R');
        // if (position.first < MAP_WIDTH - 1)
        // {
        //     map.setRoverPosition(position.first, position.second, '.');
        //     position.first++;
        //     map.setRoverPosition(position.first, position.second, 'R');
        //     std::cout << "Rover droite" << std::endl;
        // }
        // else
        // {
        //     std::cout << "Bord de map" << std::endl;
        // }
    }

    void turn(char direction) {
        switch(getDirection()) {
            case Direction::N: 
                if (direction == 'L') {
                    setDirection(Direction::W);
                } else {
                    setDirection(Direction::E);
                }
                break;
            case Direction::S:
                if ('direction' == 'L') {
                    setDirection(Direction::E);
                } else {
                    setDirection(Direction::W);
                }
                break;
            case Direction::E:
                if ('direction' == 'L') {
                    setDirection(Direction::N);
                } else {
                    setDirection(Direction::S);
                }
                break;
            case Direction::W:
                if ('direction' == 'L') {
                    setDirection(Direction::S);
                } else {
                    setDirection(Direction::N);
                }
                break;
            default:
                break;
        };
    }

    void moveBackward() override {
        switch (getDirection())
        {
        case Direction::N:
            position.second--;
            map.setRoverPosition(position.first, position.second, 'R');
            break;
        case Direction::S:
            position.second++;
            map.setRoverPosition(position.first, position.second - 1, 'R');
            break;
        case Direction::E:
            position.first--;
            map.setRoverPosition(position.first + 1, position.second, 'R');
            break;
        case Direction::W:
            position.first++;
            map.setRoverPosition(position.first - 1, position.second, 'R');
            break;
        default:
            break;
        }
        std::cout << this->position.first << std::endl;
        std::cout << this->position.second << std::endl;
        // if (position.second < MAP_HEIGHT - 1) {
        //     map.setRoverPosition(position.first, position.second, '.');
        //     position.second++;
        //     map.setRoverPosition(position.first, position.second, 'R');
        //     std::cout << "Rover recule" << std::endl;
        // } else {
        //     std::cout << "Bord de map" << std::endl;
        // }
    }

    void setDirection(Direction direction) {
        currentDirection = direction;
    }

    Direction getDirection() {
        return currentDirection;
    }
};