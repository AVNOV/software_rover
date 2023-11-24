#ifndef MAP_HPP
#define MAP_HPP

#include <iostream>
#include <vector>

#define MAP_HEIGHT 10
#define MAP_WIDTH 10

class Map {
  private:
    std::vector<std::string> layout;

  public:
    Map(std::vector<std::string> l);
    void displayMap() const;
    void setRoverPosition(int, int, char);
};

#endif
