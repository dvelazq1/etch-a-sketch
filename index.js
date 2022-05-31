// set mousedown equal to false
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
// set up defaults
let color = "#E7C283";
let num = 16;
const container = document.getElementById("container");
var gridDivs = [];

function createGrid(number){
    number = num;
    for (i=0; i <num; i++){
        const newRow = document.createElement("div");
        newRow.id = "newRow"
        container.appendChild(newRow);
        gridDivs.push(newRow);
    }

    gridDivs.forEach(newRow => {
        for (i=0; i <num; i++){
            const newDiv = document.createElement("div");
            newDiv.className = "gridDiv"
            newDiv.addEventListener('mouseover', changeColor);
            newRow.appendChild(newDiv);
    }
});
}

createGrid();

// change each individual cell color as the mouse hovers over them
function changeColor(e) {
    e.target.style.backgroundColor = color;
}

document.getElementById("gridSizeText").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      createGrid(num);
    }
});

// change color values based on user input
document.getElementById("colorSelection").addEventListener("input", function( event ) {
    color = this.value;
});


document.getElementById("clearGridButton").onclick = clearGrid;

// clear the grid but keep the same dimensions
function clearGrid() {
    document.querySelectorAll('.gridDiv').forEach(div => div.style.backgroundColor = "white");
}