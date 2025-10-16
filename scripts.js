const container = document.querySelector(".container");
const defaultGrid = document.createDocumentFragment();
const gridSize = 16;
const containerSize = container.offsetWidth;
const cellSize = containerSize / gridSize;


const submitBtm = document.querySelector(".sub button");

function grids(gridSize) {
  const size = +gridSize;
  if (size <= 0 || size > 100) {
    alert("enter a number between 1 and 100");
    return;
  }
  container.innerHTML = "";

  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
      const defCells = document.createElement("div");
      defCells.className = "default-cells";
      defCells.style.height = `${cellSize}px`;
      defCells.style.width = `${cellSize}px`;
      defaultGrid.appendChild(defCells);
    }
    
}
container.appendChild(defaultGrid);

}
grids(16);
submitBtm.addEventListener('click',() =>{
const newGridSize = prompt("Enter a number for your grids (between 1 and 100):)");
    if (newGridSize === null || newGridSize.trim() === '') {
        return;
    }
    createGrid(newGridSize);
});