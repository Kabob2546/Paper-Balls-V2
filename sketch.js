
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bin1, bin2, bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(150,400,25);
	bin1 = new Bin(550,575,20,250);
	bin2 = new Bin(750,575,20,250);
	bin3 = new Bin(650,680,200,20,true);
	ground = new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Body.applyForce(ball.body,ball.body.position,{x:85,y:-125});
	   
	 }
   }

