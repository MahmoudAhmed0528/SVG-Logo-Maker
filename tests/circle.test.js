import { Circle } from "../lib/shapes";

test("Circle render method should generate correct SVG", () => {
  const circle = new Circle();
  circle.setColor("red");
  const svg = circle.render();
  expect(svg).toBe('<circle cx="100" cy="100" r="80" fill="red" />');
});
