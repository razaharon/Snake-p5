class Player {

    x = 0;
    y = 0;
    total = 0;
    tail = [];

    constructor() {
        this.x = GAME_WIDTH/2;
        this.y = GAME_HEIGHT/2;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    // Determine apple collusion
    eat(apple) {
        let d = dist(this.x, this.y, apple.x, apple.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }
    // Reset player state
    die() {
        this.total = 0;
        this.tail = []
        this.x = GAME_WIDTH/2;
        this.y = GAME_HEIGHT/2;
        this.xSpeed = 0;
        this.ySpeed = 0;
        frameRate(this.total+10);
    }
    // Determine death collusion
    death() {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let distance = dist(this.x, this.y, pos.x, pos.y);
            if (distance < 1) {
                this.die()
            }
        }
    }
    // Update player location
    update() {
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;

        this.x = constrain(this.x, 0, GAME_WIDTH - scl);
        this.y = constrain(this.y, 0, GAME_HEIGHT - scl);


    }
    // Draw player location
    show() {
        fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        for (let i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }
    // Apply movement direction
    dir(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}