var ball_list;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  var test = new linkball(createVector(100,100), 5, "https://en.wikipedia.org/wiki/Physics", 'physics');
  ball_list = new Balls();
  ball_list.addBall(test);
}

function draw() {
  background(0);
  ball_list.run();

} 

function mousePressed(){
  ball_list.clickActions(mouseX, mouseY);
  // ball_list.addBall(new ball(createVector(mouseX, mouseY), 5));
}