let img;
var x = 0;
var y = 0;
var xvel = 0;
var yvel = 0;
var prev_mouse = [mouseX, mouseY];

function preload() {
    img = loadImage('soccerball.png');
}

function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(89, 213, 247);
    fill(255, 10, 10);
    textAlign(CENTER, TOP);
    textSize(40);
    // text("Happy Birthday\nCampbell!!", windowWidth * 0.5, 20);
    image(img, x, y, 100, 100);
    x = x + xvel;
    y = y + yvel;
    if (x > windowWidth - 100 || x < 0) {
      xvel = -xvel;
    }
    if (y > 400 - 100 || y < 0) {
      yvel = -yvel;
    }
    if (mouseIsPressed) {
      xvel = mouseX - prev_mouse[0];
      yvel = mouseY - prev_mouse[1];
    }
    prev_mouse = [mouseX, mouseY];
}