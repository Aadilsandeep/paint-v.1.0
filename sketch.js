let Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies;

var balls=[];
var ball=[];
var ballss=[];



function setup(){
  strokeWeight(5);
  stroke(0);
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;


  
}
function mouseDragged(){
  balls.push(new Circle(mouseX,mouseY,5,5));
  ball.push(new Circle(mouseX,mouseY,5,5));
  ballss.push(new Circle(mouseX,mouseY,5,5));


}
function draw(){
  background("blue");
Engine.update(engine);

  for(var i=1; i < balls.length; i++){
    balls[i].show();
  }
  for(var i=1; i < ball.length; i++){
    ball[i].show();
  }
  for(var i=1; i < ballss.length; i++){
    ballss[i].show();
  }
  fill(255);
  textSize(25);
  text("Drag the mouse slowly to see the best performance",50,50);
  text("TRY  TO COLOR IN SIDE THIS BOX",150,278);
  
  
  fill("red")
  noStroke();
  textSize(20);
  text("here i am",310,200);


fill(0);
rectMode(CENTER);
rect(300,200,10,100);
rect(400,200,10,100);
rect(350,150,100,10);
rect(350,250,100,10);

  }