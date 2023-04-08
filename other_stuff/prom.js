let vw;
let vh;

function setup() {
	createCanvas(windowWidth, windowHeight);
	vw = windowWidth;
	vh = windowHeight
}

function draw() {
	background(50, 50, 70);
	fill(150, 150, 230);
	textSize(vw / 6);
	textAlign(CENTER);
	textWidth(vw);
	text("How about\nI take you\nto your\nPROM??", vw / 2, vh * 0.15);
}