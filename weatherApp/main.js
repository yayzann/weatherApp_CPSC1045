onButton.addEventListener('click',fullMode);
//offButton.addEventListener('click',testMode);

async function getWeather() {
    const key = '2afbfcd3d8b24fdf89f213443241711'
    const city = 'Vancouver';
    const url = 'http://api.weatherapi.com/v1/current.json?key=2afbfcd3d8b24fdf89f213443241711&q=$Vancouver';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}

const width = window.innerWidth-175
const height = window.innerHeight-575
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.position = 'relative';
canvas.style.top = '20px';
canvas.style.left = '40px'
function fullMode() {
    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.rect(0,0,width,height);
    ctx.closePath();
    ctx.stroke();
    getWeather();
}

function interpretCode() {

}

function offlineCodeGen() {
    
}

function drawSunny() {

}

function drawRainy() {

}

function drawOvercast() {

}

function drawSnow() {

}