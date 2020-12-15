class Shape
{
  constructor(renderer, name=null)
  {
    this.renderer = renderer;
    this.name = name;
  }

  toString()
  {
    return `Drawing ${name} as ${this.renderer.whatToRenderAs}`;
  }
}

class VectorRenderer
{
  get whatToRenderAs()
  {
    return 'pixels';
  }
}

class RasterRenderer
{
  get whatToRenderAs()
  {
    return 'pixels';
  }
}

class Triangle extends Shape
{
  constructor(renderer)
  {
    super(renderer,'triangle');
  }
}

class Square extends Shape
{
  constructor(renderer)
  {
    super(renderer,'square');
  }
}

const vector = new VectorRenderer();
new Triangle()