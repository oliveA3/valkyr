/*Snow-cursor Animation*/ {
	document.onmousemove = (e) => {
		let body = document.querySelector("body");
		let snow = document.createElement("span");
		let x = e.pageX;
		let y = e.pageY;
		let size = Math.random() * 35;

		snow.style.left = x + "px";
		snow.style.top = y + "px";
		snow.style.width = size + "px";
		snow.style.height = size + "px";

		body.appendChild(snow);

		setTimeout(() => {
			snow.remove();
		}, 2000);
	};
}

/*Snowflakes Animation*/ {
	const canvas = document.getElementById("snow_canvas");

	const ctx = canvas.getContext("2d");
	const snowflakes = [];

	class Snowflake {
		constructor() {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.size = Math.random() * 0.8;
			this.speed = Math.random() * 0.8 + 0.2;
		}
		update() {
			this.y += this.speed;
			if (this.y > canvas.height) {
				this.y = 0;
				this.x = Math.random() * canvas.width;
			}
		}
		draw() {
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	for (let i = 0; i < 100; i++) {
		snowflakes.push(new Snowflake());
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		snowflakes.forEach((snowflake) => {
			snowflake.update();
			snowflake.draw();
		});

		requestAnimationFrame(animate);
	}
	animate();
}

/*Dragon Animation*/ {

}