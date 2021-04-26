var bubbles = [];
let Coffee;
let Pet;
let Barn;
let City;
let Cup;
let Tea;







function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1CSTHg5Z-hdjMZo7OvZKbrZYIGm_bgVKh0uAThi-Ezbk'; // this is KEY of the URL from the sheet
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM';
  // https://docs.google.com/spreadsheets/d/1CSTHg5Z-hdjMZo7OvZKbrZYIGm_bgVKh0uAThi-Ezbk/edit?usp=sharing

  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff




  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  Coffee = loadImage("Coffee.png");
  Tea = loadImage("Tea.png");
  Barn = loadImage("Barn.png");
  City = loadImage("City.png");
  Cup = loadImage("Cup.png");
  Pet = loadImage("Pet.png");
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].drink, data[i].place, data[i].pet)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('#6896a3');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(mydrink, myplace, mypet) {
    this.pet = mypet;
    this.drink = mydrink;
    this.place = myplace;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(5), 0);

  }



  display() {
    if (this.drink == "Coffee") {
      image(Coffee, this.pos.x, this.pos.y, 50, 50);
    } else if (this.drink == "Tea") {
      image(Tea, this.pos.x, this.pos.y, 50, 50);
    } else {
      image(Cup, this.pos.x, this.pos.y, 50, 50);
    }


    //
    if (this.place == "Big City") {

      image(City, this.pos.x + 60, this.pos.y, 50, 50);
    } else {
      image(Barn, this.pos.x + 60, this.pos.y, 50, 50);
    }
    //
    // if (this.pet == "Pet") {

    image(Pet, this.pos.x - 60, this.pos.y, 50, 50);
    // }

    // ellipse(this.pos.x, this.pos.y, 60, 60);
    // text(this.drink, this.pos.x, this.pos.y - 20);
    text(this.pet, this.pos.x - 50, this.pos.y);
    // text(this.place, this.pos.x, this.pos.y + 20);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
  }
}
