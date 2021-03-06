class Bin{
    constructor(x,y,width,height,boolean){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.boolean = boolean;
        this.image = loadImage("bin.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //rectMode(CENTER);
        //fill("gray");
        //rect(pos.x,pos.y, this.width, this.height);
        imageMode(CENTER);
        if(this.boolean){
            image(this.image,pos.x,pos.y-105,this.width,250);
        }
    }
}