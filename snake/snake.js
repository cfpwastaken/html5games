function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "#5eff00";

        for(let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(convX(this.tail[i].x), convY(this.tail[i].y), scale, scale);
        }

        ctx.fillRect(convX(this.x), convY(this.y), scale, scale);
    }

    this.update = function() {
        for(let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x >= columns) {
            this.x = 0;
        } else if(this.y >= rows) {
            this.y = 0;
        } else if(this.x < 0) {
            this.x = columns -1;
        } else if(this.y < 0) {
            this.y = rows -1;
        }
    }

    this.changeDirection = function(direction) {
        switch(direction) {
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -1;
                break;
            
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = 1;
                break;

            case "Left":
                this.xSpeed = -1;
                this.ySpeed = 0;
                break;

            case "Right":
                this.xSpeed = 1;
                this.ySpeed = 0;
                break;
            
            case "w":
                this.xSpeed = 0;
                this.ySpeed = -1;
                break;
            
            case "s":
                this.xSpeed = 0;
                this.ySpeed = 1;
                break;
            
            case "a":
                this.xSpeed = -1;
                this.ySpeed = 0;
                break;
            
            case "d":
                this.xSpeed = 1;
                this.ySpeed = 0;
                break;
            
            case " ":
                if(pause == false) {
                    pause = true;
                    ctx.font = "30px Arial";
                    ctx.fillText(snake.total + " - Paused", 10, 30);
                } else {
                    pause = false;
                }
        }
    }
}