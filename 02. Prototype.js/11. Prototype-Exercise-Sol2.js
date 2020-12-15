class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
      return new Line(
          new Point(this.start.x, this.start.y),
          new Point(this.end.x, this.end.y)
      );
  }
}

let line1 = new Line(
    new Point(2,5), new Point(3,6))
let line2 = line1.deepCopy()
console.log(line1.start.x, line1.start.y, line1.end.x, line1.end.y) //Line { start: Point { x: 2, y: 5 }, end: Point { x: 3, y: 6 } }
console.log(line2.start.x, line2.start.y, line2.end.x, line2.end.y) //Line { start: Point { x: 2, y: 5 }, end: Point { x: 3, y: 6 } }