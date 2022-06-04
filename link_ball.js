class linkball extends ball{
  constructor(initloc, mass, link, name){
    super(initloc, mass);
    this.link = link;
    this.name = name;
  }
  
  openLink(){
    window.open(this.link);
  }

  display(){
    noStroke();
    var velmod = sqrt(300*this.vel.mag());
    var c = color(100-velmod,100,85);
    fill(c);
    circle(this.loc.x, this.loc.y, this.r);
  }
  
}