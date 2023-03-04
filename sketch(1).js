function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(color("darkgreen"));
  noStroke();
  scale(2);
  translate(25,70);
  addShape();
}
function addShape(x,y){
  beginShape();
vertex(5, 8);
vertex(30, 5);
vertex(30, 20);
vertex(85, -5);
    vertex(150, 5);
vertex(85, 60);
  vertex(125, 60);
    vertex(85, 40);
vertex(105, 60);
  vertex(50, 60);
endShape(CLOSE);
}