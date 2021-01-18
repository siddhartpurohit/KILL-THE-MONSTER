// making the ground class
class Ground2
{
  // making the constructor of the body
  constructor(x,y,w,h) 
  {
    //giving the options to the body
    var options = 
    {
      isStatic: true,
      setStatic:true
    }
      //making the body
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      fill("red");
      //adding the body to the world
      World.add(world, this.body);
  }
}