//declare variables
let img;
var x = 0;
var y = 100
var ballwh = [60, 60];
var first_click = false;
var clicked = false;
var score = 0;
var scene = 0;
var obs_vel = 0;

var obs1 = [0, 0, 0];
var obs2 = [0, 0, 0];
var obs3 = [0, 0, 0];

var ins_text = ["game instructions:", "tap the sides of the screen", "to dodge the obstacles"];

//create a canvas the size of the window
function setup() {
    createCanvas(windowWidth, windowHeight);
    ballwh[0] = windowWidth / 7;
    ballwh[1] = ballwh[0];
    x = round(windowWidth / ballwh[0]) * ballwh[0];
    x = x - (ballwh[0] * 4);
    y = windowHeight - (ballwh[1] * 2);
    obs1[1] = -windowHeight * 1/3;
    obs2[1] = -windowHeight * 2/3;
    obs3[1] = -windowHeight;
  
    obs1[2] = round(random(ballwh[0], ballwh[0] * 4) / ballwh[0]) * ballwh[0];
    obs2[2] = round(random(ballwh[0], ballwh[0] * 4) / ballwh[0]) * ballwh[0];
    obs3[2] = round(random(ballwh[0], ballwh[0] * 4) / ballwh[0]) * ballwh[0];
  
    obs1[0] = round(random(0, windowWidth - obs1[2]) / ballwh[0]) * ballwh[0];
    obs2[0] = round(random(0, windowWidth - obs2[2]) / ballwh[0]) * ballwh[0];
    obs3[0] = round(random(0, windowWidth - obs3[2]) / ballwh[0]) * ballwh[0];
  
    obs_vel = 8 * (windowHeight / windowWidth);
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
        if (mouseX > windowWidth / 2 && x + ballwh[0] <= windowWidth - ballwh[0] + 1) {
            //move ball to the right
            x = x + ballwh[0];
        } else if (mouseX < windowWidth / 2 && x - ballwh[0] >= -1) {
            //move ball to the left
            x = x - ballwh[0];
        }
    } else if (!mouseIsPressed) {
        clicked = false;
    }
}

//draw function runs continuously
function draw() {
    background(70, 150, 70);
    
    if (scene == 0) {
        fill(255, 100, 100);
        ellipse(windowWidth * 0.8, windowHeight * 0.6, 120, 150);
        fill(180, 0, 180);
        ellipse(windowWidth * 0.2, windowHeight * 0.3, 120, 150);
        noFill();
        var ww = windowWidth;
        var wh = windowHeight;
        bezier(ww * 0.6, wh * 0.9, ww * 0.3, wh * 0.6, ww * 0.9, wh * 0.9, ww * 0.8, wh * 0.6 + 75);
        bezier(ww * 0.2, wh * 0.7, ww * 0.3, wh * 0.2, ww * 0.1, wh * 0.8, ww * 0.2, wh * 0.3 + 75);
      
        fill(255);    
        rect((windowWidth / 2) - 140, (windowHeight / 2) - 40, 280, 80);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(windowWidth / 10);
        fill(255, 0, 0);
        text("HAPPY BIRTHDAY", windowWidth / 2, windowHeight * 0.2);
        text("CAMPBELL!!!", windowWidth / 2, windowHeight * 0.3);
        fill(0);
        textSize(windowWidth / 22);
        text(ins_text[0], windowWidth / 2, windowHeight * 0.6);
        text(ins_text[1], windowWidth / 2, windowHeight * 0.65);
        text(ins_text[2], windowWidth / 2, windowHeight * 0.7);
        textSize(windowWidth / 18);
        text("play!", windowWidth / 2, windowHeight / 2);
        if (mouseIsPressed && mouseX > (windowWidth / 2) - 140 && mouseX < (windowWidth / 2) + 140) {
            if (mouseY > (windowHeight / 2) - 40 && mouseY < (windowHeight / 2) + 40) {
                clicked = true;
            }
        } else if (clicked) {
          scene = 1;
          clicked = false;
        }
    } else if (scene == 1) {
        //clear the background and draw the soccerball
        image(img, x, y, ballwh[0], ballwh[1]);

        manage_mouse();

        fill(255, 0, 0);
        rect(obs1[0], obs1[1], obs1[2], ballwh[0]);
        rect(obs2[0], obs2[1], obs2[2], ballwh[0]);
        rect(obs3[0], obs3[1], obs3[2], ballwh[0]);

        if (obs1[1] > windowHeight) {
            obs1[2] = round(random(ballwh[0], ballwh[0] * 4) / ballwh[0]) * ballwh[0];
            obs1[0] = round(random(0, windowWidth - obs1[2]) / ballwh[0]) * ballwh[0];
            obs1[1] = -100;
            score++;
        } else if (obs2[1] > windowHeight) {
            obs2[2] = round(random(ballwh[0], ballwh[0] * 4) / ballwh[0]) * ballwh[0];
            obs2[0] = round(random(0, windowWidth - obs2[2]) / ballwh[0]) * ballwh[0];
            obs2[1] = -100;
            score++;
        } else if (obs3[1] > windowHeight) {
            obs3[2] = round(random(ballwh[0], ballwh[0] * 4) / ballwh[0]) * ballwh[0];
            obs3[0] = round(random(0, windowWidth - obs3[2]) / ballwh[0]) * ballwh[0];
            obs3[1] = -100;
            score++;
        }


        if (obs1[1] + ballwh[1] > y && obs1[1] < y + ballwh[1]) {
            if (obs1[0] + obs1[2] - 1 > x && obs1[0] < x + ballwh[0] - 1) {
                scene = 2;
            }
        } else if (obs2[1] + ballwh[1] > y && obs2[1] < y + ballwh[1]) {
            if (obs2[0] + obs2[2] - 1 > x && obs2[0] < x + ballwh[0] - 1) {
                scene = 2;
            }
        } else if (obs3[1] + ballwh[1] > y && obs3[1] < y + ballwh[1]) {
            if (obs3[0] + obs3[2] - 1 > x && obs3[0] < x + ballwh[0] - 1) {
                scene = 2;
            }
        }
      
        obs1[1] = obs1[1] + obs_vel;
        obs2[1] = obs2[1] + obs_vel;
        obs3[1] = obs3[1] + obs_vel;
      
        fill(0);
        textSize(windowHeight / 24);
        textAlign(LEFT, TOP);
        text("Points: " + score, 30, 50);
      
        if (score == 30) {
            scene = 3;
        }
      
    } else if (scene == 2) {
        fill(255);
        rect((windowWidth / 2) - 140, (windowHeight / 2) - 40, 280, 80);
        rect((windowWidth / 2) - 140, (windowHeight / 2) + 90, 280, 80);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(windowWidth / 10);
        text("you died :/", windowWidth / 2, windowHeight * 0.2);
        textSize(windowWidth / 18);
        text("score: " + score, windowWidth / 2, windowHeight * 0.4);
        text("play again!", windowWidth / 2, windowHeight / 2);
        text("main menu", windowWidth / 2, windowHeight / 2 + 130);
        if (mouseIsPressed && mouseX > (windowWidth / 2) - 140 && mouseX < (windowWidth / 2) + 140) {
            if (mouseY > (windowHeight / 2) - 40 && mouseY < (windowHeight / 2) + 40) {
                scene = 1;
                score = 0;
                obs1[1] = -windowHeight * 1/3;
                obs2[1] = -windowHeight * 2/3;
                obs3[1] = -windowHeight;
                x = round(windowWidth / ballwh[0]) * ballwh[0];
                x = x - (ballwh[0] * 4);
                
            } else if (mouseY > (windowHeight / 2) + 90 && mouseY < (windowHeight / 2) + 170) {
                scene = 0;
                score = 0;
                obs1[1] = -windowHeight * 1/3;
                obs2[1] = -windowHeight * 2/3;
                obs3[1] = -windowHeight;
                x = round(windowWidth / ballwh[0]) * ballwh[0];
                x = x - (ballwh[0] * 4);
            }
        }
    } else if (scene == 3) {
        fill(255, 0, 0);
        ellipse(windowWidth * 0.8, windowHeight * 0.6, 120, 150);
        fill(0, 0, 255);
        ellipse(windowWidth * 0.3, windowHeight * 0.4, 120, 150);
        noFill();
        var ww = windowWidth;
        var wh = windowHeight;
        bezier(ww * 0.7, wh * 0.9, ww * 0.5, wh * 1.0, ww * 1.1, wh * 0.8, ww * 0.8, wh * 0.6 + 75);
        bezier(ww * 0.2, wh * 0.7, ww * 0.3, wh * 0.2, ww * 0.1, wh * 0.8, ww * 0.3, wh * 0.4 + 75);
      
      
        fill(255);    
        rect((windowWidth / 2) - 140, (windowHeight * 0.7) - 40, 280, 80);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(windowWidth / 30);
        text("you did it!... HAPPY BIRTHDAY!!", windowWidth / 2, windowHeight * 0.18);
        textAlign(LEFT, CENTER);
        text("have fun being 17 and extremely old 🤪", 50, windowHeight * 0.23);
        text("i shouldve spent more time on this and made it", 50, windowHeight * 0.26);
        text("look better, but i thought of it kinda late,", 50, windowHeight * 0.29);
        text("i hope you like it, and i hope you like the", 50, windowHeight * 0.32);
        text("pretzel things... have a good birthday and thanksgiving :\)", 50, windowHeight * 0.35);
        text("\\ | | /", 80, windowHeight * 0.42);
        text(" | 7", 80, windowHeight * 0.45);
        
        fill(0);
        textSize(windowWidth / 18);
        textAlign(CENTER, CENTER);
        text("main menu!", windowWidth / 2, windowHeight * 0.7);
        if (mouseIsPressed && mouseX > (windowWidth / 2) - 140 && mouseX < (windowWidth / 2) + 140) {
            if (mouseY > (windowHeight * 0.7) - 40 && mouseY < (windowHeight * 0.7) + 40) {
                clicked = true;
            }
        } else if (clicked) {
            scene = 0;
            clicked = false;
            score = 0;
            obs1[1] = -windowHeight * 1/3;
            obs2[1] = -windowHeight * 2/3;
            obs3[1] = -windowHeight;
            x = round(windowWidth / ballwh[0]) * ballwh[0];
            x = x - (ballwh[0] * 4);
        }
    }
}