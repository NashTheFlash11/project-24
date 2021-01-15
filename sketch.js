
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// function preload()
// {

// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	paper = new Paper(200, 650, 20);
	
	dustbinBottom = new Dustbin(600, 650, 200, 20);
	dustbinRightSide = new Dustbin(700, 610, 20, 100);
	dustbinLeftSide = new Dustbin(500, 610, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();

  paper.display();

  dustbinBottom.display();
  dustbinLeftSide.display();
  dustbinRightSide.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85});
	}
}


