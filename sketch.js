var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(300,300,80,50);
  movingrect.shapeColor="green";
}

function draw() {

  background(255,0,0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
    if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
      fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
    movingrect.shapeColor="black";
    fixedrect.shapeColor="black";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}