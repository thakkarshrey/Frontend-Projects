window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const image = document.getElementById("image");
  const ctx = canvas.getContext("2d");
  canvas.width = this.window.innerWidth;
  canvas.height = this.window.innerHeight;

  /* Creating an individual particle */
  class Particle {
    constructor(effect, x, y, color) {
      this.effect = effect;
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.width;
      this.originX = Math.floor(x);
      this.originY = Math.floor(y);
      this.color = color;
      this.size = 2;
      this.ease = 0.1;
      this.vx = 0;
      this.vy = 0;
      this.dx = 0;
      this.dy = 0;
      this.distance = 0;
      this.angle = 0;
      this.force = 0;
      this.friction = 0.9
    }
    draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
      this.dx = this.effect.mouse.x - this.x
      this.dy = this.effect.mouse.y - this.y
      this.distance = this.dx * this.dx + this.dy * this.dy
      this.force = this.effect.mouse.radius / this.distance

      if(this.distance < this.effect.mouse.radius){
        this.angle = Math.atan2(this.dy, this.dx)
        this.vx += this.force * Math.cos(this.angle)
        this.vy += this.force * Math.sin(this.angle)
      }

      this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
      this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    }
    warp() {
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.height;
      this.base = 0.1;
    }
  }
  /* Creating an individual particle */

  /* Creating an effect for the particles created */
  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particlesArray = [];
      this.image = document.getElementById("image");
      this.centerX = this.width / 2;
      this.centerY = this.height / 2;
      this.x = this.centerX - this.image.width / 2;
      this.y = this.centerY - this.image.height / 2;
      this.pixelSize = 2;
      this.mouse = {
        radius:600,
        x:undefined,
        y:undefined
      }
      window.addEventListener("mousemove",event => {
        this.mouse.x = event.x
        this.mouse.y = event.y
      })
    }
    init(context) {
      context.drawImage(this.image, this.x, this.y);
      const pixels = context.getImageData(0, 0, this.width, this.height).data;
      console.log(pixels,'pixels')
      console.log(pixels.length,'pixels.length')
      for (let i = 0; i < this.height; i += this.pixelSize) {
        for (let j = 0; j < this.width; j += this.pixelSize) {
          const index = (i * this.width + j) * 4;
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const alpha = pixels[index + 3];
          const color = `rgb(${red}, ${green}, ${blue})`;

          if (alpha > 0) {
            this.particlesArray.push(new Particle(this, j, i, color));
          }
        }
      }
    }
    draw(context) {
      this.particlesArray.forEach((particle) => particle.draw(context));
    }
    update() {
      this.particlesArray.forEach((particle) => particle.update());
    }
    warp() {
      this.particlesArray.forEach((particle) => particle.warp());
    }
  }
  /* Creating an effect for the particles created */

  const effect = new Effect(canvas.width, canvas.height);
  effect.init(ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.draw(ctx);
    effect.update();
    requestAnimationFrame(animate);
  }
  animate();

  const warpButton = document.getElementById("warpButton");
  warpButton.addEventListener("click", function () {
    effect.warp();
  });
});
