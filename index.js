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
            newDiv.id = "gridDiv"
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

document.getElementById("colorSelection").addEventListener("input", function( event ) {
    // highlight the mouseleave target
    color = this.value;
});


document.getElementById("clearGridButton").onclick = clearGrid;


function clearGrid() {
    console.log("bue")
}