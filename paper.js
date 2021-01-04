class paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0,
            'density':1.2,
            'friction-air':0.2,
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var pos=this.body.position;
        push();
        fill("pink");
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        var a = createSprite(pos.x,pos.y,30,30)
        a.addImage("D",all)
        pop();
    }
}