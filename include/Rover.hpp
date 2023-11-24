
class Rover : public IRover
{
private:
    std::pair<int, int> position;
    Map &map;

public:
    Rover(int startX, int startY, Map &mapRef) : position(std::make_pair(startX, startY)), map(mapRef)
    {
        map.setTile(position.first, position.second, 'R');
    }

    void moveForward() override
    {
        if (position.second > 0 && map.getTile(position.first, position.second - 1) == ' ')
        {
            map.setTile(position.first, position.second, ' ');
            position.second--;
            map.setTile(position.first, position.second, 'R');
            std::cout << "Rover avance" << std::endl;
        }
        else
        {
            std::cout << "Bord de map" << std::endl;
        }
    }

    void moveLeft() override
    {
        if (position.first > 0 && map.getTile(position.first - 1, position.second) == ' ')
        {
            map.setTile(position.first, position.second, ' ');
            position.first--;
            map.setTile(position.first, position.second, 'R');
            std::cout << "Rover gauche" << std::endl;
        }
        else
        {
            std::cout << "Bord de map" << std::endl;
        }
    }

    void moveRight() override
    {
        if (position.first < MAP_WIDTH - 1 && map.getTile(position.first + 1, position.second) == ' ')
        {
            map.setTile(position.first, position.second, ' ');
            position.first++;
            map.setTile(position.first, position.second, 'R');
            std::cout << "Rover droite" << std::endl;
        }
        else
        {
            std::cout << "Bord de map" << std::endl;
        }
    }

    void moveBackward() override {
        if (position.second < MAP_HEIGHT - 1 && map.getTile(position.first, position.second + 1) == ' ') {
            map.setTile(position.first, position.second, ' ');
            position.second++;
            map.setTile(position.first, position.second, 'R');
            std::cout << "Rover recule" << std::endl;
        } else {
            std::cout << "Bord de map" << std::endl;
        }
    }
};