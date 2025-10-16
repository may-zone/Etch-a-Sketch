const container = document.querySelector(".container");
const submitBtm = document.querySelector(".sub button");

function grids(gridSize) {
    const size = +gridSize;
    if (size <= 0 || size > 100) {
        alert("enter a number between 1 and 100");
        return;
    }
    container.innerHTML = "";
    const containerSize = container.offsetWidth;
    const cellSize = containerSize / size;
    const newGridFragment = document.createDocumentFragment();
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const defCells = document.createElement("div");
      defCells.className = "default-cells";
      defCells.style.height = `${cellSize}px`;
      defCells.style.width = `${cellSize}px`;
      newGridFragment.appendChild(defCells);
      defCells.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = getRandomColor();
            });
    }
    
}
container.appendChild(newGridFragment);

}
grids(16);
submitBtm.addEventListener('click',() =>{
const newGridSize = prompt("Enter a number for your grids (between 1 and 100):)");
    if (newGridSize === null || newGridSize.trim() === '') {
        return;
    }
    grids(newGridSize);
});

function getRandomColor(){
    const randCode = '012456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i<6 ; i++){
        color += randCode[Math.floor(Math.random() *16)];

    }
return color;
}
