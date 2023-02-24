var scroll = 0;

var startPoly;
var endPoly;

var button_1;
var button_2;
var button_3;
var button_4;

function setup() {
	createCanvas(windowWidth, windowHeight * 2);

	startPoly = [- windowWidth, windowHeight * 0.15, windowWidth, windowHeight * 0.85, windowWidth, windowHeight * 2, 0, windowHeight * 2];
	endPoly = [0, 0, windowWidth * 0.25, 0, windowWidth * 0.25, windowHeight, 0, windowHeight];
	currentPoly = startPoly;

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

function interpolatePolygons(polyStart, polyEnd, value) {
  let interpolatedPoly = [];
  for (let i = 0; i < polyStart.length; i += 2) {
    let x = (1 - value) * polyStart[i] + value * polyEnd[i];
    let y = (1 - value) * polyStart[i + 1] + value * polyEnd[i + 1];
    interpolatedPoly.push(x, y);
  }
  return interpolatedPoly;
}

function rotatePolygon(polygon, center, degrees) {
  let rotatedPolygon = [];
  for (let i = 0; i < polygon.length; i += 2) {
    let x = polygon[i];
    let y = polygon[i + 1];

    x -= center[0];
    y -= center[1];

    let radians = degrees * PI / 180;
    let cosTheta = Math.cos(radians);
    let sinTheta = Math.sin(radians);
    let xNew = x * cosTheta - y * sinTheta;
    let yNew = x * sinTheta + y * cosTheta;

    xNew += center[0];
    yNew += center[1];

    rotatedPolygon.push(xNew, yNew);
  }
  return rotatedPolygon;
}


function draw() {
	background(80);

	fill(100, 40, 50);
	noStroke();
	currentPoly = rotatePolygon(startPoly, [50 + 300, windowHeight * 0.572], (90 - (Math.atan2(windowHeight * 0.85 - windowHeight * 0.15, windowWidth + windowWidth) * 180 / Math.PI)) * pow(scroll, 1/1.27));
	print(currentPoly);
	quad(currentPoly[0], currentPoly[1], currentPoly[2], currentPoly[3], currentPoly[4], currentPoly[5], currentPoly[6], currentPoly[7]);

	fill(80);
	stroke(1);
	strokeWeight(3);
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

	// fill(255);
	// textSize(15);
	// text(mouseX + ", " + mouseY, mouseX + 20, mouseY - 30);

	// ellipse(50 + 300, windowHeight * 0.572, 5)
}