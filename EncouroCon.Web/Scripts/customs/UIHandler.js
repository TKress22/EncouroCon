function setup() {
    //ruleCanvas();
    setCanvasSize(750, 500);
    document.getElementById("rerollBtn").onclick = function (event) {
        event.preventDefault(); loadMap();
    };
    document.getElementById("StruggleName").value = "Darkness";
    document.getElementById("FavCol").value = "#ff0000";
    document.getElementById("RepCol").value = "#0000ff";
}

function index() {
    setCanvasSize(750, 500);
    loadIn();
    if (document.getElementById("bdBtn")) {
        document.getElementById("bdBtn").onclick = function () { goodBadClick(); mover = 1; botMove(); document.getElementById("dayCre_WasGood").value = false;};
        document.getElementById("gdBtn").onclick = function () { goodBadClick(); mover = 0; active = true; document.getElementById("dayCre_WasGood").value = true;}
        document.getElementById("mapCan").onclick = checkClicked;
    }
}

function goodBadClick() {
    document.getElementById("bdBtn").disabled = true;
    document.getElementById("gdBtn").disabled = true;
}

function updateText(event) {
    document.getElementById("ugg").value = this.value;
}

function setCanvasSize(w,h) {
    var can = document.getElementById("mapCan");

    can.height = h;
    can.width = w;
}