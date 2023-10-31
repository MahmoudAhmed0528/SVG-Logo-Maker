import { Triangle } from "../lib/shapes";

test("Triangle render method should generate correct SVG", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  const svg = triangle.render();
  expect(svg).toBe('<polygon points="100,20 40,180 160,180" fill="blue" />');
});
