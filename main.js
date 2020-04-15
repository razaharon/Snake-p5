// Declare global variables
let player, apple;
let scl = 20;
// Declare canvas size
const GAME_HEIGHT = 600;
const GAME_WIDTH = 1000;
// p5 Setup function to initiate the canvas with data
function setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    player = new Player();
    apple = new Apple(GAME_HEIGHT, GAME_WIDTH);
    frameRate(player.total+10);
    textSize(36);
    textAlign(CENTER, CENTER);
}
// p5 Draw function continuesly executes until program stops
function draw() {
    background(42);
    fill(100);
    text('Score: '+player.total, GAME_WIDTH/2, 30);
    player.update();
    player.show();
    apple.show();
    if (player.eat(apple)) {
        apple.newLocation(GAME_HEIGHT, GAME_WIDTH);
        frameRate(player.total+10);
    };
    player.death();
    if (player.x < 0 || player.x > GAME_WIDTH || player.y < 0 || player.y > GAME_HEIGHT) {
        player.die();
    }
}
// Handle user input
function keyPressed() {
    if (keyCode === UP_ARROW) {
        if(player.ySpeed>0){
            return;
        }
        player.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        if(player.ySpeed<0){
            return;
        }
        player.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        if(player.xSpeed<0){
            return;
        }
        player.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        if(player.xSpeed>0){
            return;
        }
        player.dir(-1, 0);
    } else if(keyCode === ENTER){
        player.total++;
        frameRate(player.total+10);
    } else{
        player.dir(0, 0);
    };

}
