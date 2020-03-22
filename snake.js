class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];

        this.draw = function () {
            ctx.fillStyle = "#808000";
            ctx.strokeStyle = "#FFFFFF"
            ctx.lineWidth = 2;
            for (let i = 0; i < this.tail.length; i++) {
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            }
            ctx.fillRect(this.x, this.y, scale, scale);
            ctx.stroke();
        };

        this.checkApple = function (apple) {
            if (this.x == apple.x && this.y == apple.y) {
                this.eat(apple);
            }
        };
        this.eat = function (apple) {
            apple.dropApple();
            this.total += 1
        };
        this.checkDead = function () {
            var dead = false;
            for (let i = 0; i < this.tail.length; i++) {
                if (this.tail[i].x == this.x && this.tail[i].y == this.y) {
                    dead = true;
                    return dead;
                }
            }
            return dead;
        }
        this.update = function () {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
            this.tail[this.total - 1] = { x: this.x, y: this.y };

            this.x += this.xSpeed;
            this.y += this.ySpeed;
            if (this.x > canvas.width - scale) {
                this.x = 0;
            }
            else if (this.y > canvas.height - scale) {
                this.y = 0;
            }
            else if (this.x < 0) {
                this.x = canvas.width;
            }
            if (this.y < 0) {
                this.y = canvas.height;
            }
        };

        this.changeDirection = function (direction) {
            switch (direction) {
                case "w":
                    if (this.ySpeed == 0) {
                        this.xSpeed = 0;
                        this.ySpeed = scale * -1;
                    }
                    break;
                case "a":
                    if (this.xSpeed == 0) {
                        this.xSpeed = scale * -1;
                        this.ySpeed = 0;
                    }
                    break;
                case "s":
                    if (this.ySpeed == 0) {
                        this.xSpeed = 0;
                        this.ySpeed = scale * 1;
                    }
                    break;
                case "d":
                    if (this.xSpeed == 0) {
                        this.xSpeed = scale * 1;
                        this.ySpeed = 0;
                    }
                    break;
            }
        }

    }
}
