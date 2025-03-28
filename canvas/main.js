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
		new Button(600, but_h, 140, "Other projects", 1.27, 3),
		new Button(900, but_h, 0, "About Me", 2, 4)
		];
	main_button = new Button(0, but_h, 560, "Main Page", 1/60, 0);

  python_projects = [
    new ClickableText(500, 200, "• WikiShorts", "https://github.com/4b3c/WikiShorts"),
    new ClickableText(500, 290, "• MNIST Machine Learning", "https://github.com/4b3c/mnist_machine_learning"),
    new ClickableText(500, 380, "• Images to characters", "https://github.com/4b3c/image-to-character-art")
    ];

  robotics_projects = [
    new ClickableText(500, 200, "• CocoNuts 2023", "https://github.com/Coconuts2486-FRC/FRC-2023"),
    new ClickableText(500, 290, "• Bezier Curve Path Planner", "https://github.com/4b3c/bezier-curves"),
    new ClickableText(500, 380, "• Swerve Drive", "https://github.com/4b3c/RecusantDrive")
    ];

  other_projects = [
    new ClickableText(500, 200, "• Reddit Coddit", "https://4b3c.github.io/reddit-coddit-site/"),
    new ClickableText(500, 290, "• useles-converter-bot", "https://github.com/4b3c/useles-converter-bot")
    ];
  about_me = [
    new ClickableText(500, 200, "• nothing here yet", "https://example.com")
    ];
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
    scrl_hgt = (windowHeight * obj_scroll) * 0.9;
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

    for (var i = 0; i < python_projects.length; i++) {
      python_projects[i].draw((obj_scroll - 1), 255);
    }

    fill(100, 40, 50);
    quad(left, top_left - scrl_hgt, 350, (top_right * 0.675) - scrl_hgt, 350, bottom, left, bottom);

    main_button.draw(obj_scroll, (scroll - 0.5) * 310);
	} else if ((Math.round(obj_scroll * 100) / 100) >= 1 && obj_scroll < 2) {
		background(100, 40, 50);
		noStroke();
		fill(80, 70, 100);
		ellipse(350, 0, 2 * (radius * (obj_scroll - 1)), 2 * (radius * (obj_scroll - 1)));

		for (var i = 0; i < python_projects.length; i++) {
      python_projects[i].draw((obj_scroll - 1), 255);
    }
    for (var i = 0; i < robotics_projects.length; i++) {
      robotics_projects[i].draw(obj_scroll - 2, 255);
    }

    fill(100, 40, 50);
    rect(0, 0, 350, windowHeight);

		main_button.draw(obj_scroll, scroll * 255);
	} else if (obj_scroll >= 2 && obj_scroll < 3) {
		background(80, 70, 100);
		noStroke();
		fill(0, 110, 110);
		ellipse(350, 0, 2 * (radius * (obj_scroll - 2)), 2 * (radius * (obj_scroll - 2)));

    for (var i = 0; i < robotics_projects.length; i++) {
      robotics_projects[i].draw(obj_scroll - 2, 255);
    }
    for (var i = 0; i < other_projects.length; i++) {
      other_projects[i].draw(obj_scroll - 3, 255);
    }

    fill(100, 40, 50);
    rect(0, 0, 350, windowHeight);

		main_button.draw(obj_scroll);
	} else if (obj_scroll >= 3 && obj_scroll < 4) {
		background(80, 70, 100);
		noStroke();
		fill(80, 60, 10);
		ellipse(350, 0, 2 * (radius * (obj_scroll - 3)), 2 * (radius * (obj_scroll - 3)));

    for (var i = 0; i < other_projects.length; i++) {
      other_projects[i].draw(obj_scroll - 3, 255);
    }

    for (var i = 0; i < other_projects.length; i++) {
      other_projects[i].draw(obj_scroll - 3, 255);
    }
    for (var i = 0; i < about_me.length; i++) {
      about_me[i].draw(obj_scroll - 4, 255);
    }

    fill(100, 40, 50);
    rect(0, 0, 350, windowHeight);

		main_button.draw(obj_scroll);
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].draw(obj_scroll, 255);
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

	draw(scroll, a) {
		if (scroll > this.scroll_set - 0.5 && scroll < this.scroll_set + 0.5) {
			fill(170, 170, 170, a);
			var button_scroll = min(scroll, 1);
			this.xCur = 50 + this.x0 * (1 - pow(button_scroll, this.pow));
			this.yCur = this.y0 - (this.y1 * pow(button_scroll, this.pow));
		} else {
			var button_scroll = min(scroll, 1);
			this.xCur = 50 + this.x0 * (1 - pow(button_scroll, this.pow));
			this.yCur = this.y0 - (this.y1 * pow(button_scroll, this.pow));
      var rgb = this.checkHover(mouseX, mouseY)
			fill(rgb, rgb, rgb, a);
		}
	
		stroke(1, 1, 1, a);
		rect(this.xCur, this.yCur, 250, 90, 15);

		fill(0, 0, 0, a);
		noStroke();
		textAlign(CENTER);
		textSize(25);
		text(this.text, 120 + this.xCur, 55 + this.yCur);

	}
}

class ClickableText {
  constructor(x0, y0, text, pow, link) {
    this.x0 = x0;
    this.xCur = x0;
    this.y0 = y0;
    this.yCur = y0;
    this.text = text;
    this.link = link;
    noStroke();
    textAlign(CENTER);
    textSize(60);
    this.width = textWidth(this.text);
    this.height = textAscent() + textDescent();
  }

  checkHover(x, y, scroll) {
    if (y > this.yCur) {
    return 255;
    }
    if (x > this.xCur + this.width + (scroll * radius)) {
      return 255;
    }
    if (x < this.xCur + (scroll * radius)) {
      return 255;
    }
    if (y < this.yCur - this.height) {
      return 255;
    }
    if (mouseIsPressed) {
      window.open(this.link);
    }
    return 100;
  }

  draw(scroll, a) {
    if (mouseX > 350) {
      var rg = this.checkHover(mouseX, mouseY, scroll);
    } else {
      var rg = 255;
    }
    fill(rg, rg, 255, a);
  
    noStroke();
    textAlign(LEFT);
    textSize(60);
    text(this.text, this.xCur + (scroll * radius), this.yCur);

  }
}
