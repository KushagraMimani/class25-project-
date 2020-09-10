
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var ground, box1, box2, box3, box4;
var paper; 

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box2 = new Box(1470,520);
	ground = new Ground(800,height,1600,20)
	paper = new Paper(50,400,40);

	box1 = new Box(1580, 520, 10,300);
	box3 = new Box(1350,520, 10, 300);
	box4 = new Box(1460,687, 250, 10);

	//var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
	  background("lightGrey");
	  rectMode(CENTER);
  
	
	ground.display();
	paper.display();
	box2.display();

 	drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paper.body, paper.body.position,{x:90, y:-110});
	}
}


