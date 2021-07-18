const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 850;
canvas.height = 550;

let headX = 20;
let headY = 20;
let foodX = 21;
let foodY = 21;

//Game Loop
function gameLoop(){
    clearCanvas();
    drawPlayer();
    drawFood();

}

function clearCanvas(){
    context.fillStyle = 'black';
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fill();
}
function drawPlayer(){
    context.fillStyle = 'crimson';
    context.fillRect(0.5*canvas.width,0.5*canvas.height,headX,headY);
    context.fill();
}
function drawFood(){
    context.fillStyle = 'greenyellow';
    context.fillRect(0.2*canvas.width,0.2*canvas.height,foodX,foodY);
    context.fill();
}

gameLoop();