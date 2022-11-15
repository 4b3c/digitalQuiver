let img;

function preload() {
  img = loadImage("hamster.jpg");
}

function draw() {
  image(img, 0, 0, 300, 300);
}