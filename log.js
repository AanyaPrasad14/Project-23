class log {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, height, width, options);
      this.width = width;
      this.height = height;

      Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
     rectMode(CENTER);
     fill("red");
     rect(pos.x, pos.y, this.height, this.width);
    }
  };
  