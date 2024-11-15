onButton.addEventListener('click',fullMode);
//offButton.addEventListener('click',testMode);


function fullMode() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.rect(0,0,900,400);
    ctx.closePath();
    ctx.fill();
}