var ball_list;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
  ball_list = new Balls();
}

function draw() {
  background(0);
  ball_list.run();

} 

function mousePressed(){
  ball_list.addBall(new ball(createVector(mouseX, mouseY), 5));
}