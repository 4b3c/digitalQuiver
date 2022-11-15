var y = 400;

function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(89, 213, 247);
    fill(255, 10, 10);
    textAlign(CENTER, TOP);
    textSize(40);
    text("Happy Birthday\nCampbell!!", windowWidth * 0.5, y);
    if (y < -100) {
        y = 400;
    } else {
        y--;
    }
}
