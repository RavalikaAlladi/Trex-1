class Hammer{
    constructor(x,y){
        var option={
            'restitution' : 2,
            'friction': 1,
            'density': 2
        }
        this.body=Bodies.rectangle(x,y,80,30,option);
        World.add(world,this.body);
        
        this.width=130;
        this.height=30;
}

    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        stroke("white");
        strokeWeight(2);            
        rect(0,0,this.width,this.height);
        pop();     
    }
}