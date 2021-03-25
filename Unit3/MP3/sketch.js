let cars = [];
let maxCars = 5;
let maxTimer = 5 * 60;
let timer = 0;
let frogPos;
let state = 0;
let photo1;
let photo2;
let photo3;
let photo4;
let photo5;
let f1;




function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);
  photo1 = loadImage('background.jpg');
  photo2 = loadImage('camera.jpg');
  photo3 = loadImage('film.jpg');
  photo4 = loadImage('winner.jpg');
  photo5 = loadImage('boca.jpg');

  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  // Spawn an object
  f1 = loadFont("zefrave.ttf");


  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);

}

function draw() {

  switch (state) {
    case 0:
      // background("black");
      image(photo1, width / 2, height / 2);
      fill('red');
      textFont(f1, 25);
      text("Click to play shutterbug!",width/2, height/2);
      break;

    case 1:
      image(photo5, width / 2, height / 2);
      game();
      timer++;

      if (timer > maxTimer) {
        timer = 0;
        state = 3; // go to lose state
      }
      break;

    case 2: //win
      // background("black");
      image(photo4, width/2, height/2);
      fill('white');
      textFont(f1,32);
      text("Winner Winner!, click", width/2, height/2);
      break;

    case 3: //lose
      background("black");
      fill('white');
      textFont(f1, 75);
      text("Fail!, click",width/2, height/2);
      break;




  }
}


// function resetTheGame() {
//   cars = [];
//   for (let i = 0; i < maxCars)
// }

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // they won and clicked to restart
      resetTheGame();
      state = 0;
      break;

    case 3: // they lost and clicked to restart
      resetTheGame();
      state = 0;
      break;



  }

}


function resetTheGame() {
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}



function game() {
image(photo5, width / 2, height / 2);


  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }


  // here is my frog
  checkForKeys();
  // image('camera.jpg');
  image(photo2, frogPos.x, frogPos.y, 75, 75);
}



function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 8;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 8;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 8;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 8;

  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x > height) frogPos.x = 0;
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.size = random(50, 100);
  }

  // methods

  display() {
    // image('camera.jpg');
    image(photo3,this.pos.x, this.pos.y, this.size, 25);
    // textSize(this.size);
    // text("WOOHOO", this.pos.x, this.pos.y);
    // image()
  }


  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
