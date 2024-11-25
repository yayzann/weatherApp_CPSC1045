onButton.addEventListener('click',fullMode);
offButton.addEventListener('click',offlineCodeGen);
//offButton.addEventListener('click',testMode);
async function getWeather() { // interaction with API
    const key = '2afbfcd3d8b24fdf89f213443241711' //this needs to be removed from git.
    const city = 'Vancouver'; //hardcoded cuz im hoping no one outside van is testing this, probably will switch to variable
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;
    const response = await fetch(url);
    let data = await response.json();
    //console.log(data)
    return data;
}
let weatherCodes = [1000,1003,1006,1009,1030,1063,1069,
    1072,1087,1114,1117,1135,1147,1150,1153,1168,1171,1180,1183,
    1186,1189,1192,1195,1201,1204,1207,1120,1213,1216,1219,1222,1225,1237,
    1240,1243,1246,1249,1252,1255,1258,1261,1264,1273,1276,1279,1282]; //index of all possible weather codes
const width = window.innerWidth
const height = window.innerHeight
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.position = 'relative';
canvas.style.top = '20px';

function fullMode() { //operating with online functionality / full functionality of webapp
    interpretCode();
    updatePosition();
}

async function interpretCode() { //interprets weather codes recieved from API, executes functions on canvas depending on data recieved.
    const data = await getWeather();
    const intData = {
        code: data.current.condition.code,
        temp_c: data.current.temp_c 
    }
     switch (intData.code) {
        case 1000:
            drawSunny();
            break;
        case 1003:
        case 1006:
        case 1009:
        case 1030:
        case 1135:
            drawOvercast();
            break;
        case 1063:
        case 1069:
        case 1072:
        case 1087:
        case 1150:
        case 1153:
        case 1168:
        case 1171:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
        case 1198:
        case 1201:
        case 1204:
        case 1207:
        case 1240:
        case 1243:
        case 1246:
        case 1249:
        case 1252:
            drawRainy();
            break;
        case 1114:
        case 1117:
        case 1147:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1237:
        case 1255:
        case 1258:
        case 1261:
        case 1264:
        case 1279:
        case 1282:
            drawSnow();
            break;
    }
}



function offlineCodeGen() { //offline debugging mode, also here in case person grading assignment is offline
    switch (weatherCodes[(Math.floor(Math.random()*weatherCodes.length))]) {
        case 1000:
            drawSunny();
            break;
        case 1003:
        case 1006:
        case 1009:
        case 1030:
        case 1135:
            drawOvercast();
            break;
        case 1063:
        case 1069:
        case 1072:
        case 1087:
        case 1150:
        case 1153:
        case 1168:
        case 1171:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
        case 1198:
        case 1201:
        case 1204:
        case 1207:
        case 1240:
        case 1243:
        case 1246:
        case 1249:
        case 1252:
            drawRainy();
            break;
        case 1114:
        case 1117:
        case 1147:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1237:
        case 1255:
        case 1258:
        case 1261:
        case 1264:
        case 1279:
        case 1282:
            drawSnow();
            break;
    }
    buttonGen();

}

function buttonGen() { //basically debugging function ig? need to implement
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
    console.log('its raining')
}

function drawOvercast() {
    console.log('its ugly out')
}

function drawSnow() {
    console.log('merry chrysler')

}


function updatePosition() {
    let outputX = document.getElementById('xout');
    let outputY = document.getElementById('yout');
    outputX.innerHTML = (event.offsetX);
    outputY.innerHTML = (event.offsetY);
} //for debugging