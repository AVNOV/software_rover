#include "map.hpp"

int main()
{
  std::vector<std::string> vec;
  for (int i = 1; i <= 10; i++)
    vec.push_back("..........");
  Map map(vec);

  map.setRoverPosition(0, 1);
  map.displayMap();

  return 0;
}
