var obj_scroll = 0;
var scroll = 0;
var anim_speed = 0.3;

var left;
var right;
var top_left;
var top_right;
var bottom;
var scrl_hgt;
var radius;

var but_h;

function setup() {
	createCanvas(windowWidth, windowHeight * 2);
	frameRate(60);

	left = 0;
	right = windowWidth;
	top_left = windowHeight * 0.5;
	top_right = windowHeight * 0.85;
	bottom = windowHeight * 2;
	scrl_hgt = windowHeight * obj_scroll;
	radius = Math.sqrt((windowHeight * windowHeight) + ((windowWidth - 350) * (windowWidth - 350)));

	but_h = windowHeight * 0.77;

	buttons = [
		new Button(0, but_h, 420, "Python Projects", 1/2, 1),
		new Button(300, but_h, 280, "Robotics", 1/1.27, 2),
		new Button(600, but_h, 140, "Birthday Sites", 1.27, 3),
		new Button(900, but_h, 0, "About Me", 2, 4)
		];
	main_button = new Button(0, but_h, 560, "Welcome Page", 1/3, 0);
}

function preload() {
    img = loadImage('images/paint_thing.jpg');
}

function mouseWheel(event) {
  scroll = scroll + event.delta / 1100;
  scroll = constrain(scroll, 0, 4);
}

function draw() {

	if (scroll != obj_scroll) {
		obj_scroll += (scroll - obj_scroll) * anim_speed;
		obj_scroll = Math.round(obj_scroll * 100000) / 100000;
		if (Math.round(obj_scroll) == Math.round(obj_scroll * 10) / 10) {
			anim_speed = 0.3;
		}
	}

	if (obj_scroll >= 0 && (Math.round(obj_scroll * 100) / 100) < 1) {
		image(img, 0, 0);
		fill(100, 40, 50);
		noStroke();
		scrl_hgt = windowHeight * obj_scroll;
		quad(left, top_left - scrl_hgt, right, top_right - scrl_hgt, right, bottom, left, bottom);

		fill(255);
		noStroke();
		textAlign(CENTER);
		textSize(120);
		text("digital", 990 - scrl_hgt, 250 - (scrl_hgt * 0.6));
		textSize(140);
		textStyle(BOLD);
		text("Quiver", 1380 - scrl_hgt, 250 - (scrl_hgt * 0.6));
		textSize(40);
		textStyle(ITALIC)
		text("abram's projects", 1460 - scrl_hgt, 300 - (scrl_hgt * 0.6));
		textStyle(NORMAL);

	} else if ((Math.round(obj_scroll * 100) / 100) >= 1 && obj_scroll < 2) {
		background(100, 40, 50);
		noStroke();
		fill(80, 70, 100);
		ellipse(350, 0, 2 * (radius * (obj_scroll - 1)), 2 * (radius * (obj_scroll - 1)));

		fill(100, 40, 50);
		rect(0, 0, 350, windowHeight);

		fill(255);
		noStroke();
		textAlign(CENTER);
		textSize(60);
		text("• WikiShorts", 660, 200);

		main_button.draw(obj_scroll);
	} else if (obj_scroll >= 2 && obj_scroll < 3) {
		background(80, 70, 100);
		noStroke();
		fill(0, 110, 110);
		ellipse(350, 0, 2 * (radius * (obj_scroll - 2)), 2 * (radius * (obj_scroll - 2)));

		fill(100, 40, 50);
		rect(0, 0, 350, windowHeight);

		main_button.draw(obj_scroll);
	} else if (obj_scroll >= 3 && obj_scroll < 4) {
		background(80, 70, 100);
		noStroke();
		fill(80, 60, 10);
		ellipse(350, 0, 2 * (radius * (obj_scroll - 3)), 2 * (radius * (obj_scroll - 3)));

		fill(100, 40, 50);
		rect(0, 0, 350, windowHeight);

		main_button.draw(obj_scroll);
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].draw(obj_scroll);
	}

}


class Button {
	constructor(x0, y0, y1, text, pow, scroll_set) {
		this.x0 = x0;
		this.xCur = x0;
		this.y0 = y0;
		this.yCur = y0;
		this.y1 = y1;
		this.text = text;
		this.pow = pow;
		this.scroll_set = scroll_set;
	}

	checkHover(x, y) {
		if (y > this.yCur + 90) {
		return 120;
		}
		if (x > this.xCur + 250) {
			return 120;
		}
		if (x < this.xCur) {
		  	return 120;
		}
		if (y < this.yCur) {
			return 120;
		}
		if (mouseIsPressed) {
			scroll = this.scroll_set;
			anim_speed = 0.1;
		}
		return 170;
	}

	draw(scroll) {
		if (scroll > this.scroll_set - 0.5 && scroll < this.scroll_set + 0.5) {
			fill(170);
			var button_scroll = min(scroll, 1);
			this.xCur = 50 + this.x0 * (1 - pow(button_scroll, this.pow));
			this.yCur = this.y0 - (this.y1 * pow(button_scroll, this.pow));
		} else {
			var button_scroll = min(scroll, 1);
			this.xCur = 50 + this.x0 * (1 - pow(button_scroll, this.pow));
			this.yCur = this.y0 - (this.y1 * pow(button_scroll, this.pow));
			fill(this.checkHover(mouseX, mouseY));
		}
	
		stroke(1);
		rect(this.xCur, this.yCur, 250, 90, 15);

		fill(0);
		noStroke();
		textAlign(CENTER);
		textSize(25);
		text(this.text, 120 + this.xCur, 55 + this.yCur);

	}
}