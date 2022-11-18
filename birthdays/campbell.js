//declare variables
let img;
var x = 20;
var y = 0;
var ballwh = [60, 60];
var obstx = 0;
var obstc = 0;

//yvel = y (direction) velocity
var yvel = 5;  
var ground = 0;
var clicked = false;

//level design
var level1 = [1, 2, 1, 3, 2, 3, 1, 3]

//create a canvas the size of the window
function setup() {
    createCanvas(windowWidth, windowHeight);
    obstx = windowWidth;
    ground = windowHeight - ballwh[1];
}

//load the image of the soccerball
function preload() {
    img = loadImage('soccerball.png');
}

function draw_level(level, part, obstx) {
    switch (level[part]) {
        case 1:
            fill(255, 20, 20);
            rect(obstx, windowHeight - 50, 100, 50);
            break;
        case 2:
            fill(20, 255, 20);
            rect(obstx, windowHeight - 100, 100, 100);
            break;
        case 3:
            fill(20, 20, 255);
            rect(obstx, windowHeight - 150, 100, 150);
            break;
    }

}

//draw function runs continuously
function draw() {
    //clear the background and draw the soccerball
    background(89, 213, 247);
    image(img, x, y, ballwh[0], ballwh[1]);
    
    //if you click the mouse and (essentially) the ball is on the ground
    if (mouseIsPressed && !clicked) {
      //make the ball jump and make it so we can't double jump
      yvel = 31;
      y = ground;
      clicked = true;
    }
  
    //if the ball is trying to fall out of the window
    if (y > ground) {
      //stop it from falling and reset our jump so we know its not a double jump
      y = ground;
      clicked = false;
      
      //if the velocity is still a decent amount when it hits the ground
      if (Math.abs(yvel) > 2) {
        //make it bounce with less force
        yvel = -yvel * 0.4;
      } else {
        yvel = 0;
      }
    } else {
      //accelerate towards the ground
      yvel = yvel - 1.2;
    }

    //move the ball by the y velocity
    y = y - yvel;

    draw_level(level1, obstc, obstx);
    obstx = obstx - 5;
    if (obstx < -100) {
        obstx = windowWidth;
        obstc = obstc + 1;
        if (obstc == level1.length) {
            obstc = 0;
        }
    } 
}