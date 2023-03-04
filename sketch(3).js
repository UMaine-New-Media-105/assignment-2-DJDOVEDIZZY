function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(color("hsl(100, 50%, 35%)"));
  noStroke();
  addBG();
  addTop();
  addBottom();
    addBush();
  addDove();
  addLeaf();
}
function addBG(x,y){
  push();
   fill(color("hsl(0, 50%, 35%)"));
  rect(200,0,200,400);
   fill(color("hsl(100, 50%, 95%)"));
  rect(200,0,400,400);
  pop();
}
function addTapestry(x,y){
  push();
  fill(color("hsl(20, 70%, 95%)"));
  ellipse(25,0,50,50);
  fill(color("hsl(70, 40%, 15%)"));
  ellipse(25,-8,50,55);
  pop();
}
function addTopestry(x,y){
  push();
  fill(color("hsl(20, 70%, 95%)"));
  ellipse(25,265,50,50);
  fill(color("hsl(70, 40%, 15%)"));
  ellipse(25,274,50,55);
  pop();
}
function addTop(x,y){
  push();
  scale(1.5);
  addTapestry();
  translate(50,0);
  addTapestry();
   translate(50,0);
  addTapestry();
   translate(50,0);
  addTapestry();
   translate(50,0);
  addTapestry();
   translate(50,0);
  addTapestry();
   translate(50,0);
  addTapestry();
   translate(50,0);
  addTapestry();
  pop();
}
function addBottom(x,y){
  push();
  scale(1.5);
    addTopestry();
  translate(50,0);
  addTopestry();
   translate(50,0);
  addTopestry();
   translate(50,0);
  addTopestry();
   translate(50,0);
  addTopestry();
   translate(50,0);
  addTopestry();
   translate(50,0);
  addTopestry();
   translate(50,0);
  addTopestry();
  pop();
}
function addDove(x,y){
  push();
  scale(2.6);
  translate(30,50);
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
  pop();
}
function addNote(x,y){
  push();
  pop();
}
function addBush (x,y){
   push();
  scale(1.3);
  translate(60,105);
  fill("hsl(70, 40%, 15%)")
   beginShape();
vertex(0, 50);
  vertex(10,10);
  vertex(20,15);
  vertex(-20, 30);
  vertex(10,10);
  vertex(20,15);
  vertex(20, 50);
  vertex(10,10);
  vertex(20,15);
endShape(CLOSE);
  pop();
}
function addLeaf(x,y){
      push();
  scale(1.3);
  translate(60,105);
  fill("hsl(70, 70%, 70%)")
   beginShape();
vertex(50, 40);
  vertex(40,20);
  vertex(30,15);
  vertex(10,10);
endShape(CLOSE);
  pop();
 }