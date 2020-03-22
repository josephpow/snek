class Apple {
    constructor() {
        this.x;
        this.y;
        this.dropApple = function () {
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        };
        this.draw = function () {
            ctx.fillStyle = "#FF5733"
            ctx.fillRect(this.x, this.y, scale, scale);
        }
        this.clear = function () {
            ctx.clearRect(this.x, this.y, scale, scale);
        }
    }
}
