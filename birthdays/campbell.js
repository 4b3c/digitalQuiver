let img;
var x = 20;
var y = 0;
var yvel = 5;
var clicked = false;
var clickcount = 0;

function preload() {
    img = loadImage('soccerball.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(89, 213, 247);
    fill(255, 10, 10);
    textAlign(CENTER, TOP);
    textSize(40);
    // text("Happy Birthday\nCampbell!!", windowWidth * 0.5, 20);
    image(img, x, y, 100, 100);
    if (mouseIsPressed && clickcount < 2) {
      yvel = 21;
      clicked = true;
    } else if (clicked) {
      clickcount = clickcount + 1;
      clicked = false;
    }
  text(clickcount, 300, 20);
  
    y = y - yvel;
  
    if (y > windowHeight - 100 || y < 0) {
      if (y > windowHeight - 100) {
        y = windowHeight - 100;
        clickcount = 0;
      } else {
        y = 0;
      }
      if (Math.abs(yvel) > 2) {
        yvel = -yvel * 0.4;
      } else {
        yvel = 0;
      }
    } else {
      yvel = yvel - 1.2;
    }

}