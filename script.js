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

	document.onclick = (e) => {
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
	const dragon = document.querySelector(".dragon_container");
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	function moveDragon() {
		let targetX = Math.random() * (screenWidth - 300);
		let targetY = Math.random() * (screenHeight - 300);

		if (screenWidth < 900) {
			targetX -= 80;
			targetY -= 80;
		}

		const duration = 2000;
		const startTime = performance.now();

		function updatePosition(currentTime) {
			const elapsedTime = currentTime - startTime;
			var progress = elapsedTime / duration;
			progress = Math.min(progress, 1);

			let newX = 200 + targetX * progress;
			let newY = 200 + targetY * progress;

			if (screenWidth < 900) {
				newX -= 70;
				newY -= 70;
			}

			const dx = targetX - 200;
			const dy = targetY - 200;
			const angle = Math.atan2(dy, dx);

			dragon.style.transform = `
            translate(${newX}px, ${newY}px)
            rotate(${angle * (200 / Math.PI)}deg)`;
			dragon.style.transition = `transform ${
				duration - elapsedTime
			}ms ease-out`;

			if (progress < 1) {
				requestAnimationFrame(updatePosition);
			}
		}
		requestAnimationFrame(updatePosition);
	}

	function animateWings() {
		const leftWing = document.querySelector(".left_wing");
		const rightWing = document.querySelector(".right_wing");

		leftWing.style.animation = "flapLeft 5s infinite linear";
		rightWing.style.animation = "flapRight 5s infinite linear";
	}

	dragon.addEventListener("mouseenter", () => {
		moveDragon();
		animateWings();
	});

	dragon.addEventListener("click", () => {
		moveDragon();
		animateWings();
	});
}
