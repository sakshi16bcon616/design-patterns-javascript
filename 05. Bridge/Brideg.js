class Shape
{
  constructor(name)
  {
    this.name = name;
  }
}

class Triangle extends Shape
{
  constructor()
  {
    super('triangle');
  }
}

class Square extends Shape
{
  constructor()
  {
    super('square');
  }
}

class VectorSquare extends Square
{
  toString()
  {
    return `Drawing square as lines`;
  }
}

class RasterSquare extends Square
{
  toString()
  {
    return `Drawing square as pixels`;
  }
}

imagine VectorTriangle and RasterTriangle are here too