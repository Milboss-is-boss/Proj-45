
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinOBJ = new Dustbin(1200,600)
	paperOBJ = new paper(200,400,70)
    groundObject = new Ground(width/2,670,width,20)

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
	Engine.run(engine);
	Render.run(render)
    
}


function draw() {
  background(230);
  rectMode(CENTER);
  dustbinOBJ.display()
  paperOBJ.display()
  groundObject.display()


  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperOBJ.body,paperOBJ.body.position,{x:145,y:-150})
	}
}



