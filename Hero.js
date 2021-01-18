class Hero {
    constructor(x,y,r) {
      var options = {
          //isStatic: true,
         // setStatic:true,
          density:1,
          friction:1
      }
      this.body = Bodies.circle(x,y,(r)/2,options);
      this.r =r
      this.image =loadImage("Superhero-02.png");
     // this.body.debug =true
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
            imageMode(CENTER)
      fill(175,70,60);
      image(this.image,pos.x, pos.y,this.r,this.r);
      pop();
    }
  };
  