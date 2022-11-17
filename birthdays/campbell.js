let img;
var x = 20;
var y = 0;
var yvel = 5;

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
    if (mouseIsPressed) {
      yvel = 13;
    }
    y = y - yvel;
  
    if (y > windowHeight - 100) {
      y = windowHeight - 100;
      if (Math.abs(yvel) > 2) {
        yvel = -yvel * 0.5;
      } else {
        yvel = 0;
      }
    } else {
      yvel = yvel - 0.6;
    }
}