var wordsIndex = ["mouse","computer","desk","smartphone","apple pencil", "monitor"];
draw();
function draw(){
    var ctx = document.getElementById("ahorcado-draw").getContext('2d');
        ctx.fillStyle = "transparent";
        ctx.lineWidth=1.5;
        ctx.fillRect(0, 0, 100, 100);
        ctx.beginPath();//first bottom bar
            ctx.moveTo(5,130);
            ctx.lineTo(185,130);
            ctx.stroke();
        ctx.beginPath(); //vertical bar
            ctx.moveTo(20,20);
            ctx.lineTo(20,130);
            ctx.stroke();
        ctx.beginPath(); //top bar
            ctx.moveTo(20,20);
            ctx.lineTo(250,20);
            ctx.stroke();
        ctx.beginPath(); //top vertical bar
            ctx.moveTo(250,20);
            ctx.lineTo(250,50);
            ctx.stroke();
        ctx.beginPath(); // diagonal line
            ctx.moveTo(20,60);
            ctx.lineTo(70,20);
            ctx.stroke();
}
