let state = 0;
let song1, song2, song3;


function preload() {
  song1 = loadSound("Hill.mp3");
  song2 = loadSound("Color.mp3");
  song3 = loadSound("Fireworks.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}



function setup() {
  createCanvas(500, 500);




}

function draw() {

  background(100);
  switch (state) {

    case 0:
      background('yellow');
      text("1", 100, 100);
      song1.play();
      state = 1;
      break;

    case 1:
      background('red');
      text("Listen to song 1", 100, 100);
      break;

    case 2:
      background('blue');
      text("Listen to song 2", 100, 100);
      song2.play();
      state = 3;

      break;
    case 3:
      background('red');
      text("Listen to song 3", 100, 100);
      break;

    case 4:
      background('blue');
      text("Listen to song 3", 100, 100);
      song3.play();
      state = 5;

    case 5:
      background('red');
      text("Listen to song 3", 100, 100);
      break;
  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();

  state++;
  if (state > 5) state = 0;
}
