const container = document.querySelector('.container');
const defaultGrid = document.createDocumentFragment();
const gridSize = 16;
const containerSize = container.offsetWidth;
const cellSize = containerSize/gridSize;

    for(let row =0 ; row <16 ; row ++){
        for(let col =0 ; col<16;col++){
            const defCells =document.createElement('div');
            defCells.className ='default-cells';
            defaultGrid.appendChild(defCells);
            defCells.style.height=`${cellSize}px`;
            defCells.style.width=`${cellSize}px`;            
        }
    }
container.appendChild(defaultGrid);

const gridSize = prompt("Enter the number of grids(less than 100)");