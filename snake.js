const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 850;
canvas.height = 550;


let tileSize = 25;
let tileCountX = canvas.width/tileSize;
let tileCountY = canvas.height/tileSize;
let headX = tileSize - 5;
let headY = tileSize - 5;
let p_headX = 17*tileSize;
let p_headY = 11*tileSize;
let foodX = tileSize - 5;
let foodY = tileSize - 5;
let p_foodX = (Math.floor(Math.random()*tileCountX))*tileSize;
let p_foodY = (Math.floor(Math.random()*tileCountY))*tileSize;
let speed = 3;
let leftPressed = false;
let upPressed = false;
let rightPressed = false;
let downPressed = false;
let yVelocity = 0
let xVelocity = 0
//EventListners
document.addEventListener('keydown',keyDown);
/* document.addEventListener('keyup',keyUp);
 */
//Game Loop
function gameLoop(){
    clearCanvas();
    /* controls(); */
    changePosition();
    checkCollision();
    drawPlayer();
    drawFood();
    boundryCheck();
    setTimeout(gameLoop,1000/speed);

   
    console.log("p head X"+p_headX)
    console.log("p head Y"+p_headY)

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
function changePosition(){
    p_headX = p_headX + xVelocity*tileSize;
    p_headY = p_headY + yVelocity*tileSize;
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
//This boundryCheck was tricky
function boundryCheck(){
    if(p_headY > (tileCountY-1)*tileSize){
        p_headY = -1*tileSize;
    }
   else if(p_headY < 0){
        p_headY = tileCountY*tileSize;
    } 
    else if(p_headX > (tileCountX-1)*tileSize){
        p_headX = -1*tileSize;
    }
    else if(p_headX < 0){
        p_headX = tileCountX*tileSize;
    } 
}
function checkCollision(){
    if(p_headX === p_foodX && p_headY === p_foodY){
        p_foodX = (Math.floor(Math.random()*tileCountX))*tileSize;
        p_foodY = (Math.floor(Math.random()*tileCountY))*tileSize;
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
 
function keyUp(event){
    if(event.keyCode == 37){
        yVelocity = 0;
        xVelocity = 0;
        /* leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false; */
        
        
    }
    if(event.keyCode == 38){
        yVelocity = 0;
        xVelocity = 0;
        /* leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false; */
        
    }
    if(event.keyCode == 39){
        yVelocity = 0;
        xVelocity = 0;
        /* leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false; */
    }
    if (event.keyCode == 40){
        yVelocity = 0;
        xVelocity = 0;
        /* leftPressed = false;
        rightPressed = false;
        upPressed =false;
        downPressed =false; */
        
        
    }
} 

gameLoop();