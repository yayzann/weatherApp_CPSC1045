onButton.addEventListener('click',fullMode);
//offButton.addEventListener('click',testMode);
async function getWeather() {
    const key = '2afbfcd3d8b24fdf89f213443241711'
    const city = 'Vancouver';
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;
    const response = await fetch(url);
    let data = await response.json();
    //console.log(data)
    return data;
}

const width = window.innerWidth
const height = window.innerHeight
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.position = 'relative';
canvas.style.top = '20px';
//canvas.style.left = '40px'
function fullMode() {
    interpretCode();
    updatePosition();
    drawSunny();
}

async function interpretCode() {
    const data = await getWeather();
    const intData = {
        code: data.current.condition.code,
        temp_c: data.current.temp_c 
    }
    console.log(JSON.stringify(intData, null, 2));
}


function offlineCodeGen() {

}

function drawSunny() {
    ctx.fillStyle = 'yellow';
    ctx.arc(800,0,90,45,0);
    ctx.fill();
    ctx.strokeStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(700,5);
    ctx.lineTo(645,5);
    ctx.moveTo(701,33);
    ctx.lineTo(649,38);
}

function drawRainy() {

}

function drawOvercast() {

}

function drawSnow() {

}


function updatePosition() {
    let outputX = document.getElementById('xout');
    let outputY = document.getElementById('yout');
    outputX.innerHTML = (event.offsetX);
    outputY.innerHTML = (event.offsetY);
} //for debugging