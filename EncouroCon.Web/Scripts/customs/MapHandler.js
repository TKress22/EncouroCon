var ctx = document.getElementById("mapCan").getContext('2d'); 
var edges;
var planets;
var colours = [];
var active;
var mover;

function loadIn(){
    //var templanets = "[393,429|1|9|0][47,440|1|4|1][488,307|1|7|2][599,93|1|2|3][430,359|1|0|4][272,132|0|2|5][240,228|1|2|6][638,154|1|0|7][657,44|1|9|8][471,453|1|6|9][423,191|1|6|10][704,308|1|9|11][404,169|1|8|12][336,173|1|1|13][165,248|1|5|14][404,441|1|4|15][339,200|1|5|16][108,282|1|1|17][654,138|1|7|18][499,382|1|8|19][189,152|0|3|20][451,132|1|5|21][651,13|1|1|22][214,117|0|10|23][360,113|0|3|24][496,47|1|9|25][520,294|1|8|26][100,158|0|3|27][379,136|1|1|28][106,384|1|0|29][647,313|1|4|30][361,319|1|0|31][241,285|1|4|32][732,412|1|0|33][614,426|1|5|34][205,232|1|6|35]";
    //var temedges = "(10,21)(12,21)(10,12)(21,28)(12,28)(12,21)(13,28)(12,13)(12,28)(21,24)(24,28)(21,28)(12,16)(10,16)(10,12)(13,24)(13,28)(24,28)(13,16)(12,16)(12,13)(21,25)(24,25)(21,24)(3,25)(21,25)(3,21)(10,26)(21,26)(10,21)(2,31)(2,10)(10,31)(2,26)(10,26)(2,10)(5,24)(5,13)(13,24)(6,13)(6,16)(13,16)(5,23)(5,24)(23,24)(31,32)(16,31)(16,32)(16,31)(10,31)(10,16)(3,7)(3,21)(7,21)(4,31)(2,4)(2,31)(2,19)(19,26)(2,26)(7,26)(7,21)(21,26)(5,6)(6,13)(5,13)(7,18)(3,18)(3,7)(11,18)(7,18)(7,11)(5,20)(6,20)(5,6)(23,24)(24,25)(4,19)(2,19)(2,4)(26,30)(7,30)(7,26)(6,32)(16,32)(6,16)(0,31)(0,4)(4,31)(32,35)(6,32)(6,35)(20,35)(6,35)(6,20)(20,23)(5,20)(5,23)(8,18)(3,8)(3,18)(3,22)(22,25)(3,25)(30,34)(26,30)(26,34)(8,22)(3,22)(3,8)(0,31)(31,32)(4,9)(9,19)(4,19)(0,15)(4,15)(0,4)(19,34)(26,34)(19,26)(0,15)(29,32)(14,35)(14,32)(32,35)(14,20)(14,35)(20,35)(9,15)(4,9)(4,15)(11,30)(7,11)(7,30)(11,18)(8,18)(11,33)(11,30)(30,33)(9,34)(19,34)(9,19)(20,27)(14,27)(14,20)(23,27)(20,27)(20,23)(14,17)(17,32)(14,32)(17,27)(14,17)(14,27)(33,34)(30,33)(30,34)(11,33)(8,22)(33,34)(9,34)(17,29)(29,32)(17,32)(1,29)(17,29)(1,17)(1,29)(9,15)(1,17)(17,27)";
    //var temcolours = "#ff0000, #0000ff";
    console.log("pank");
    var templanets = document.getElementById("map_Planets").value;
    var temedges = document.getElementById("map_Edges").value;
    var temcolours = document.getElementById("map_Colours").value;

    planets = [];
    edges = [];

    var kcols = temcolours.split(/,[\s]*/);
    colours.push(kcols[0]);
    colours.push(kcols[1]);

    var x = 1;
    while (x < templanets.length) {
        var xStub = "";
        var yStub = "";
        var ownerStub = "";
        var valueStub = "";
        var nameStub = "";

        while (templanets[x] != "]") {
            while (templanets[x] != ",") {
                xStub += templanets.substring(x, x + 1);
                x++;
            }
            x++;
            while (templanets[x] != "|") {
                yStub += templanets.substring(x, x + 1);
                x++;
            }
            x++;
            while (templanets[x] != "|") {

                ownerStub += templanets.substring(x, x + 1);
                x++;
            }
            x++;
            while (templanets[x] != "|") {
                valueStub += templanets.substring(x, x + 1);
                x++;
            }
            x++;
            while (templanets[x] != "]") {
                nameStub += templanets.substring(x, x + 1);
                x++;
            }
            planets.push(new planet(Number(xStub), Number(yStub), Number(ownerStub), colours[ownerStub], Number(valueStub)));
        }
        x += 2;
    }

    x = 1;
    while (x < temedges.length) {
        var p1Stub = "";
        var p2Stub = "";
        while (temedges[x] != ")") {
            while (temedges[x] != ",") {
                p1Stub += temedges.substring(x, x + 1);
                x++;
            }
            x++;
            while (temedges[x] != ")") {
                p2Stub += temedges.substring(x, x + 1);
                x++;
            }
            var mini = [Number(p1Stub), Number(p2Stub)];
            edges.push(mini);
        }
        x += 2;
    }

    render();
}

function writeMap() {
    var planString = "";
    for (var r = 0; r < planets.length; r++) {
        var mini = "[" + planets[r].x + "," + planets[r].y + "|" + planets[r].owner + "|" + planets[r].value + "|" + planets[r].name + "]";
        planString += mini;
    }
    var edgeString = "";
    for (var r = 0; r < edges.length; r++) {
        var mini = "(" + edges[r][0] + "," + edges[r][1] + ")";
        edgeString += mini;
    }
    if (!document.getElementById("Planets")) {
        console.log("ping");
        document.getElementById("map_Planets").value = planString;
        document.getElementById("map_Edges").value = edgeString;
    }
    else {
        console.log("pong");
        document.getElementById("Planets").value = planString;
        document.getElementById("Edges").value = edgeString;
    } 
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

function makeName() {
    var chunks = ["ra", "fa", "da", "ga", "ta", "ha", "sa", "do", "go", "ro", "to", "bo", "so", "ho", "si", "di", "gi", "ki", "ti", "ri", "hi", "ge", "te", "he", "se", "be"];
    var name = "";
    var count = Math.floor((Math.random() * 4) + 2);
    for (var r = 0; r < count; r++) {
        name += chunks[Math.floor(Math.random() * chunks.length)];
    }
    return name;
}

function planet(x, y, owner, colour, value) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    this.colour = colour;
    this.value = value;
    this.name = makeName();
}

function botMove() {
    var targets = [];
    for (var r = 0; r < planets.length; r++) {
        if (planets[r].owner == 1) {
            var mini = findConnections(r);
            for (var t = 0; t < mini.length; t++) {
                if (planets[mini[t]].owner != 1) {
                    targets.push(mini[t]);
                }
            }
        }
    }
    move(targets[Math.floor(Math.random() * targets.length)]);
}

function move(targ) {
    if (planets[targ].owner == mover) {
        planets[targ].value += 1;
    }
    else {
        if (planets[targ].value > 1) {
            planets[targ].value -= 1;
        }
        else {
            planets[targ].owner = mover;
            planets[targ].colour = colours[mover];
        }
    }
    render();
    active = false;
    writeMap();
}

function checkClicked() {
    if (active) {
        var canvRect = document.getElementById("mapCan").getBoundingClientRect();
        var x = (event.clientX - canvRect.left);
        var y = (event.clientY - canvRect.top);
        console.log(x + ", " + y);
        for (var r = 0; r < planets.length; r++) {
            if (x >= (planets[r].x - 10) && x <= (planets[r].x + 10)) {
                if (y >= (planets[r].y - 10) && y <= (planets[r].y + 10)) {
                    console.log("found: " + planets[r].x + ", " + planets[r].y)
                    if (planets[r].owner == mover) {
                        move(r);
                    }
                    else {
                        if (checkProxy(r)) {
                            move(r);
                        }
                    }
                    break;
                }
            }
        }
    }
}

function checkProxy(targ) {
    var proxies = findConnections(targ);
    for (var r = 0; r < proxies.length; r++) {
        if (planets[proxies[r]].owner == mover) {
            return true;
        }
    }
    return false;
}