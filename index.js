// set mousedown equal to false
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
// set up defaults
let color = "#A0785A";
let num = 16;
const container = document.getElementById("container");
var gridDivs = [];

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

// change each individual cell color as the mouse hovers over them
function changeColor(e) {
    e.target.style.backgroundColor = color;
}

