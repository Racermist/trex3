var edges;
var trex ,trex_running;
var ground,ground_image;
var ig;
var test;
var cloud,cloud_image;
function preload(){
    trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png");
  cloud_image=loadImage("cloud.png");
}

function setup(){
    createCanvas(600,200)
    edges=createEdgeSprites();
    //create a trex sprite
  trex=createSprite(40,185,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
//create ground sprite
  ground=createSprite(200,185,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.addImage(ground_image);
  //creating ig
  ig=createSprite(200,195,400,10);
  ig.visible=false;
  
}

function draw(){
  test=Math.round(random(1,100));
  console.log(test);
  //add background
    background(0);
    //making trex jump.
    if(keyDown("space")&&trex.y>=100){
      trex.velocityY=-10;
    }
    //add gravity
    trex.velocityY=trex.velocityY+0.8;
    //making ground move.
    if(ground.x<40){
      ground.x=ground.width/2;
    }
    //making trex collide.
  trex.collide(ig);
 spawnCloud();
  drawSprites();
}
function spawnCloud(){
  if(frameCount%60===0){
  cloud=createSprite(600,30,35,10);
  cloud.velocityX=-4;
  cloud.y=Math.round(random(20,50))
  cloud.addImage(cloud_image);
 cloud.scale=0.8;
  trex.depth=cloud.depth;
  trex.depth=trex.depth+1
  }
}
