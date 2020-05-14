class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        
        
        World.add(world, this.body);
      }
      display(){
        fill(255);
        
        
        
        circle(this.body.position.x , this.body.position.y , 2*this.radius);
        
      }
      fly(){
        
        Matter.Body.setStatic( this.body , false);
      
      }
      changePosition(){
        if(this.body.position.x<275 || mouseX<275){
          Matter.Body.setPosition(this.body , {x : mouseX , y:mouseY});
      }
      }
}