function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1);
        this.y = (Math.floor(Math.random() * rows - 1) + 1);
    }

    this.draw = function() {
        ctx.fillStyle = "#f72a2a";
        ctx.fillRect(convX(this.x), convY(this.y), scale, scale);
    }
}