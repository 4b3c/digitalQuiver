//declare variables
let img;
var x = 0;
var y = 0;
var ballwh = [60, 60];

//yvel = y (direction) velocity
var yvel = 5;  
var ground = 0;
var clicked = false;

//create a canvas the size of the window
function setup() {
    createCanvas(windowWidth, windowHeight);
    x = (windowWidth / 2) - (ballwh[0] / 2);
    ground = windowHeight - (ballwh[1] * 2);
}

//load the image of the soccerball
function preload() {
    img = loadImage('soccerball.png');
}

//draw function runs continuously
function draw() {
    //clear the background and draw the soccerball
    background(89, 213, 247);
    image(img, x, y, ballwh[0], ballwh[1]);
  
    //if the ball is trying to fall out of the window
    if (y >= ground) {
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
  
    //if you click the mouse and (essentially) the ball is on the ground
    if (mouseIsPressed && !clicked) {
      //make the ball jump and make it so we can't double jump
      y = ground;
      yvel = 31;
      clicked = true;
    }

    //move the ball by the y velocity
    y = y - yvel;
    
}