//Challenge 4 Cyprian Dove
//variable
let hu = 300;
let crmnt = 10;
let hu2 = hu - crmnt;
let hu3 = hu2 - crmnt;
let lgt = 90;
let crmnt2 = 5;
let lgt2 = lgt + crmnt2;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(100);
  addC();
  addBG();
}
function addC(x,y) {
   push();
  noStroke();
  fill(color("hsl(50, 80%, " + lgt + "%)"));
  //row1
  rect(100, 0, 50, 50);
  rect(150, 0, 50, 50);
  rect(200, 0, 50, 50);
  rect(250, 0, 50, 50);
  rect(300, 0, 50, 50);
  //row2
  lgt2 = lgt - crmnt2;
  fill(color("hsl(50, 80%, " + lgt2 + "%)"));
  rect(50, 50, 50, 50);
  rect(300, 50, 50, 50);
  //row3
  lgt2 = lgt2 - crmnt2;
  fill(color("hsl(50, 80%, " + lgt2 + "%)"));
  rect(50, 100, 50, 50);
  rect(300, 100, 50, 50);
  //row4
  lgt2 = lgt2 - crmnt2;
  fill(color("hsl(50, 80%, " + lgt2 + "%)"));
  rect(50, 150, 50, 50);
  //row5
  lgt2 = lgt2 - crmnt2;
  fill(color("hsl(50, 80%, " + lgt2 + "%)"));
  rect(50, 200, 50, 50);
  //row6
  lgt2 = lgt2 - crmnt2;
  rect(50, 250, 50, 50);
  //row7
  lgt2 = lgt2 - crmnt2;
  fill(color("hsl(50, 80%, " + lgt2 + "%)"));
  rect(50, 300, 50, 50);
  rect(300, 300, 50, 50);
  //row8
  lgt2 = lgt2 - crmnt2;
  fill(color("hsl(50, 80%, " + lgt2 + "%)"));
  rect(100, 350, 50, 50);
  rect(150, 350, 50, 50);
  rect(200, 350, 50, 50);
  rect(250, 350, 50, 50);
 pop();
}
function addBG(x,y) {
   push();
   //start of background
  //row 1
  fill(color("hsl(" + hu + ",80%,10%)"));
  rect(0, 0, 50, 50);
  rect(50, 0, 50, 50);
  rect(300, 0, 50, 50);
  rect(350, 0, 50, 50);
  //row 2
  hu2 = hu - crmnt;
  fill(color("hsl(" + hu2 + ",80%,20%)"));
  rect(0, 50, 50, 50);
  rect(100, 50, 50, 50);
  rect(150, 50, 50, 50);
  rect(200, 50, 50, 50);
  rect(250, 50, 50, 50);
  rect(350, 50, 50, 50);
  //row3
  hu3 = hu2 - crmnt;
  fill(color("hsl(" + hu3 + ",80%,30%)"));
  rect(0, 100, 50, 50);
  rect(100, 100, 50, 50);
  rect(150, 100, 50, 50);
  rect(200, 100, 50, 50);
  rect(250, 100, 50, 50);
  rect(350, 100, 50, 50);
  //row4
  hu3 = hu3 - crmnt;
  fill(color("hsl(" + hu3 + ",80%,40%)"));
  rect(0, 150, 50, 50);
  rect(100, 150, 50, 50);
  rect(150, 150, 50, 50);
  rect(200, 150, 50, 50);
  rect(250, 150, 50, 50);
  rect(300, 150, 50, 50);
  rect(350, 150, 50, 50);
  //row5
  hu3 = hu3 - crmnt;
  fill(color("hsl(" + hu3 + ",80%,50%)"));
  rect(0, 200, 50, 50);
  rect(100, 200, 50, 50);
  rect(150, 200, 50, 50);
  rect(200, 200, 50, 50);
  rect(250, 200, 50, 50);
  rect(300, 200, 50, 50);
  rect(350, 200, 50, 50);
  //row6
  hu3 = hu3 - crmnt;
  fill(color("hsl(" + hu3 + ",80%,60%)"));
  rect(0, 250, 50, 50);
  rect(100, 250, 50, 50);
  rect(150, 250, 50, 50);
  rect(200, 250, 50, 50);
  rect(250, 250, 50, 50);
  rect(300, 250, 50, 50);
  rect(350, 250, 50, 50);
  //row7
  hu3 = hu3 - crmnt;
  fill(color("hsl(" + hu3 + ",80%,70%)"));
  rect(0, 300, 50, 50);
  rect(100, 300, 50, 50);
  rect(150, 300, 50, 50);
  rect(200, 300, 50, 50);
  rect(250, 300, 50, 50);
  rect(350, 300, 50, 50);
  //row8
  hu3 = hu3 - crmnt;
  fill(color("hsl(" + hu3 + ",80%,80%)"));
  rect(0, 350, 50, 50);
  rect(50, 350, 50, 50);
  rect(300, 350, 50, 50);
  rect(350, 350, 50, 50);
  pop();
}
