const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 850;
canvas.height = 550;

let headX = 20;
let headY = 20;
let p_headX = 425;
let p_headY = 225;
let foodX = 21;
let foodY = 21;
let p_foodX = Math.random()*canvas.width;
let p_foodY = Math.random()*canvas.height;
let speed = 5;
let leftPressed = false;
let upPressed = false;
let rightPressed = false;
let downPressed = false;
//EventListners
document.addEventListener('keydown',movement);

//Game Loop
function gameLoop(){
    clearCanvas();
    controls();
    drawPlayer();
    drawFood();
    requestAnimationFrame(gameLoop);



}

function clearCanvas(){
    context.fillStyle = 'black';
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fill();
}
function drawPlayer(){
    context.fillStyle = 'crimson';
    context.fillRect(p_headX,p_headY,headX,headY);
    context.fill();
}
function drawFood(){
    context.fillStyle = 'greenyellow';
    context.fillRect(p_foodX,p_foodY,foodX,foodY);
    context.fill();
}
function controls(){
    if (leftPressed === true){
        p_headX = p_headX - speed;
    }
    if (upPressed === true){
        p_headY = p_headY - speed; 
    }
    if (rightPressed === true){
        p_headX = p_headX + speed;
    }
    if (downPressed === true){
        p_headY = p_headY + speed;
    }
    
}
function movement(event){
    if(event.keyCode == 37){
        leftPressed = true;
        rightPressed = false;
        upPressed =false;
        downPressed =false;
        
        
    }
    if(event.keyCode == 38){
        upPressed = true;
        downPressed = false;
        leftPressed = false;
        rightPressed = false;
        
    }
    if(event.keyCode == 39){
        rightPressed = true;
        leftPressed = false;
        upPressed =false;
        downPressed =false;
    }
    if (event.keyCode == 40){
        downPressed = true;
        upPressed = false;
        leftPressed = false;
        rightPressed = false;
        
        
    }
}

gameLoop();