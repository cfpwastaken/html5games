function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.direction = "Right";

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

        if(this.x > canvas.width) {
            console.log("1");
            this.x = 0;
        } else if(this.y > canvas.height) {
            console.log("2");
            this.y = 0;
        } else if(this.x < 0) {
            console.log("3");
            this.x = window.innerWidth;
        } else if(this.y < 0) {
            console.log("4");
            this.y = window.innerWidth;
        }
    }

    this.changeDirection = function(direction) {
        switch(direction) {
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;

            case "Left":
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;

            case "Right":
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.checkCollision = function() {
        for(var i = 0; i < this.tail.length; i++) {
            if(this.x == this.tail[i].x && this.y == this.tail[i].y) {
                gameOver = true;
            }
        }
    }
}