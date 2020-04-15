class Apple {

    x = 0;
    y = 0;

    constructor(GAME_HEIGHT, GAME_WIDTH) {
        this.x = Math.floor(Math.random() * (GAME_WIDTH - scl) + scl);
        this.y = Math.floor(Math.random() * (GAME_HEIGHT - scl) + scl);
        this.x = this.x - (this.x % scl);
        this.y = this.y - (this.y % scl);
    }

    show() {
        fill(255, 0, 0);
        rect(this.x, this.y, 20, 20);
    }

    newLocation(GAME_HEIGHT, GAME_WIDTH) {
        this.x = Math.floor(Math.random() * (GAME_WIDTH - scl) + scl);
        this.y = Math.floor(Math.random() * (GAME_HEIGHT - scl) + scl);
        this.x = this.x - (this.x % scl);
        this.y = this.y - (this.y % scl);
    }

    checkCollusion(x, y) {
        if (x == this.x && y == this.y) {
            return true;
        }
    }
}