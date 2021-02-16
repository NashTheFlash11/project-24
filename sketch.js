
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	paper = new Paper(125, 698, 20);
	  
	trashCanBottom = new Dustbin(625, 680, 115, 20);
	trashCanLeft = new Dustbin(558, 638, 20, 105);
	trashCanRight = new Dustbin(680, 638, 20, 105);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();

  paper.display();

  trashCanBottom.display();
  trashCanLeft.display();
  trashCanRight.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:60, y:-60});
	}
}


