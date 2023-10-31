const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the text: ",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexadecimal): ",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (keyword or hexadecimal): ",
      },
    ]);

    const { text, textColor, shape, shapeColor } = answers;

    let logo = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    if (shape === "Circle") {
      const circle = new Circle();
      circle.setColor(shapeColor);
      logo += circle.render();
    } else if (shape === "Triangle") {
      const triangle = new Triangle();
      triangle.setColor(shapeColor);
      logo += triangle.render();
    } else if (shape === "Square") {
      const square = new Square();
      square.setColor(shapeColor);
      logo += square.render();
    }

    logo += `<text x="100" y="120" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

    fs.writeFileSync("logo.svg", logo);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("An error occurred: ", error);
  }
}

main();
