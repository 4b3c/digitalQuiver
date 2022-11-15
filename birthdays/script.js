var y = 20;
let img;

function preload() {
    img = loadImage('https://cdn.discordapp.com/attachments/599468968545091608/1041938489060634785/soccerball.png');
}

function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(89, 213, 247);
    fill(255, 10, 10);
    textAlign(CENTER, TOP);
    textSize(40);
    text("Happy Birthday\nCampbell!!", windowWidth * 0.5, y);
    image(img, 0, 0, 200, 200);
    if (y < -100) {
        y = 400;
    } else {
        y--;
    }
}
