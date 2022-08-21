window.onload=()=>{

    //Getting the canvas element
    ctx = document.getElementById('canvas').getContext('2d');


    //initializing the start coordinates of the shield
    drawLogo();


    //function for initializing the shield
    function drawLogo(){
        //giving an offset to the shield
        var offsetY = 80;
        ctx.restore();
        ctx.save();
        ctx.clearRect(0, 0, 600, 400);
        ctx.scale(factorValue, factorValue);
        //Drawing the text
        ctx.fillText("HTML", 31,60);
        ctx.translate(0, offsetY);

        //Setting a color value of the shield
        ctx.fillStyle = '#E34C26';
        //Start the shape drawing
        ctx.beginPath();
        //Drawing the shield
        ctx.moveTo(39,250);
        ctx.lineTo(17,0);
        ctx.lineTo(262,0);
        ctx.lineTo(239,250);
        ctx.lineTo(139,278);
        ctx.closePath();
        //Filling the shape with the color
        ctx.fill();
        //calling a font family
        ctx.font = fontFamily;

        //The lighter half of the shield
        ctx.fillStyle = '#F06529';
        ctx.beginPath();
        ctx.moveTo(139,257);
        ctx.lineTo(220,234);
        ctx.lineTo(239,20);
        ctx.lineTo(139,20);
        ctx.closePath();
        ctx.fill();
    }

    //Drawing the text font
    var fontFamily = "65px 'Gill Sans Ultra Bold', sans-serif";
}