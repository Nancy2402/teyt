var fixedRect, movingRect;

var box1,box2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1=createSprite(300,100,50,50);
  box1.shapeColor="green";
  box2=createSprite(600,100,50,50);
  box2.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
isTouching(movingRect,box2)
  
  drawSprites();
}

