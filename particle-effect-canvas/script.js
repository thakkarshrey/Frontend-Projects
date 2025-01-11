document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(ctx);

  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";

  class Particle {
    constructor(effect) {
      this.effect = effect;
      this.width = this.effect.width;
      this.height = this.effect.height;
      this.radius = Math.random() * 12;
      this.x = this.radius + Math.random() * (this.width - this.radius * 2);
      this.y = this.radius + Math.random() * (this.height - this.radius * 2);
      this.velocityx = Math.random() * 1 - 0.5;
      this.velocityy = Math.random() * 1 - 0.5;
    }

    draw(context) {
      context.fillStyle = `hsl(${this.x * 0.5}, 100%, 50%)`;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fill();
    }

    update() {
      this.x += this.velocityx;
      if (this.x > this.width - this.radius || this.x - this.radius < 0)
        this.velocityx *= -1;

      this.y += this.velocityy;
      if (this.y > this.height - this.radius || this.y - this.radius < 0)
        this.velocityy *= -1;
    }
  }

  class Effect {
    constructor(canvas) {
      this.canvas = canvas;
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.particlesArray = [];
      this.noOfParticles = 100;
      this.createParticles();
    }

    createParticles() {
      for (let i = 0; i < this.noOfParticles; i++) {
        this.particlesArray.push(new Particle(this));
      }
    }

    drawParticles(context) {
      this.connectParticles(context);
      this.particlesArray.forEach((particle) => {
        particle.draw(context);
        particle.update();
      });
    }

    connectParticles(context) {
      const maxDistance = 100;
      for (let i = 0; i < this.particlesArray.length; i++) {
        for (let j = i; j < this.particlesArray.length; j++) {
          const dx = this.particlesArray[i].x - this.particlesArray[j].x;
          const dy = this.particlesArray[i].y - this.particlesArray[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            context.save();
            const opacity = 1 - distance / maxDistance;
            context.globalAlpha = opacity;
            context.beginPath();
            context.moveTo(this.particlesArray[i].x, this.particlesArray[i].y);
            context.lineTo(this.particlesArray[j].x, this.particlesArray[j].y);
            context.stroke();
            context.restore();
          }
        }
      }
    }
  }

  const effect = new Effect(canvas);
  effect.drawParticles(ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.drawParticles(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
