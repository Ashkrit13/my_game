var player, playerImage,playerFlipImage;
var enemy1, enemyFlipImage,enemyGroup;
var wallImage, sideWallImage, wallGroup;
var lives = 3;
function preload(){
  playerImage = loadImage("Images/Boy.png");
  playerFlipImage = loadImage("Images/Boy - Copy.png");
  enemyFlipImage = loadImage("Images/theif - Copy.png");
  //wallImage = loadImage("Images/wall.jpg");
  //sideWallImage = loadImage("Images/sideWall.jpg");

}

function setup() {
  createCanvas(800,800);
  player = createSprite(50, 750, 50, 50);
  player.addImage(playerImage);
  player.scale = 0.1;

  enemy1 = new Enemy(400,400,70,70);
  enemy2 = new Enemy(450,150,70,70);
  enemy3 = new Enemy(200,50,70,70);
  enemy4 = new Enemy(750,750,70,70);
  


  wall1 = new Wall(110,700,225,20);
  wall2 = new Wall(400,700,225,20);
  wall3 = new Wall(690,700,225,20);
  wall4 = new Wall(585,650,20,100);
  wall5 = new Wall(295,650,20,100);
  wall6 = new Wall(210,650,20,100);
  wall7 = new Wall(500,650,20,100);
  wall8 = new Wall(110,600,225,20);
  wall9 = new Wall(400,600,225,20);
  wall10 = new Wall(690,600,225,20);
  wall11 = new Wall(150,500,150,20);
  wall12 = new Wall(90,300,20,215);
  wall13 = new Wall(210,400,20,200);
  wall14 = new Wall(315,300,225,20);
  wall15 = new Wall(300,200,400,20);
  wall16 = new Wall(300,100,400,20);
  wall17 = new Wall(295,550,20,100);
  wall18 = new Wall(255,500,100,20);
  wall19 = new Wall(500,550,20,100);
  wall20 = new Wall(585,500,190,20);
  wall21 = new Wall(675,450,20,100);
  wall22 = new Wall(585,400,190,20);
  wall23 = new Wall(500,315,15,450);
  wall24 = new Wall(50,100,100,20);
  wall25 = new Wall(585,225,20,100);
  wall26 = new Wall(695,275,225,20);
  wall27 = new Wall(700,175,225,20);
  wall28 = new Wall(10,755,20,100);
  wall29 = new Wall(790,755,20,100);
}

function draw() {
  background("black");
  fill("red");
  textSize(24);
  textFont("Times New Roman");
  text("<-----EXIT",40,50);

  fill("green");
  textSize(20);
  text("Lives: "+lives,730,20);

  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  if(keyDown("LEFT_ARROW")){
    player.x -= 3;
    player.addImage(playerFlipImage);
  }
  if(keyDown("RIGHT_ARROW")){
    player.x += 3;
    player.addImage(playerImage);
  }
  if(keyDown("UP_ARROW")){
    player.y -= 3;
  }
  if(keyDown("DOWN_ARROW")){
    player.y += 3;
  }
  enemy1.x -= 5;
  enemy2.x -= 5;
  enemy3.x += 5;
  enemy4.x -= 5;
  if(enemy1.x<300){
    enemy1.x = 300;
    enemy1.x += 5;
  }
  //Collide();
  drawSprites();
}
/*function Collide(){
  if(player.isTouching(enemy1) || player.isTouching(enemy2) || player.isTouching(enemy3) || player.isTouching(enemy4)){
    lives -= 1;
  }
}
*/