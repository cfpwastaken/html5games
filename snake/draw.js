const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const rows = 20;
const columns = 30;
var scale;
var offsetX = offsetY = 0;
var pause = false;

var snake;

(function setup() {
    resized();
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        redraw();
    }, 250);
}());

function redraw() {
    if(pause == false) {
		snake.update();
        ctx.fillStyle = "#777";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#3e3e3e";
        ctx.fillRect(offsetX, offsetY, columns * scale, rows*scale);
        snake.draw();
        fruit.draw();
        ctx.fillStyle = "#FFF";
        ctx.font = "30px Arial";
        ctx.fillText(snake.total, 10, 30);

        if(fruit.x == snake.x && fruit.y == snake.y) {
            fruit.pickLocation();
            snake.total++;
        }
    }
}

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace("Arrow", "");
    console.log(direction);
    snake.changeDirection(direction);
}))

window.addEventListener("resize", ((evt) => {
    resized();
	redraw();
}))

function resized() {
	canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    scale = window.innerHeight / rows;
	if(window.innerWidth / columns < scale) scale = window.innerWidth / columns;
	offsetX = (window.innerWidth - scale * columns) /2;
	offsetY = (window.innerHeight - scale * rows) /2;
}

function convX(x) {
	return x*scale + offsetX;
}

function convY(y) {
	return y*scale + offsetY;
}
