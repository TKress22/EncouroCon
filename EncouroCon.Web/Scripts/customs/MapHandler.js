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

function loadMap() {
    var w, h;
    w = document.getElementById("mapCan").width;
    h = document.getElementById("mapCan").height;

    var coords = makePlanets(w, h);
    var edges = makeEdges(coords);
    var spawn = Math.floor(Math.random() * coords.length);
    for (var r = 0; r < coords.length; r++) {

    }
}

function findConnections(targ) {
    var cons = [];
    for (var r = 0; r < edges.length; r++) {
        if (edges[r][0] == targ) {
            cons.push(edges[r][0]);
        }
        else if (edges[r][1] == targ) {
            cons.push(edges[r][1]);
        }
    }
}

function render() {
    drawEdges(ctx, edges);
    drawPlanets(ctx, planets);
}

function planet(x, y, owner, colour, value) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.colour = colour;
    this.value = value;
}