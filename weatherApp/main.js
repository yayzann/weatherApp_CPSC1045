//initialization of app
onButton.addEventListener('click',fullMode);
offButton.addEventListener('click',offlineCodeGen);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d', {alpha:true});
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let killSprite = false;
let activeIntervals = [];
clearCanvas();
let currentInterval = null;
//the function gallary:
async function getWeather() { // interaction with API
    const key = '093a6a79ca9649b09ae40739240412' //this needs to be removed from git.
    const city = 'Vancouver'; //hardcoded cuz im hoping no one outside van is testing this, probably will switch to variable
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
}
let weatherCodes = [1000,1003,1006,1009,1030,1063,1069,
    1072,1087,1114,1117,1135,1147,1150,1153,1168,1171,1180,1183,
    1186,1189,1192,1195,1201,1204,1207,1120,1213,1216,1219,1222,1225,1237,
    1240,1243,1246,1249,1252,1255,1258,1261,1264,1273,1276,1279,1282]; //index of all possible weather codes    
function clearCanvas(callback) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    const backdrop = new Image();
    backdrop.src = 'assets/backdrop.png';
    backdrop.onload = function () {
        ctx.drawImage(backdrop, 0, 0, canvas.width, canvas.height); // Ensure backdrop is drawn first
        console.log('Backdrop drawn.');
        if (callback) callback();
    };
}

function resetInterval() {
    if(currentInterval) {
        clearInterval(currentInterval);
        currentInterval = null;
    }
}
function fullMode() { //operating with online functionality / full functionality of webapp
    clearCanvas(() => {
        interpretCodes();
        updatePosition();
    })
}
function offlineCodeGen() { //offline debugging mode, also here in case person grading assignment is offline
    clearCanvas(()=>{
        buttonGen('celine',offdrawSunny,);
        buttonGen('fml', offdrawRainy);
        buttonGen('another one', offdrawOvercast);
        buttonGen('deejaay khALID', offdrawSnow);
    });
    
}
async function interpretCodes() { //interprets weather codes recieved from API, executes functions on canvas depending on data recieved.
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
    ctx.fillStyle = 'bisque';
    ctx.font = "72px techno";
    let txt = Math.round(intData.temp_c)+'c';
    const txtWidth = (ctx.measureText(txt).width)
    const xCorrection = (canvas.width/2)-(txtWidth/2);
    console.log(xCorrection);
    ctx.fillText(txt,xCorrection,canvas.height/2);
}
function buttonGen(name,clickAction) { //basically debugging function ig? need to implement buttons to change weather response or smth 
    const button = document.createElement('button');
    const container = document.getElementById('tbContainer');
    if ((container.childElementCount) === 4) {
        return;
    }
    button.classList.add('testButton');
    button.textContent = name;
    container.appendChild(button);
    button.onclick = clickAction;
}
function testFunction() {
    console.log('test 1')
}
function testFunction2() {
    console.log('test 2')
}
function drawSunny() {
    console.log('You are my sunshine');
    resetIntervals();  // Ensure all previous animations are stopped
    killSprite = true;  // Set the flag to kill previous sprite if any

    clearCanvas(() => {
        killSprite = false;  // Reset killSprite flag after clearing the canvas
        const img = new Image();
        img.src = 'assets/mrsunnyshine.png';  // Ensure correct path to sprite image
        img.onload = () => {
            animateSprite(img, 200, 200, 6, canvas.width / 2 - 100, canvas.height / 15, 6);  // Start animation
        };
    });
}

function drawRainy() {  
    console.log('It\'s raining');
    resetIntervals();  // Ensure previous animations are stopped
    clearCanvas(() => {
        killSprite = false;
        animateSprite('assets/mrrainy.png', 600, 350, 3, canvas.width / 2, canvas.height / 15, 6);
        animateSprite('assets/mrrainy.png', 600, 350, 3, canvas.width / 10, canvas.height / 15, 6);   
    });
}
function drawOvercast() {
    console.log('its ugly out');
    //animateSprite();
}
function drawSnow() {
    console.log('merry chrysler');
    //animateSprite();
}
function offdrawSunny() {
    drawSunny();
    setTimeout(() => {
        offTempGen();
    },50)
}
function offdrawRainy() {
    drawRainy();
    setTimeout(() => {
        offTempGen();
    },50)
}
function offdrawOvercast() {
    drawOvercast();
    clearCanvas(() => {
        offTempGen();
    });

}
function offdrawSnow() {
    drawSnow();
    clearCanvas(() => {
        offTempGen();
    });

}
function offTempGen() {
    ctx.fillStyle = 'bisque';
    ctx.font = "72px techno";
    let txt = Math.floor((Math.random()*30)+1).toString()+'c';
    const txtWidth = (ctx.measureText(txt).width)
    const xCorrection = (canvas.width/2)-(txtWidth/2);
    console.log(xCorrection);
    console.log(txt);
    ctx.fillText(txt,xCorrection,canvas.height/2);
}
function startSprite(img, sW, sH, fN, posW, posH, EfN) {
    let cycle = 0;  // Initialize the frame cycle counter
    let interval = setInterval(function() {
        ctx.clearRect(posW, posH, sW, sH);  // Clear the previous frame area

        ctx.drawImage(img, cycle * sW, 0, sW, sH, posW, posH, sW, sH);  // Draw the current frame
        cycle = (cycle + 1) % fN;  // Loop through the normal frames

        // Stop the animation if killSprite flag is set
        if (killSprite) {
            clearInterval(interval);  // Stop the interval (animation)
        }
    }, 110);  // Adjust the frame rate as needed

    activeIntervals.push(interval);  // Add to active intervals to manage them
}

function animateSprite(spriteSrc, sW, sH, fN, posW, posH, EfN) {
    console.log(spriteSrc);
    if (killSprite) {
        resetIntervals();  // Stop all previous animations before starting a new one
        return;
    }

    const img = new Image();
    img.src = spriteSrc;  // Load the sprite image
    img.onload = () => {
        startSprite(img, sW, sH, fN, posW, posH, EfN);  // Start the animation when image is loaded
    };
    img.onerror = function() {
        console.error('Failed to load image:', spriteSrc);
    };

    // Handle the case when the image might already be loaded
    if (img.complete) {
        startSprite(img, sW, sH, fN, posW, posH, EfN);
    }
}
function resetIntervals() {
    for (let i = 0; i < activeIntervals.length; i++) {
        clearInterval(activeIntervals[i]);
    }
    activeIntervals = [];  
}


function updatePosition() {
    let outputX = document.getElementById('xout');
    let outputY = document.getElementById('yout');
    outputX.innerHTML = (event.offsetX);
    outputY.innerHTML = (event.offsetY);
} //for debugging