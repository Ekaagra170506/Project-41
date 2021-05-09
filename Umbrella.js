class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic :true
      }
      this.body = Bodies.circle(x,y,100,options);
      this.x = x;
      this.y = y;
      this.radius=100;
      this.image = loadImage("images/Walking Frame/walking_1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,300,300);
      pop();
    }
  };