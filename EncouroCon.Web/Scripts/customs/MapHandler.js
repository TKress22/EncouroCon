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
    document.getElementById("YeL").onclick = updateText; //User .value instead of .innerHTML *********************
    document.getElementById("YeL1").onclick = updateText;
    document.getElementById("YeL2").onclick = updateText;
    document.getElementById("YeL3").onclick = updateText;
    document.getElementById("Ye").onclick = updateText;
    document.getElementById("Ye1").onclick = updateText;
    document.getElementById("Ye2").onclick = updateText;
    document.getElementById("Ye3").onclick = updateText;
}

function updateText(event){
    document.getElementById("ugg").innerHTML = this.innerHTML; 
}