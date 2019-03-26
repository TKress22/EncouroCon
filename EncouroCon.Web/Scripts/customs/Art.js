function drawPlanets(ctx, plans){
    for (var r = 0; r < plans.length; r++){
        ctx.fillStyle = plans[r].colour;
        ctx.strokeStyle = plans[r].colour;
        ctx.beginPath();
        ctx.arc(plans[r].x, plans[r].y, 10, 0, 2 * Math.PI);
        ctx.fill();
        if (plans[r].value > 1) {
            ctx.fillStyle = "#000";
            ctx.strokeStyle = "#000";
            ctx.beginPath();
            ctx.arc(plan[r].x, plan[r].y, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.strokeStye = "#fff";
            ctx.font = "20px Arial";
            ctx.fillText(plans[r].value, plans[r].x, plans[r].y);
        }
    }
}

function drawEdges(ctx, eds, plans){
    for (var r = 0; r < eds.length; r++){
        if (plans[eds[r][0]].owner == plans[eds[r][1]].owner) {
            ctx.strokeStye = plans[eds[r][0]].colour;
            ctx.fillStyle = plans[eds[r][0]].colour;
        }
        else {
            ctx.strokeStyle = "#999";
            ctx.fillStyle = "#999";
        }
        ctx.lineWidth = 3;
        ctx.moveTo(plans[eds[r][0]].x, plans[eds[r][0]].y);
        ctx.lineTo(plans[eds[r][1]].x, plans[eds[r][1]].y);
        ctx.stroke();
    }
}

function ruleCanvas(){
    var canvas = document.getElementById("ruleCan");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
}

function drawBologna(){
    var canvas = document.getElementById("mapCan");
    var ctx = canvas.getContext("2d");
    //var bolval = document.getElementById("holdy").value;
    var bologna = "#f298c5";
    //var bologna = bolval;

    ctx.beginPath();
    ctx.fillStyle = bologna;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
}