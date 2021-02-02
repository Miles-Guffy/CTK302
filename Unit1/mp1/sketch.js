function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {



  background(69, 105, 102);
  noStroke();

  angleMode(DEGREES);

  arc(width / 2, height / 2, 150, 150, 200, 150, PIE);
  fill("back")

  square(359, 256, 70, 70, 15, 10, 5);
  ellipse(354, 156, 25, 25);
  ellipse(367, 323, 90, 90);
  rect(347, 350, 20, 100);
  rect(383, 350, 20, 200);


  circle(286, 192, 10)
  circle(263, 193, 10)
  circle(277, 204, 30)
  fill(88, 150, 63)
  let s = 'This is Linus and he has a secret . . .';
  fill(500);
  text(s, 50,50, 446, 60 )
  textSize(25)


  if (mouseIsPressed) {

    background(24, 36, 35);
    angleMode(DEGREES);

    arc(width / 2, height / 2, 150, 150, 200, 150, PIE);
    fill("green")


    square(359, 256, 70, 70, 15, 10, 5);


    ellipse(354, 156, 25, 25);
    ellipse(367, 323, 90, 90);
    rect(347, 350, 20, 100);
    rect(383, 350, 20, 200);
    fill(224, 159, 218)
    rect(254, 201, 100, 20);

    circle(286, 192, 10)
    circle(263, 193, 10)
    circle(277, 204, 30)
    fill(88, 150, 63)

     let s = 'This is Linus and he has a secret at night he turns into a lizardboy!';
  fill(500);
  text(s, 50,50, 446, 60 )
  textSize(25)



  }






  fill('black');
  text(mouseX + ", " + mouseY, 30, 30);
}

function mouseReleased() {
  fill('black');
  print(mouseX + ", " + mouseY);
}
