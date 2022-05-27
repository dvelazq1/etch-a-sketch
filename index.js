const container = document.getElementById("container");
var gridDivs = [];
var num = 16; 
for (i=0; i <16; i++){
    const newRow = document.createElement("div");
    newRow.id = "newRow"
    container.appendChild(newRow);
    gridDivs.push(newRow);
}

gridDivs.forEach(newRow => {
    for (i=0; i <num; i++){
        const newDiv = document.createElement("div");
        newDiv.id = "gridDiv"
        newRow.appendChild(newDiv);
    }
});

