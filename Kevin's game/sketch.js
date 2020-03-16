var canvas, backgroundImage;
var poorMan;
var money;
var greedyMan;
var bar;
var poorManImg, greedyManImg;
function preload(){
poorManImg=loadImage("images/poor.png");
greedyManImg=loadImage("images/rich person.jpeg");

}

function setup(){
  canvas = createCanvas( 900, 700);
  poorMan=createSprite(450,620,30,60);
  bar=createSprite(0,10,45,10);
  poorMan.addImage(poorManImg);
  poorMan.scale=0.2;
}


function draw(){
  background(0,0,0);
   bar.shapeColor="red";

  drawSprites();
}
