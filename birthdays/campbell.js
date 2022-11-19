//declare variables
let img;
var x = 0;
var y = 100
var ballwh = [60, 60];
var first_click = false;
var clicked = false;

var obs1 = [0, 0, 0];
var obs2 = [0, 0, 0];
var obs3 = [0, 0, 0];

var ins_text = ["instructions:", "tap the sides of the screen", "to dodge the obstacles"];

//create a canvas the size of the window
function setup() {
    createCanvas(windowWidth, windowHeight);
    x = round(((windowWidth / 2) - (ballwh[0] / 2)) / 60) * 60;
    y = windowHeight - (ballwh[1] * 2);
    obs1[1] = -windowHeight * 1/3;
    obs2[1] = -windowHeight * 2/3;
    obs3[1] = -windowHeight;
  
    obs1[2] = random(100, 200);
    obs2[2] = random(100, 200);
    obs3[2] = random(100, 200);
  
    obs1[0] = random(0, windowWidth - obs1[2]);
    obs2[0] = random(0, windowWidth - obs2[2]);
    obs3[0] = random(0, windowWidth - obs3[2]);
}

//load the image of the soccerball
function preload() {
    img = loadImage('soccerball.png');
}

//mouse click interaction to move the ball
function manage_mouse() {
    //if you click the mouse
    if (mouseIsPressed && !clicked) {
        clicked = true;
        first_click = true;
        if (mouseX > windowWidth / 2 && x + ballwh[0] < windowWidth - ballwh[0]) {
            //move ball to the right
            x = x + ballwh[0];
        } else if (mouseX < windowWidth / 2 && x - ballwh[0] >= 0) {
            //move ball to the left
            x = x - ballwh[0];
        }
    } else if (!mouseIsPressed) {
        clicked = false;
    }
}

//show instructions at the beginning
function show_instructions() {
    if (!first_click) {
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(30);
        text(ins_text[0], windowWidth / 2, 100);
        text(ins_text[1], windowWidth / 2, 150);
        text(ins_text[2], windowWidth / 2, 200);
    } else {
        obs1[1] = obs1[1] + 5;
        obs2[1] = obs2[1] + 5;
        obs3[1] = obs3[1] + 5;
    }
}

//draw function runs continuously
function draw() {
    //clear the background and draw the soccerball
    background(70, 150, 70);
    image(img, x, y, ballwh[0], ballwh[1]);
  
    manage_mouse();
    show_instructions();
  
    fill(255, 0, 0);
    rect(obs1[0], obs1[1], obs1[2], 50);
    rect(obs2[0], obs2[1], obs2[2], 50);
    rect(obs3[0], obs3[1], obs3[2], 50);
  
    if (obs1[1] > windowHeight) {
        obs1[2] = round(random(60, 280) / 60) * 60;
        obs1[0] = round(random(0, windowWidth - obs1[2]) / 60) * 60;
        obs1[1] = -100;
    } else if (obs2[1] > windowHeight) {
        obs2[2] = round(random(60, 280) / 60) * 60;
        obs2[0] = round(random(0, windowWidth - obs2[2]) / 60) * 60;
        obs2[1] = -100;
    } else if (obs3[1] > windowHeight) {
        obs3[2] = round(random(60, 280) / 60) * 60;
        obs3[0] = round(random(0, windowWidth - obs3[2]) / 60) * 60;
        obs3[1] = -100;
    }
  

    if (obs1[1] + 60 > y && obs1[1] < y + ballwh[1]) {
        if (obs1[0] + obs1[2] > x && obs1[0] < x + ballwh[0]) {
            text("YOU DIED", 80, 30);
        }
    } else if (obs2[1] + 60 > y && obs2[1] < y + ballwh[1]) {
        if (obs2[0] + obs2[2] > x && obs2[0] < x + ballwh[0]) {
            text("YOU DIED", 80, 30);
        }
    } else if (obs3[1] + 60 > y && obs3[1] < y + ballwh[1]) {
        if (obs3[0] + obs3[2] > x && obs3[0] < x + ballwh[0]) {
            text("YOU DIED", 80, 30);
        }
    }
    
}