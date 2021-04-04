class Dropsclass {
    constructor(x,y){
     var option = {
         friction:0.001,
         restitution:0.5
     }

     this.body=Bodies.rectangle(x,y,40,40,option);
     this.w=40;
     this.h=40;
     World.add(world,this.body)
     this.image=loadImage("snowball_PNG27.png")
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,width-10), y:random(-10,0)})
        }
    }
    display(){
        var pos=this.body.position
        fill("blue");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h)
       
    }
}
