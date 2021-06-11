class Paper{

constructor(x,y,radius){
var options={
  'restitution':0.06,
'friction':0.001,
'density':1.28

}


this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)
this.image=loadImage("paper.png")




}

display(){


var pos =this.body.position;
var angle=this.body.angle;
rotate(angle)

imageMode(CENTER)
image(this.image,pos.x,pos.y,30,30)

}


}





  