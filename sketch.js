const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var isTheKeyDown = "nope";
var backs;
var engine, world;
var ground1;
var dustbin1, paper1;
var emoji;
var all;
var ball;
var bally;
var paper1;
function preload() {
 // backs = loadSound("sound.mp3.mp3");
  emoji = loadImage("guitar.gif");
  all = loadImage("lol.png")
}

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  var l = createSprite(100, 100);
  l.addImage("image", emoji);

  //Create the Bodies Here.
  //Sorry i created them in new files :P

  //These are just the copy from the blueprint
  paper1 = new paper(150, 320, 25);
  dustbin1 = new dustbin(850, 325, 15, 100);
  dustbin2 = new dustbin(925, 380, 150, 15);
  dustbin3 = new dustbin(1000, 325, 15, 100);
  ground1 = new ground(600, 392.5, 1200, 15);
  

  


  
}

function draw() {
  background(0);

  Engine.update(engine);

  //backs.loop();

  if (
    paper1.x<=1000&&
    paper1.x>=850&&
    paper1.y>=280&&
    paper1.y<=380
  ) {
    fill(rgb(random(1, 255), random(1, 255), random(1, 255)));
    noStroke();
    rect(800, 325, 15, 100);
    rect(900, 380, 200, 15);
    rect(1000, 325, 15, 100);
    console.log("ok")
  } else {
    fill(rgb(30, 255, 60));
    console.log(":(")
    noStroke();}
  

 

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

 


  

  if (keyWentDown("r")) {
    paper1 = new paper(150, 320, 25);
    isTheKeyDown = "nope";
  }

  
}
function keyPressed() {
  if (isTheKeyDown === "nope") {
    if (keyCode === UP_ARROW) {
      Body.applyForce(paper1.body, paper1.body.position, { x: 115, y: -115 });
      isTheKeyDown = "boiUpressedTheKey?";
    }
  }
 
  }

