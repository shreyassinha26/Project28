class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        
        
        World.add(world, this.body);
        Matter.Body.setStatic(this.body , true);
      }
      display(){
        fill(255);
        
        
        
        ellipse(this.body.position.x , this.body.position.y , 2*this.radius , 2*this.radius);
        
      }
      
}