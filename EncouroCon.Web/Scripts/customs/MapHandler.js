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
    document.getElementById("Ye").onclick = updateText; //User .value instead of .innerHTML *********************
    document.getElementById("Ye1").onclick = updateText;
    document.getElementById("Ye2").onclick = updateText;
    document.getElementById("Ye3").onclick = updateText;
}

function updateText(event){
    document.getElementById("ugg").value = this.value; 
}