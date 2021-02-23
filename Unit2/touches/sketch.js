let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("Alone", 5, 22) ;
      break ;

      case 1:
       text("Just me", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("I found a friend", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("And they have a friend", 5, 22) ;
            // put a picture here
      break ;


  }

}
