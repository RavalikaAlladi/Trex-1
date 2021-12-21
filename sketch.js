const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var hammer,stone,rubber;
var sand,iron;

function preload(){
	
}

function setup() {
	createCanvas(800, 700); 


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,30);
	hammer = new Hammer(100,200);
  stone = new Stone(180,365);
	rubber = new Rubber(56,46);
  iron = new Iron(200,365);
  sand = new Sand(200,200);
  sand2 = new Sand(300, 200);
	Engine.run(engine);
  
}


function draw() {
 
  background("skyblue");
  Engine.update(engine);
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand.display();
  sand2.display();

 
}



