let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
      background('silver');
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;


    case 1:
      background('black');
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:

      background('gold');
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
        break;
      }
  }
}
