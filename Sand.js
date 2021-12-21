class Sand{
    constructor(x,y){
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        this.body=Bodies.circle(x,y,10,option);
        this.x = x;
        this.y = y;
        this.radius = 10;
        World.add(world,this.body);
        
        
        }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        rectMode(CENTER);
        fill("brown");            
        ellipse(this.x,this.y,this.radius,this.radius);
        pop();     
    }
}