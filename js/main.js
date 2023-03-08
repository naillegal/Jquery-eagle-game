var a, b, vRain;

class Rain {
	constructor(x, y, l, v) {
		this.x = x;
		this.y = y;
		this.vy = v;
		this.l = l;
	}
	show() {
		b.beginPath();
		b.strokeStyle = 'white';
		b.moveTo(this.x, this.y);
		b.lineTo(this.x, this.y + this.l);
		b.stroke();
	}
	fall() {
		this.y += this.vy;
		if (this.y > a.height) {
			this.x = Math.floor(Math.random() * a.width) + 5;
			this.y = Math.floor(Math.random() * 100) - 100;
			this.l = Math.floor(Math.random() * 30) + 1;
			this.vy = Math.floor(Math.random() * 12) + 4;
		}
	}
}

function loop() {
	b.clearRect(0, 0, a.width, a.height);
	for (var i = 0; i < vRain.length; i++) {
		vRain[i].show();
		vRain[i].fall();
	}
}

function setup() {
	a = $('#canvas')[0];
	b = a.getContext('2d');
	vRain = [];
	for (var i = 0; i < 60; i++) {
		vRain[i] = new Rain(
			Math.floor(Math.random() * a.width) + 5,
			Math.floor(Math.random() * 100) - 100,
			Math.floor(Math.random() * 30) + 1,
			Math.floor(Math.random() * 12) + 4
		);
	}
	setInterval(loop, 10);
}

$(document).ready(function () {
	const player = $('#player img');
	let x = 0;
	let y = 0;
	$(document).keydown(function (event) {
		switch (event.keyCode) {
			case 37:
				x = x - 10;
				player.css({ 'left': x + 'px', 'transform': 'scaleX(-1)' });
				break;
			case 39:
				x = x + 10
				player.css({ 'left': x + 'px', 'transform': 'scaleX(1)' });
				break;
			case 38:
				y = y - 10;
				player.css('top', y + 'px');
				break;
			case 40:
				y = y + 10;
				player.css('top', y + 'px');
				break;

		}
	});
});
