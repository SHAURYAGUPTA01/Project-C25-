class PlayerArrow {
    constructor(x, y, width, height,archerAngle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.trajectory = []
      this.r = 40;
      this.width = width;
      this.height = height;
      this.velocity = p5.Vector.fromAngle(archerAngle);
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      
      World.add(world, this.body);
    }
    shoot(archerAngle) {
   
      this.velocity.mult(100);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: this.velocity.x, y: this.velocity.y });
    }

    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      image(this.image,pos.x ,pos.y , this.width, this.height);
      if (this.body.velocity.x > 0 && this.body.position.x > 400) {
       var position = [this.body.position.x, this.body.position.y];
       this.trajectory.push(position);
      }

       for (var i = 0; i < this.trajectory.length; i++) {
       fill("white"); 
       ellipse(this.trajectory[i][0], this.trajectory[i][1], 15, 15);
       }
  }
   
}