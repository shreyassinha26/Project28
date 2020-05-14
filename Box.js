class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    Matter.Body.setStatic(this.body ,true);
    
  }
  display(){
    fill(255);
    super.display();
  }
};
