let state = -1;
var mic;
var vol;
let timer = 0



function setup() {
  createCanvas(500, 500);
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  vol = (mic.getLevel()).toFixed(2);


  switch (state) {
    case -1:
      background(100);
      text("Please click to start", width / 2, height / 2)
      break;



    case 0:
      background("green");
      text("shhh!!!", width / 2, height / 2)
      if (vol > .08) {
        state = 1;
      }
      break;

    case 1:
      background('blue');
      text("Quiet Down!!", width / 2, height / 2)
      timer++ > (3 * 60)
        state = 0;
        timer = 0;
      }
      break;

  }
}



function touchStarted() {
  getAudioCo
}

function mouseReleased() {
  if (state == -1) {
    state = 0
  }
}
