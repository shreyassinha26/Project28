const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2 , box3;
var ground;
var ball, launcher;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height-10,1200,20);
    ball = new Ball(250 , 400 , 20);
    box1 = new Box(1100 ,440 , 10 , 300 );
    box2 = new Box(900 , 440 , 10 , 300);
    box3 = new Box(1000 , 585 , 200 , 10);
    launcher = new Launcher(ball.body,{x:300 , y:400});
}

function draw(){
    background(0 , 255 , 0);
    Engine.update(engine);
    strokeWeight(0);
    ball.display();
    ground.display();
    
    box3.display();
    box1.display();   
    box2.display();
    launcher.display(); 
    
    
}
function mouseDragged(){
    if(ball.body.position.x<275 || mouseX<275){
        Matter.Body.setPosition(ball.body , {x : mouseX , y:mouseY});
    }
    
    
}

function mouseReleased(){
    Matter.Body.setStatic( ball.body , false);
    
   
}

