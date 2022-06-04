// set up defaults
let color = "#E7C283";
let newGrid = false;
let num = 0;

const container = document.getElementById("container");
var gridDivs = [];

function createGrid(){
    if (num === 0 && newGrid === false){
        num = 16;
    }
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

function createNewGrid(number) {
    document.getElementById("container").innerHTML="";
    newGrid = true;
    num = number;
    createGrid();

}

// change each individual cell color as the mouse hovers over them
function changeColor(e) {
    e.target.style.backgroundColor = color;
}

document.getElementById("gridSizeText").addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (isNaN(this.value) || this.value < 1 || this.value > 100 )
        {
          alert("Must input numbers between 1 and 100");
          return false;
        }
        e.preventDefault();
        createNewGrid(this.value);
        return false;
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

if (!newGrid){
createGrid();
}