class Paper {
    constructor(x,y,radius){
        

    var options ={
        restitution:0.8,
        friction:1,
        density:1

    }
    this.body=Matter.Bodies.circle(x,y,radius,options);
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.width=width;
    this.height=height;
    World.add(world,this.body);

    
}
display(){
    push()
    translate(this.x,this.y);
    ellipse(0, 0,  this.radius, this.radius );
 pop()
}
}