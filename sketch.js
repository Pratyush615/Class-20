var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(1200,400,70,50);
  movingRect = createSprite(100,400,60,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "yellow";
  movingRect.velocityX = 3;
  fixedRect.velocityX = -3;
}


function draw() {
  background(0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x- movingRect.x <= movingRect.width/2 + fixedRect.width/2) {
    
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    
  }
  if(fixedRect.y- movingRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y- fixedRect.y <= movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  /*else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "yellow";
  }*/

  drawSprites();
}