const currentColor = "";
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}
// get random HSL color
function randomHslColor() {
  return () => {
    let h = randomInteger(360);
    let s = randomInteger(100);
    let l = randomInteger(100);

    return [h, s, l];
  };
}
// Mouse over cell function
const mouseOverSketchCell = (e) => {
  const randomColorsFunc = randomHslColor();
  const [h, s, l] = randomColorsFunc();
  e.target.style.backgroundColor = `hsl(${h},${s}%,${l}%)`;
};

// generate sketch cells inside the grid
function generateGrids(sizeOfThePaintingScreen = 16) {
  const gridScreen = document.querySelector(".sketch-area");
  gridScreen.innerHTML = "";
  gridScreen.style.gridTemplateRows = `repeat(${sizeOfThePaintingScreen}, 1fr)`;
  gridScreen.style.gridTemplateColumns = `repeat(${sizeOfThePaintingScreen}, 1fr)`;
  for (let i = 0; i < sizeOfThePaintingScreen * sizeOfThePaintingScreen; i++) {
    const element = document.createElement("div");
    element.classList.add("sketch-cell");
    element.addEventListener("mouseover", mouseOverSketchCell);
    gridScreen.appendChild(element);
  }
}
function main() {
  const numberOfCellsSwitch = document.querySelector("#cells-number");
  numberOfCellsSwitch.addEventListener("change", (e) => {
    generateGrids(e.target.value);
  });

  generateGrids(numberOfCellsSwitch.value);
}

main();
