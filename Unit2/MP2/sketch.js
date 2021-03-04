let state = 0;
let f1;
let photo1;
let photo2;
let photo3;
let photo4;
let photo5;
let timer = 0;




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
  timer++;
  if (timer > 10 * 60) {
    state++;
    timer = 0;

    if (state > 4) {
      state = 0;
    }
  }
  switch (state) {
    case 0:
      background('#8fc8c9');
      textSize(20);
      textFont(f1);
      fill("black")
      text(" This story is about the time I went to volunteer \n at an orphanage in Haiti, my life has never been the same! ", width / 2, 100);
      image(photo1, width / 2, 400, 400, 400);
      text("Click to start", width / 2, 650);
      break;

    case 1:
      background('#a63a3a');
      textSize(20);
      textFont(f1);
      fill("black")
      text(" We spent a week working with \n the children and other local humanitarian groups. ", width / 2, 100);
      image(photo2, width / 2, 400, 400, 400);

      break;


    case 2:
      background('#72c289');

      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill("black")
          ellipse(i * 50 + 25, j * 50 + 10, 25, 15);
          textSize(20);
          textFont(f1);
          fill("white")
          text(" I had the privilege spending time with \n the happiest kids in the world!  ",  width / 2, 100);
          image(photo5, width / 2, 400, 400, 400);

        }
      }
      break;

    case 3:
      background('grey');
      text("  ", 100, 100);
      fill("black");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          ellipse(i * 50 + 10, j * 50 + 10, 25, 5);
          image(photo4, width / 2, 400, 400, 400);
        }
      }
      // image ()
      break;

    case 4:
      background('#8da4a6');
      text(" I hope this encourges you to take a step out \n of your comfortzone and try somthing new \n I did and my life will never be the same!",width / 2, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 50 + 10, j * 200 + 10, 25, 50);
            image(photo3, width / 2, 400, 400, 400);
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
