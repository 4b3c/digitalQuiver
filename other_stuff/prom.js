let vw;
let vh;

function setup() {
	createCanvas(windowWidth, windowHeight);
	vw = windowWidth;
	vh = windowHeight

	all_confetti = new lots_of_it(60);
}

function draw() {
	background(50, 50, 70);

	all_confetti.draw();

	noStroke();
	fill(250, 250, 30);
	rect(vw * 0.375, vh * 0.8, vw * 0.25, vh * 0.25, 10);
	fill(255);
	rect(vw * 0.55, vh * 0.81, vw * 0.05, vh * 0.25, 4);
	fill(200, 30, 30);
	rect(vw * 0.35, vh * 0.83, vw * 0.3, vh * 0.05, 10);
	fill(255);
	rect(vw * 0.6, vh * 0.84, vw * 0.03, vh * 0.03, 6);

	textSize(vw * 0.16);
	textAlign(CENTER);
	textWidth(vw);
	fill(0, 0, 0);
	text("Quinlan...\nLet me\ntake you\nto your\nPROM??", vw * 0.505, vh * 0.155);
	fill(150, 150, 230);
	text("Quinlan...\nLet me\ntake you\nto your\nPROM??", vw * 0.5, vh * 0.15);

	stroke(1);
	fill(23, 193, 209);
	heart(vw * 0.17, vh * 0.2, 2.1);
	fill(23, 163, 42);
	heart(vw * 0.85, vh * 0.45, 3);
	fill(237, 110, 26);
	heart(vw * 0.11, vh * 0.65, 3.6);
	fill(36, 26, 235);
	heart(vw * 0.9, vh * 0.06, 4);


}

function heart(x, y, sz) {
	bezier(x, (-1 * sz) + y, x, (-15 * sz) + y, x + (26 * sz), (-8 * sz) + y, x, (15 * sz) + y);
	bezier(x, (-1 * sz) + y, x, (-15 * sz) + y, x - (26 * sz), (-8 * sz) + y, x, (15 * sz) + y);
};

class confetti {
	constructor() {
		this.color = [random(0, 255), random(0, 255), random(0, 255)];
		this.size = [random(10, 30), random(10, 30)];
		this.position = [(vw * 0.5) - (this.size[0] / 2), vh * 0.8];
		this.speed = -random(5, 15);
		this.xspeed = random(-2, 2);
	}

	draw() {
		stroke(1);
		fill(this.color[0], this.color[1], this.color[2]);
		rect(this.position[0], this.position[1], this.size[0], this.size[1])
	}
}

class lots_of_it {
	constructor(how_many) {
		this.confetties = [];
		for (let i = 0; i < 3; i++) {
			this.confetties.push(new confetti)
		}
		this.count = 3;
		this.how_many = how_many;
	}

	draw() {
		for (let i = 0; i < this.count; i++) {
			this.confetties[i].draw();
			this.confetties[i].position[1] += this.confetties[i].speed;
			this.confetties[i].position[0] += this.confetties[i].xspeed;
			this.confetties[i].speed += 0.1;
			if (this.confetties[i].position[1] > vh || this.confetties[i].position[0] > vw) {
				this.confetties[i].position = [(vw * 0.5) - (this.confetties[i].size[0] / 2), vh * 0.8];
				this.confetties[i].speed = -random(5, 15);
			}
		}
		if (this.count != this.how_many) {
			this.confetties.push(new confetti)
			this.count += 1;
		}
	}
}