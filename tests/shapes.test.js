const { Circle, Square, Triangle } = require("../lib/shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    it("render method should generate correct SVG", () => {
      const circle = new Circle();
      circle.setColor("red");
      const svg = circle.render();
      expect(svg).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');
    });
  });

  describe("Square", () => {
    it("render method should generate correct SVG", () => {
      const square = new Square();
      square.setColor("green");
      const svg = square.render();
      expect(svg).toEqual(
        '<rect x="40" y="40" width="120" height="120" fill="green" />'
      );
    });
  });

  describe("Triangle", () => {
    it("render method should generate correct SVG", () => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      const svg = triangle.render();
      expect(svg).toEqual(
        '<polygon points="100,20 40,180 160,180" fill="blue" />'
      );
    });
  });
});
