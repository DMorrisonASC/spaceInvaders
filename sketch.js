let player;
let enemy
function setup(){
    createCanvas(500, 600);
    player = new Ship("red",0,250,500);
    enemy = new Ship("purple",0,200,100);
}


function draw(){
    background(51)

    // movePlayer();
    
    player.createShip();
    player.move()
    enemy.createShip();
    enemy.randomMove(); 
    // // EnemyShip
    // const EnemyShip = new 

}


                                            
console.log()
class Ship {

    constructor(color = 'purple', shape, positionX, positionY, sizeWidth = 50, sizeHeight = 25){
        this.color = color;
        this.shape = shape;
        this.positionX = positionX;
        this.positionY = positionY;
        this.sizeWidth = sizeWidth;
        this.sizeHeight = sizeHeight;
        this.directionX = 5;
        
    }
    createShip(){
        fill(this.color)
        rect(this.positionX, this.positionY, this.sizeWidth, this.sizeHeight);
    }
    move(){
        if (keyIsDown(RIGHT_ARROW)){
           this.positionX += 5;
           console.log(this.positionX); 
        }
            else if(keyIsDown(LEFT_ARROW)){
            this.positionX -= 5;
            console.log(this.positionX);
        }
    }
    shoot(){
        if (keyIsPressed(SPACE_BAR)){
            console.log("Shoot!");
        }

    }
    randomMove(){
        
        this.positionX = this.positionX + this.directionX;
        if (this.positionX <= 10) {
            this.directionX = 1;
            console.log(this.positionX);
        }
        else if (this.positionX >= 440){
            this.directionX = -1;
            console.log(this.positionX);

        }
        
    }
}
// this.body.setVelocity(0, 0);
// this.body.collisionType = me.collision.types.ENEMY_OBJECT;

// update : function (time) {
//     this._super(me.Entity, "update", [time]);

//     this.body.update();

//     return true;
// }
// onCollision : function (res, other) {
//     if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
//         me.game.world.removeChild(this);
//         game.playScreen.enemyManager.removeChild(other);
//         return false;
//     }
// }
// if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
//     me.game.world.removeChild(this);
//     game.playScreen.enemyManager.removeChild(other);
// }

