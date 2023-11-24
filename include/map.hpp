#ifndef MAP_HPP
#define MAP_HPP

#include <iostream>

class Map {
  private:
    std::vector<std::string> layout;

  public:
    Map(std::vector<std::string> l);
    void displayMap() const;
    void setRoverPosition(int x, int y);
};

#endif
