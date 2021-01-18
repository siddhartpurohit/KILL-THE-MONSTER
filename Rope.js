class Rope{
    constructor(bodyA,pointB){
      var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.1,
          length:200
      }  
      this.pointB = pointB
      this.bodyA = bodyA
      this.rope = Constraint.create(options);
      World.add(world,this.rope);
    }
  }