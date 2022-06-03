class ball{
  constructor(init_loc, m){
    this.loc = init_loc;
    this.mass = m;
    this.vel = createVector(0,0);
    this.acc = createVector(0.0,0.0);
    this.r = 5*m;
    
  }
  
  applyForce(externalF){
    var extF = externalF.copy();
    extF.mult(1/this.mass);
    this.acc.add(extF);    
  }
  
  allForces(balls){
    for (var other of balls){
      var d = dist(other.loc.x, other.loc.y, this.loc.x, this.loc.y);
      
      if (d>0){
        var diff = p5.Vector.sub(this.loc, other.loc);
        diff.normalize();
        var e = 0.01;
        var s = 100.0;
        var lj = 24*e*(pow(s/d, 2) - pow(s/d, 1));
        diff.mult(lj);
        this.applyForce(diff);
      }
    }
  }
  
  friction(){
    var f = this.vel.copy();
    f.mult(-0.1);
    // this.acc.add(f.mult(1/this.mass));
    this.applyForce(f);
  }
  
  inside(x, y){
    if (dist(x, y, this.loc.x, this.loc.y) < r){
      return true;
    } else{
      return false;
    }
  }
  
  move(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);    
    this.acc.mult(0);
  }
  
  edges(){
    if ((this.loc.x > width) || (this.loc.x < 0)){
      this.vel.x = this.vel.x * -1; 
    }
    
    if ((this.loc.y > height) || (this.loc.y < 0)){
      this.vel.y = this.vel.y * -1; 
    }    
  }
  
  display(){
    noStroke();
    var velmod = sqrt(300*this.vel.mag());
    var c = color(50-velmod,100,85);
    fill(c);
    circle(this.loc.x, this.loc.y, this.r);
  }
  
}