"use strict";

//--------------------------------------------------------------------------------------------------
// Declaration
//--------------------------------------------------------------------------------------------------

const grid = document.getElementById("grid");
const pixels = document.getElementById("pixels");
const gridChildren = grid.childNodes;
let divs = 16;

//--------------------------------------------------------------------------------------------------
// Functions
//--------------------------------------------------------------------------------------------------

function main(divs) {
  grid.innerHTML = "";
  grid.style = `
    display: grid;
    grid-template-columns: repeat(${divs}, 1fr);
    grid-template-rows: repeat(${divs}, 1fr);
    margin: 0 auto;
    height: 500px;
    width: 500px;
    gap: 1px;
  `;
  for (let i = 0; i < divs * divs; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
  }
  Array.from(gridChildren).forEach((child) => {
    child.addEventListener("mouseover", () => {
      let red, green, blue;
      if (child.style.background === "") {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
      } else {
        let rgbColors = child.style.background;
        // "rgb(64, 128, 256)"  =>  64, 128, 256
        const matches = rgbColors.match(/\d+/g);
        red = parseInt(matches[0]);
        green = parseInt(matches[1]);
        blue = parseInt(matches[2]);

        // Anonymous function

        const reduce = (color) => {
          if (color >= 25) {
            color -= 25;
          } else {
            color = 0;
          }
          return color;
        };

        red = reduce(red);
        green = reduce(green);
        blue = reduce(blue);
      }
      child.style.background = `rgb(${red}, ${green}, ${blue})`;
    });
  });
}

//--------------------------------------------------------------------------------------------------
// Main Function
//--------------------------------------------------------------------------------------------------

main(divs);

//--------------------------------------------------------------------------------------------------
// Event Listeners
//--------------------------------------------------------------------------------------------------

pixels.addEventListener("click", () => {
  do {
    divs = prompt("New grid size (100 squares max):");
  } while (divs > 100 || divs < 1);
  main(divs);
});
