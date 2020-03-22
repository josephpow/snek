const canvas = document.querySelector(".canvas") //Selecting the canvas
const ctx = canvas.getContext("2d") //Grab the context of canvas
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
(function setup() {
    snake = new Snake();
    apple = new Apple();
    apple.dropApple();
    snake.draw();
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        apple.draw();
        if (snake.checkDead()) {
            kill();
            apple.clear();
            return;
        }
        snake.update();
        snake.draw();
        snake.checkApple(apple);
    }, 100);
}());

kill = function () {
    console.log("U dead homie...");
};

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Key', '');
    snake.changeDirection(direction);
}))