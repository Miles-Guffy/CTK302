// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var h
var t

function setup() {
  createCanvas(500, 500);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Chatham,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=0ea6590ea8e650de4cee1223db31833d'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
h = weather.main.humidity;
t = weather.main.temp;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("Humidity is " + h, 20, 60);
      text(" Temp is " + t, 20, 80);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      ellipse(x, 300, 50, 50);

      fill ("red") ;
      rect(width-50, height -10, 30, -t) ;

      // move the cloud's x position
      x = x + windspeed/4;
      if (x > width) x = 0;

      break;

  }
}
