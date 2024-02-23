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
      child.classList.add("black");
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
