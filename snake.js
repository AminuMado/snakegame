const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 850;
canvas.height = 550;

let tileCountX = 34;
let tileCountY = 22;
let tileSizeX = canvas.width/tileCountX -5;
let tileSizeY = canvas.height/tileCountY -5;
/* let headX = 20;
let headY = 20; */
let p_headX = 12.5*tileCountX;
let p_headY = 12.5*tileCountY;
let foodX = 20;
let foodY = 20;
let p_foodX = (Math.floor(Math.random()*tileCountX))*tileSizeX;
let p_foodY = (Math.floor(Math.random()*tileCountY))*tileSizeY;
/* let speed = 3;
let leftPressed = false;
let upPressed = false;
let rightPressed = false;
let downPressed = false; */
let yVelocity = 0
let xVelocity = 0
//EventListners
document.addEventListener('keydown',keyDown);
/* document.addEventListener('keyup',keyUp); */

//Game Loop
function gameLoop(){
    clearCanvas();
    /* controls(); */
    changePosition();
    checkCollision();
    drawPlayer();
    drawFood();
    boundryCheck();
    requestAnimationFrame(gameLoop);



}

function clearCanvas(){
    context.fillStyle = 'black';
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fill();
}
function drawPlayer(){
    context.fillStyle = 'crimson';
    context.fillRect(p_headX,p_headY,tileSizeX,tileSizeY);
    context.fill();
}
function drawFood(){
    context.fillStyle = 'greenyellow';
    context.fillRect(p_foodX,p_foodY,foodX,foodY);
    context.fill();
}
function changePosition(){
    p_headX = p_headX + xVelocity;
    p_headY = p_headY + yVelocity;
}
/* function controls(){
    if (leftPressed === true){
        p_headX = p_headX - speed;
        console.log ("X " + p_headX)
    }
    if (upPressed === true){
        p_headY = p_headY - speed;
        console.log ("Y " + p_headY) 
    }
    if (rightPressed === true){
        p_headX = p_headX + speed;
        console.log ("X " + p_headX)
    }
    if (downPressed === true){
        p_headY = p_headY + speed;
        console.log ("Y " + p_headY)
    }
    
} */
function boundryCheck(){
    if(p_headY > canvas.height){
        p_headY =  -9;
    }
    if(p_headY < -10){
        p_headY = canvas.height;
    }
    if(p_headX > canvas.width){
        p_headX =  -9;
    }
    if(p_headX < -10){
        p_headX = canvas.width;
    }
}
function checkCollision(){
    if(p_headX === p_foodX && p_headY === p_foodY){
        p_foodX = (Math.floor(Math.random()*tileCountX))*tileSizeX;
        p_foodY = (Math.floor(Math.random()*tileCountY))*tileSizeY;
    }
}
function keyDown(event){
    if(event.keyCode == 37){
        if(xVelocity == 1){
            return;
        }
        yVelocity = 0;
        xVelocity = -1;
        /* leftPressed = true;
        rightPressed = false;
        upPressed =false;
        downPressed =false; */
        
        
    }
    if(event.keyCode == 38){
        if(yVelocity == 1){
            return;
        }
        yVelocity = -1;
        xVelocity = 0;
       /*  upPressed = true;
        downPressed = false;
        leftPressed = false;
        rightPressed = false; */
        
    }
    if(event.keyCode == 39){
        if(xVelocity == -1){
            return;
        }
        yVelocity = 0;
        xVelocity = 1;
        /* rightPressed = true;
        leftPressed = false;
        upPressed =false;
        downPressed =false; */
    }
    if (event.keyCode == 40){
        if(yVelocity == -1){
            return;
        }
        yVelocity = 1;
        xVelocity = 0;
        /* downPressed = true;
        upPressed = false;
        leftPressed = false;
        rightPressed = false; */
        
        
    }
}
/* function keyUp(event){
    if(event.keyCode == 37){
        leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false;
        
        
    }
    if(event.keyCode == 38){
        leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false;
        
    }
    if(event.keyCode == 39){
        leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false;
    }
    if (event.keyCode == 40){
        leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false;
        
        
    }
} */

gameLoop();