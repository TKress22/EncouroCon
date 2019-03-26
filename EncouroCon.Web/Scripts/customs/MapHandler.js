var ctx = document.getElementById("mapCan").getContext('2d'); 
var edges;
var planets;
var colours = [];
var active;

function loadIn(){
    var templanets = document.getElementById("Planets").value;
    var temedges = document.getElementById("Edges").value;
    var temcolours = document.getElementById("Colours").value;
}

function writeMap() {
    var planString = "";
    for (var r = 0; r < planets.length; r++) {
        var mini = "[" + planets[r].x + "," + planets[r].y + "|" + planets[r].owner + "|" + planets[r].value + "|" + r + "]";
        planString += mini;
    }
    var edgeString = "";
    for (var r = 0; r < edges.length; r++) {
        var mini = "(" + edges[r][0] + "," + edges[r][1] + ")";
        edgeString += mini;
    }
    document.getElementById("Planets").value = planString;
    document.getElementById("Edges").value = edgeString;
}

function loadMap() {
    var w, h;
    w = document.getElementById("mapCan").width;
    h = document.getElementById("mapCan").height;
    colours[0] = document.getElementById("FavCol").value;
    colours[1] = document.getElementById("RepCol").value;

    var coords = makePlanets(w, h);
    planets = [];
    edges = makeEdges(coords);
    var spawn = Math.floor(Math.random() * coords.length);
    for (var r = 0; r < coords.length; r++) {
        planets.push(new planet(coords[r][0], coords[r][1], 1, colours[1], Math.floor(Math.random()*10)));
    }
    setSpawn(spawn);
    render();
    writeMap();
}

function setSpawn(targ) {
    planets[targ].owner = 0;
    planets[targ].colour = colours[0];
    planets[targ].value = 10;
    var cons = findConnections(targ);
    for (var r = 0; r < cons.length; r++) {
        planets[cons[r]].owner = 0;
        planets[cons[r]].colour = colours[0];
        planets[cons[r]].value = Math.floor(Math.random()*5);
    }
}

function findConnections(targ) {
    var cons = [];
    for (var r = 0; r < edges.length; r++) {
        if (edges[r][0] == targ) {
            cons.push(edges[r][1]);
        }
        else if (edges[r][1] == targ) {
            cons.push(edges[r][0]);
        }
    }
    return cons;
}

function render() {
    var canvas = document.getElementById("mapCan");
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
    drawEdges(ctx, edges, planets);
    drawPlanets(ctx, planets);
}

function planet(x, y, owner, colour, value) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.colour = colour;
    this.value = value;
}