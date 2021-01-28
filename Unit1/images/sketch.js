let landscape1;
let landscape2;
let landscape3;




function setup() {
  createCanvas(800, 800);
  landscape1 = loadImage("assets/landscape1.jpg");
  landscape2 = loadImage("assets/landscape2.jpg");
  landscape3 = loadImage("assets/landscape3.jpg");

  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);



}

function draw() {
  background('white');
  image(landscape1, width / 2, 400, 200, 200)
  image(landscape2, width / 2, 200, 200, 200)
  image(landscape3, width / 2, 600, 200, 200)
}
