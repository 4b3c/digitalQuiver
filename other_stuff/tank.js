  var floor_height = 295;
  var tank_pos = [21, floor_height - 30];
  var angle = -58;
  var target_angle = 100;
  var bullet = [];
  var explosions = [];
  var clicked = false;
  var noc = 8;
  var list = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(89, 213, 247);
    noStroke();
    fill(150, 116, 69);
    rect(0, floor_height, 400, 400-floor_height);
    angle = -atan2(tank_pos[0] - mouseX + 20, tank_pos[1] - mouseY + 6) - 0.5 * Math.PI;
    
    for (var i = 0; i < explosions.length; i = i + 2) {
        explode(explosions[i], explosions[i + 1]);
        
    }
    draw_bullets();
    draw_tank();
    
    if (keyIsPressed) {
        if (key.toString() === "d") {
            tank_pos[0] = tank_pos[0] + 2;
        } else if (key.toString() === "a") {
            tank_pos[0] = tank_pos[0] - 2;
        }
    }
    
    if (mouseIsPressed && clicked === false) {
        bullet = concat(bullet, [tank_pos[0] + 20, tank_pos[1] + 6, -angle - 90, 0]);
        clicked = true;
        
    } else if (!mouseIsPressed) {
        clicked = false;
    }
    noStroke();
    text(angle, 30, 30);
    text(explosions.length, 30, 60);
    text(explosions[0], 30, 90);
    text(mouseY, 30, 120);
}


function reset_exp() {
    for (var i = 0; i < noc; i++) {
        list = concat(list, [round(random(5, 30)), round(random(5, 30)), round(random(5, 40)), round(random(100, 240))]);
    }
}

reset_exp();

function explode(x, y) {
    for (var i = 0; i < list.length; i = i + 4) {
        fill(list[i + 3]);
        ellipse(list[i] + x, list[i + 1] + y, list[i + 2], list[i + 2]);
        list[i + 2] = list[i + 2] - 1;
        if (list[i + 2] < 2) {
            list.splice(i, 4);
        }
    }
}


function draw_tank() {
    fill(70, 97, 64);
    
    translate(tank_pos[0] + 20, tank_pos[1] + 6);
    rotate(angle);
    stroke(0);
    strokeWeight(1);
    rect(0, 0, 39, 3);
    rotate(-angle);
    translate(-tank_pos[0] - 20, -tank_pos[1] - 6);
    
    rect(tank_pos[0], tank_pos[1], 40, 20);
    rect(tank_pos[0] - 8, tank_pos[1] + 10, 57, 7);
    stroke(0, 0, 0);
    strokeWeight(4);
    quad(tank_pos[0] - 13, tank_pos[1] + 18,
            tank_pos[0] + 52, tank_pos[1] + 15,
            tank_pos[0] + 37, tank_pos[1] + 29,
            tank_pos[0] - 4, tank_pos[1] + 29);
}

function draw_bullets() {
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < bullet.length; i = i + 4) {
        ellipse(bullet[i], bullet[i + 1], 3, 3);
        bullet[i] = bullet[i] + cos(-bullet[i + 2] - 90) * 2;
        bullet[i + 1] = bullet[i + 1] + ((sin(-bullet[i + 2] - 90) * 2) + bullet[i + 3]);
        bullet[i + 3] = bullet[i + 3] + 0.01;
    }
    if (bullet[0] > 400 || bullet[1] > 400 || bullet[0] < 0 || bullet[1] < 0) {
        bullet.shift();
        bullet.shift();
        bullet.shift();
        bullet.shift();
        reset_exp();
    } else if (bullet[1] > floor_height && bullet[1] < floor_height + 1) {
        explosions = concat(explosions, [bullet[0], bullet[1]]);
    }
}
    
