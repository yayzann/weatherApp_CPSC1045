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
let weatherCodes = [1000,1003,1006,1009,1030,1063,1069,
    1072,1087,1114,1117,1135,1147,1150,1153,1168,1171,1180,1183,
    1186,1189,1192,1195,1201,1204,1207,1120,1213,1216,1219,1222,1225,1237,
    1240,1243,1246,1249,1252,1255,1258,1261,1264,1273,1276,1279,1282];
const width = window.innerWidth
const height = window.innerHeight
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.position = 'relative';
canvas.style.top = '20px';
//console.log(weatherCodes[(Math.floor(Math.random()*weatherCodes.length))]) //for debugging
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
    switch (weatherCodes[(Math.floor(Math.random()*weatherCodes.length))]) {
        case 1000:
            drawSunny();
        case 1003:
        case 1006:
        case 1009:
        case 1030:
            drawOvercast();
        case 1063:
        case 1069:
        case 1072:
        case 

    }
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