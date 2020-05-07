function Circle(x, y, r){
  var options={
    //restitution:1,
    friction:0,
    isStatic:true
    }
  this.body=Bodies.circle(x, y, r,options);
  World.add(world,this.body);
  this.r=r;
  this.isOffscreen=function(){
    var pos=this.body.position;
    return(pos.y>height+100);
  }
  this.removeFromWorld=function(){
    World.remove(world,this.body);
  }

  this.show=function(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill("red");
    ellipse(0,0,this.r*2);
    pop();
  }
}
