class Stone{
    constructor(x,y){
        var option={
            'restitution' : 0.5,
            'friction': 0.5,
            'density': 3
        }
        this.body=Bodies.rectangle(x,y,90,90,option);
        World.add(world,this.body);
        
        this.width=90;
        this.height=90;
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();     
    }
}