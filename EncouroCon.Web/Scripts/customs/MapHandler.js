function tst(){
    //event.preventDefault();
    console.log("Yoink");
}

function setup(){
    drawBologna();
    ruleCanvas();
    document.getElementById("rerollBtn").onclick = tst;
}

function index(){
    drawBologna();
}