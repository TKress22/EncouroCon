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
    loadIn();
    if (document.getElementById("bdBtn")) {
        document.getElementById("bdBtn").onclick = function () { mover = 1; botMove(); };
        document.getElementById("gdBtn").onclick = function () { mover = 0; active = true; }
        document.getElementById("mapCan").onclick = checkClicked;
    }
}

function updateText(event) {
    document.getElementById("ugg").value = this.value;
}

function setCanvasSize(w,h) {
    var can = document.getElementById("mapCan");

    can.height = h;
    can.width = w;
}