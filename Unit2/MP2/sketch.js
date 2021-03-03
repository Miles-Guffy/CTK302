let state = 0;
let f1;
let photo1;
let photo2;
let photo3;
let photo4;
let photo5;




function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  f1 = loadFont("revans.otf");
  photo1 = loadImage("IMG_4077.jpg");
  photo2 = loadImage("IMG_3982.jpg");
  photo3 = loadImage("IMG_0615.jpg");
  photo4 = loadImage("IMG_3779.jpg");
  photo5 = loadImage("IMG_4259.jpg");

  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);

}

function draw() {

  switch (state) {
    case 0:
      background('white');
      textSize(20);
      textFont(f1);
      text(" This story is about the time I went to volunteer \n at an orphanage in Haiti, my life has never been the same! ", 500, 100);
      image(photo1, width / 2, 400, 200, 200);
      break;

    case 1:
      background('grey');
      text(" We spent a week working with the children and other local groups. ", 100, 100);

      break;


case 2:
  background('blue');
text(" state 2", 100, 100);
for (let j = 0; j < 20; j++) {
  for (let i = 0; i < 20; i++) {
    triangle(i * 50 + 10, j * 50 + 10, 25, 5);
  }
}
break;

case 3:
  background('red');
text(" state 3", 100, 100);
for (let j = 0; j < 20; j++) {
  for (let i = 0; i < 20; i++) {
    ellipse(i * 50 + 10, j * 50 + 10, 25, 5);
  }
}

break;

case 4:
  background('yellow');
text(" state 4", 100, 100);
for (let j = 0; j < 20; j++) {
  for (let i = 0; i < 20; i++) {
    rect(i * 5000 + 10, j * 500 + 10, 25, 50);
  }
}
break;

case 5:
  background('brown');
text(" state 5", 100, 100);
for (let j = 0; j < 20; j++) {
  for (let i = 0; i < 20; i++) {
    rect(i * 500 + 10, j * 10 + 10, 250, 5);
  }
}
break;
}

}

function mouseReleased() {
  state++;
  if (state > 5) {
    state = 0
  }
}
