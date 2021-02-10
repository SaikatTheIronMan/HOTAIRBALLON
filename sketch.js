var balloon;
function preload(){
  bgImage = loadImage("b1.png");
  balloonanim = loadAnimation("b2.png","b3.png","b4.png");
}
function setup() {
  canvas = createCanvas(500,500);
  
}

function draw() {
  background(bgImage);  
  balloon = createSprite(100,100);
  balloon.addAnimation("hotairballoon",balloonanim);
  balloon.scale=0.5;


  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  if(keyDown(UP_ARROW)){
    balloon.x=balloon.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.x=balloon.y+10;
  }
  drawSprites();
}