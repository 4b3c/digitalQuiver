var obj_scroll = 0;
var scroll = 0;

var left;
var right;
var top_left;
var top_right;
var bottom;
var scrl_hgt;

var button_1;
var button_2;
var button_3;
var button_4;

function setup() {
	createCanvas(windowWidth, windowHeight * 2);
	frameRate(60);

	left = 0;
	right = windowWidth;
	top_left = windowHeight * 0.5;
	top_right = windowHeight * 0.85;
	bottom = windowHeight * 2;
	scrl_hgt = windowHeight * obj_scroll;

	button_1 = [0, windowHeight * 0.77, 420, [0, 0]];
	button_2 = [300, windowHeight * 0.77, 280, [0, 0]];
	button_3 = [600, windowHeight * 0.77, 140, [0, 0]];
	button_4 = [900, windowHeight * 0.77, 0, [0, 0]];
}

function mouseWheel(event) {
  scroll = scroll + event.delta / 450;
  scroll = constrain(scroll, 0, 2);
}

function checkHover(button) {
	if (mouseY > button[3][1] + 90) {
		return 120;
	}
	if (mouseX > button[3][0] + 250) {
		return 120;
	}
	if (mouseX < button[3][0]) {
	  	return 120;
	}
	if (mouseY < button[3][1]) {
		return 120;
	}
	return 170;
}

function draw() {
	background(120);

	if (scroll != obj_scroll) {
		obj_scroll += (scroll - obj_scroll) * 0.3;
		obj_scroll = Math.round(obj_scroll * 100000) / 100000;
	}

	fill(100, 40, 50);
	noStroke();
	scrl_hgt = windowHeight * obj_scroll;
	quad(left, top_left - scrl_hgt, right, top_right - scrl_hgt, right, bottom, left, bottom);

	stroke(1);
	button_1[3][0] = 50 + button_1[0] * (1 - pow(obj_scroll, 1/2));
	button_2[3][0] = 50 + button_2[0] * (1 - pow(obj_scroll, 1/1.27));
	button_3[3][0] = 50 + button_3[0] * (1 - pow(obj_scroll, 1.27));
	button_4[3][0] = 50 + button_4[0] * (1 - pow(obj_scroll, 2));

	button_1[3][1] = button_1[1] - (button_1[2] * pow(obj_scroll, 1/2));
	button_2[3][1] = button_2[1] - (button_2[2] * pow(obj_scroll, 1/1.27));
	button_3[3][1] = button_3[1] - (button_3[2] * pow(obj_scroll, 1.27));
	button_4[3][1] = button_4[1] - (button_4[2] * pow(obj_scroll, 2));

	fill(checkHover(button_1));
	rect(button_1[3][0], button_1[3][1], 250, 90, 15);
	
	fill(checkHover(button_2));
	rect(button_2[3][0], button_2[3][1], 250, 90, 15);
	
	fill(checkHover(button_3));
	rect(button_3[3][0], button_3[3][1], 250, 90, 15);
	
	fill(checkHover(button_4));
	rect(button_4[3][0], button_4[3][1], 250, 90, 15);

	fill(0);
	noStroke();
	textAlign(CENTER);
	textSize(25);
	text("Python Projects", 120 + button_1[3][0], 55 + button_1[3][1]);
	text("JS Projects", 120 + button_2[3][0], 55 + button_2[3][1]);
	text("Birthday Sites", 120 + button_3[3][0], 55 + button_3[3][1]);
	text("About Me", 120 + button_4[3][0], 55 + button_4[3][1]);

	// fill(255);
	// textSize(15);
	// text(mouseX + ", " + mouseY, mouseX + 20, mouseY - 30);
	// text(button_1[3][0] + ", " + button_1[3][1], mouseX + 20, mouseY - 70);

	// ellipse(50 + 300, windowHeight * 0.572, 5)

}