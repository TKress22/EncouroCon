﻿function makePlanets(w,h) {
    var padding = 10;
    var density = .65;
    var r = 40;
    var cords = [];
    count = Math.floor(density * (w - 2 * r) * (h - 2 * r) / (r * r * Math.PI));
    for (var r = 0; r < count; r++) {
        var safe = false;
        while (!safe) {
            var x = Math.floor((Math.random() * (w - 2 * padding)) + padding);
            var y = Math.floor((Math.random() * (h - 2 * padding)) + padding);
            var p = [x, y];
            safe = true;
            for (var j = 0; j < cords.length; j += 1) {
                var q = cords[j];
                if ((p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]) < r * r) {
                    safe = false;
                    break;
                }
            }
        }
        cords.push(p);
    }
    return cords;
}

function makeEdges(coords) {
    var triangles = makeTris(coords);
    var edges = [];
    var maxEdge = 200;
    var ind = 0;
    for (var o = 0; o < triangles.length; o++) {
        if (findLength(triangles[o][0], triangles[o][1], coords) <= maxEdge) {
            edges[ind] = [triangles[o][0], triangles[o][1]];
            edges[ind].sort(function (a, b) { return a - b });
            ind += 1;
        }
        if (findLength(triangles[o][1], triangles[o][2], coords) <= maxEdge) {
            edges[ind] = [triangles[o][1], triangles[o][2]];
            edges[ind].sort(function (a, b) { return a - b });
            ind += 1;
        }
        if (findLength(triangles[o][0], triangles[o][2], coords) <= maxEdge) {
            edges[ind] = [triangles[o][0], triangles[o][2]];
            edges[ind].sort(function (a, b) { return a - b });
            ind += 1;
        }
    }
    squish(edges);
    return edges;
}

function makeTris(coords){
    var delaunator = Delaunator.from(coords);
    var tris = delaunator.triangles;
    var triChunks = [];
    var rep = 0;
    for (var r = 0; r < tris.length; r += 3) {
        var host = r;
        var mini = [];
        mini.push(tris[r]);
        for (var t = r + 1; t < r + 3; t++) {
            mini.push(tris[t]);
        }
        triChunks[rep] = mini;
        rep++;
    }
    return triChunks;
}

function findLength(p0, p1, coords) {
    var x = coords[p0][0] - coords[p1][0];
    var y = coords[p0][1] - coords[p1][1];
    return Math.sqrt(x * x + y * y);
}

function squish(edges) {
    var squished = [];
    for (var r = 0; r < edges.length; r++) {
        squished.push(edges[r][0] + "," + edges[r][1]);
    }
    //console.log(removeDupes(squished));
}

function removeDupes(arr) {
    var filtered = arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    })
    return filtered;
}