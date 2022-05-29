// set mousedown equal to false
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let color = "#A0785A";
// change each individual cell color as the mouse hovers over them
function changeColor(e) {
    e.target.style.backgroundColor = color;
}
const container = document.getElementById("container");
var gridDivs = [];
let num = 16;

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

