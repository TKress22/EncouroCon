function drawPlanet(ctx) {
    
}

function drawEdge(ctx, p1, p2) {

}

function drawBologna() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var bolval = document.getElementById("holdy").value;
    var bologna = bolval;
    //var bologna = "#f298c5";

    ctx.fillStyle = bologna;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
    console.log("Halp?");
}