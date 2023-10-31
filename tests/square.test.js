import { Square } from "../lib/shapes";

test("Square render method should generate correct SVG", () => {
  const square = new Square();
  square.setColor("green");
  const svg = square.render();
  expect(svg).toBe(
    '<rect x="40" y="40" width="120" height="120" fill="green" />'
  );
});
