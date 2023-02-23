function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  img = loadImage('https://cdn.discordapp.com/attachments/1055600831442997351/1078401815328075836/abstractart.jpg');
}

function draw() {
  background(80);
  image(img, 0, 0, windowWidth, windowHeight * 0.6);

  fill(60);
  noStroke();
  rect(40, windowHeight * 0.7, 250, 90, 15);
  rect(340, windowHeight * 0.7, 250, 90, 15);

  fill(0);
  textAlign(CENTER);
  textSize(25);
  text("Birthday Sites", 165, windowHeight * 0.7 + 55);
  text("Other Projects", 465, windowHeight * 0.7 + 55);
}