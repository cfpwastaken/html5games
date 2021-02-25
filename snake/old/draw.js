const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
var scale = 30;
var rows = canvas.height / scale;
var columns = canvas.width / scale;
var gameOver = false;

var snake;

(function setup() {
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        redraw();
    }, 250);
}());

function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(gameOver == false) {
        snake.update();
        fruit.draw();
        snake.draw();
        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText(snake.total, 10, 30);
    
        if(fruit.x == snake.x && fruit.y == snake.y) {
            fruit.pickLocation();
            snake.total++;
        }
    
        snake.checkCollision();
    } else {
        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText("GAME OVER! SCORE: " + snake.total + ". Press Space to restart.", 10, 30);
    }

}

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace("Arrow", "");
    console.log("Pressed: #" + direction + "#");
    if(direction === " " && gameOver == true) {
        location.reload();
    } else {
        snake.changeDirection(direction);
    }
}))

window.addEventListener("resize", ((evt) => {
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    // rows = canvas.height / scale;
    // columns = canvas.width / scale;
    // redraw();
    // fruit.pickLocation();
}))