var ctx = document.getElementById("mapCan").getContext('2d'); 
var edges;
var planets;
var colours;
var active;

function loadIn(){
    var templanets = document.getElementById("Planets").value;
    var temedges = document.getElementById("Edges").value;
    var temcolours = document.getElementById("Colours").value;
}

function render() {
    drawEdges(ctx, edges);
    drawPlanets(ctx, planets);
}