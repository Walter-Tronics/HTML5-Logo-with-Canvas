window.onload=()=>{

    //initializing the start coordinates of the shield
    initCoords();

    //function for initializing the shield
    function initCoords(){
        //Getting the canvas element
        ctx = document.getElementById('canvas').getContext('2d');
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
    }
}