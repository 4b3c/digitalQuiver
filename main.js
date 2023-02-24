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

	left = 0;
	right = windowWidth;
	top_left = windowHeight * 0.5;
	top_right = windowHeight * 0.85;
	bottom = windowHeight * 2;
	scrl_hgt = windowHeight * scroll;

	button_1 = [0, windowHeight * 0.77, 420];
	button_2 = [300, windowHeight * 0.77, 280];
	button_3 = [600, windowHeight * 0.77, 140];
	button_4 = [900, windowHeight * 0.77, 0];
}

function mouseWheel(event) {
	scroll += event.delta / 1100;
	scroll = max(scroll, 0);
	scroll = min(scroll, 1);
	print(pow(scroll, 2))
}

function draw() {
	background(80);

	fill(100, 40, 50);
	noStroke();
	scrl_hgt = windowHeight * scroll;
	quad(left, top_left - scrl_hgt, right, top_right - scrl_hgt, right, bottom, left, bottom);

	fill(80);
	stroke(1);
	rect(50 + button_1[0] * (1 - pow(scroll, 1/2)), button_1[1] - (button_1[2] * pow(scroll, 1/2)), 250, 90, 15);
	rect(50 + button_2[0] * (1 - pow(scroll, 1/1.27)), button_2[1] - (button_2[2] * pow(scroll, 1/1.27)), 250, 90, 15);
	rect(50 + button_3[0] * (1 - pow(scroll, 1.27)), button_3[1] - (button_3[2] * pow(scroll, 1.27)), 250, 90, 15);
	rect(50 + button_4[0] * (1 - pow(scroll, 2)), button_4[1] - (button_4[2] * pow(scroll, 2)), 250, 90, 15);

	fill(0);
	noStroke();
	textAlign(CENTER);
	textSize(25);
	text("Python Projects", 170 + button_1[0] * (1 - pow(scroll, 1/2)), 55 + button_1[1] - (button_1[2] * pow(scroll, 1/2)));
	text("JS Projects", 170 + button_2[0] * (1 - pow(scroll, 1/1.27)), 55 + button_2[1] - (button_2[2] * pow(scroll, 1/1.27)));
	text("Birthday Sites", 170 + button_3[0] * (1 - pow(scroll, 1.27)), 55 + button_3[1] - (button_3[2] *  pow(scroll, 1.27)));
	text("About Me", 170 + button_4[0] * (1 - pow(scroll, 2)), 55 + button_4[1] - (button_4[2] *  pow(scroll, 2)));
}