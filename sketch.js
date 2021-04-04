const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sound;
var backgroundImage;
var santaImage;
var santa;
var snow = [];
var maximumSnow = 10;

function preload() {
  sound=loadSound("sound.mp3");
  backgroundImage = loadImage("snow2.jpg");
  santaImage = loadImage("unnamed.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight - 10);

  engine = Engine.create();
  world = engine.world;

  if (frameCount%300===0) {
    for(var i = 0; i < maximumSnow; i++){
       snow.push(new Dropsclass(random(0,width-10),random(0,700)));
       }
   }
  santa = createSprite(0, height - 175, 50, 50);
  santa.addImage(santaImage);
  santa.scale = 2;
  santa.setVelocity(3,-1)
  sound.play();
}

function draw() {
  Engine.update(engine);
  

  if(santa.x>width+30){
    santa.x=-50
    santa.y=height-175;
    santa.setVelocity(3,-1)
  }
  background(backgroundImage);
  drawSprites();

  for(var i = 0; i < maximumSnow; i++){
    snow[i].display();
    snow[i].update();
  }
}