var fixedRect, movingRect,gameobject1,gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(200,200,80,30);
  gameobject1.shapeColor ="green";
  gameobject1.debug=true;

  gameobject2 = createSprite(300,300,80,30);
  gameobject2.shapeColor ="green";
  gameobject2.debug=true;

  
}

function draw() {
  background(0,0,0);  

movingRect.x=mouseX;
movingRect.y=mouseY;

 if (isTouching(movingRect,gameobject2)){
   movingRect.shapeColor="red";
   gameobject2.shapeColor="red";
 }
 else{
   movingRect.shapeColor="green";
   gameobject2.shapeColor="green";
 }
  drawSprites();
}
