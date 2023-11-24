#include "../include/map.hpp"

Map::Map(std::vector<std::string> l) {
    layout = l;
};

void Map::displayMap() const
{
  for (const std::string &row : layout)
  {
    std::cout << row << std::endl;
  }
};

void Map::setRoverPosition(int x, int y)
{
  layout[y][x] = 'r';
}

