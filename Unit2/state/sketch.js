let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('grey');
      text(" state 0", 100, 100);
      break;

    case 1:
      background('green');
      text(" state 1", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 50 + 10, j * 50 + 10, 25, 5);
        }
      }
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
