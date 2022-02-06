let cols = 16;
let rows = 16;
let grid = document.querySelector(".grid")
let gridHeight = getElementHeightInPixels(grid);
let gridWidth = getElementWidthInPixels(grid);



function createGrid() {
    while ( grid.firstChild ) grid.removeChild(grid.firstChild); // If there are cells in grid, delete them to create new ones
    let cellsNum = rows * cols;
    let gridArea = gridHeight * gridWidth;
    let cellSide = Math.sqrt(gridArea/cellsNum);
    for (let i=0; i<rows; i++) {
        let row = document.createElement("div");
        for (let j=0; j<cols; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = cellSide + "px";
            cell.style.height = cellSide + "px";
            row.appendChild(cell);
        };
        grid.appendChild(row);
    };
};


function colorCell(e) {
    let cellColor = e.target.style.backgroundColor
    if (cellColor !== "black") {
        e.target.style.backgroundColor = "black";
    };
};


function startDrawing() {
    cells.forEach(element => {
        element.addEventListener("mouseover", colorCell);
    });
};

function stopDrawing() {
    cells.forEach(element => {
        element.removeEventListener("mouseover", colorCell);
    });
};


function erase() {
    cells.forEach(cell => {
        cell.style.backgroundColor = null;
    });
};


function getElementWidthInPixels(element) {
    res = Number(getComputedStyle(element).width.replace("px", ""));
    return res;
};


function getElementHeightInPixels(element) {
    res = Number(getComputedStyle(element).height.replace("px", ""));
    return res;
};



createGrid();

let cells = Array.from(document.querySelectorAll(".cell"));
let cell = grid.querySelector(".cell");