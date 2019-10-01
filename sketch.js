/**
 * TODO
 * Make arrays for the enemy ships
 * make arrays for the projectiles
 * [] < -- push in enemy ships
 * [] <-- push in projectiles when they press the button
 * in draw constantly draw them (creteship)
 * in draw constantly move them (move
 * to apply somthing to all the ships or the projectiles you use a for loop that goes through the entire array)
 */

// creates canvas
function setup() {
  createCanvas(500, 600);
  player = new Player("red", 250, 500);
  enemy = new EnemyShip("purple", 200, 100, 50, 25);
  projectile = new projectile("white", 100, 100, 50, 25);
}

function draw() {
  // color of background
  background(51);
  // movePlayer();
  player.createShip();
  player.move();
  // player.shoot();
  enemy.createShip();
  enemy.randomMove();

  projectile.createProjectile();
  projectile.shoot();
  // this.positionY = this.positionY + 1;
}

console.log();
class Player {
  constructor(color, positionX, positionY, sizeWidth = 50, sizeHeight = 25) {
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.sizeWidth = sizeWidth;
    this.sizeHeight = sizeHeight;
    // default speed
    this.directionX = 5;
    this.directionY = -1;
  }
  // create ship with deflaut properties
  createShip() {
    fill(this.color);
    rect(this.positionX, this.positionY, this.sizeWidth, this.sizeHeight);
  }
  // moves ship if right or left is held down
  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.positionX += 5;
      // Sets barrier for player on right side
      if (this.positionX == 450) {
        this.positionX += -5;

      } else {

      }

    } else if (keyIsDown(LEFT_ARROW)) {
      this.positionX += -5;
      // Sets barrier for player on left side
      if (this.positionX == 0) {
        this.positionX += 5;
      } else {

      }
    }

  }
}

class EnemyShip {
  constructor(color, positionX, positionY, sizeWidth, sizeHeight) {
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.sizeWidth = sizeWidth;
    this.sizeHeight = sizeHeight;
    // default speed
    this.directionX = 5;
    this.directionY = -1;
  }
  // create  Enemy ship with default properties
  createShip() {
    fill(this.color);
    rect(this.positionX, this.positionY, this.sizeWidth, this.sizeHeight);
    let maxEnemies = 6;
    for (let i = 0; i < maxEnemies; i++) {
      // const element = array[i];
      fill(this.color);
      rect(this.positionX, this.positionY, this.sizeWidth, this.sizeHeight);
    }
  }
  // moves enemyShip
  randomMove() {
    this.positionX = this.positionX + this.directionX;
    if (this.positionX <= 10) {
      this.directionX = 5;
    } else if (this.positionX >= 440) {
      this.directionX = -5;
    }
  }
}
class projectile {
  constructor(color, posX, posY, sizeWidth, sizeHeight) {
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.sizeWidth = sizeWidth;
    this.sizeHeight = sizeHeight;
    // default speed
    this.directionX = 5;
    this.directionY = -1;
  }
  createProjectile() {
    // fill(this.color);
    // rect(this.posX, this.positionY, this.sizeWidth, this.sizeHeight);
  }

  shoot() {
    // this.positionY = this.positionY + this.directionY;
    if (keyIsDown(UP_ARROW)) {
      fill(this.color);
      rect(this.posX, this.posY, this.sizeWidth, this.sizeHeight);

    }
  }
}
