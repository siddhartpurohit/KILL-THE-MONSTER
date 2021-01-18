class Block {
    constructor(x, y, width, height) {
      var options = {
          restitution:0,
        friction:1.2,
          density:20,
        
      }  
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display(){
        var angle = this.body.angle;
       var pos = this.body.position;
    
     push();
      
     //rotate(angle);
      strokeWeight(2);
      stroke("black");
      fill("green");
      //rotate(angle)
      rectMode(CENTER);
      rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
  
    }