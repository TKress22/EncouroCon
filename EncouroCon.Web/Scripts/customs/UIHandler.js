function setup() {
    //ruleCanvas();
    setCanvasSize(750, 500);
    document.getElementById("rerollBtn").onclick = loadMap;
    document.getElementById("StruggleName").value = "Darkness";
    document.getElementById("FavCol").value = "#ff0000";
    document.getElementById("RepCol").value = "#0000ff";
}

function index() {
    setCanvasSize(750, 500);
    drawBologna();
    document.getElementById("Ye").onclick = updateText; //Use .value instead of .innerHTML *********************
    document.getElementById("Ye1").onclick = updateText;
    document.getElementById("Ye2").onclick = updateText;
    document.getElementById("Ye3").onclick = updateText;
}

function updateText(event) {
    document.getElementById("ugg").value = this.value;
}

function setCanvasSize(w,h) {
    var can = document.getElementById("mapCan");

    can.height = h;
    can.width = w;
}