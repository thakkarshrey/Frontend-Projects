const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
let hue = 0;

const titleElement = document.getElementById("title");
let titleCoOrdinates = titleElement.getBoundingClientRect();

let tempTitleCoOrdinates = {
  x: titleCoOrdinates.x,
  y: titleCoOrdinates.y,
  width: titleCoOrdinates.width,
  height: 10,
};

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  titleCoOrdinates = titleElement.getBoundingClientRect();
  tempTitleCoOrdinates = {
    x: titleCoOrdinates.x,
    y: titleCoOrdinates.y,
    width: titleCoOrdinates.width,
    height: 10,
  };
});

class Particle {
  constructor(x, y) {
    this.mouseX = x;
    this.mouseY = y;
    this.size = Math.random() * 25 + 1;
    this.directionX = 2;
    this.weight = Math.random() * 1 + 1;
    this.color = `hsl(0,100%,50%)`
  }
  updateParticlePosition() {
    if (this.mouseY > canvas.height) {
      this.mouseY = 0 - this.size;
      this.weight = Math.random() * 1 + 1;
      this.mouseX = Math.random() * canvas.width * 1.3;
      this.color = `hsl(${hue},100%,50%)`
    }
    this.weight += 0.03;
    this.mouseY += this.weight;
    this.mouseX += this.directionX;

    /* Check if the particles are colliding to the title or not */
    if (
      this.mouseX < tempTitleCoOrdinates.x + tempTitleCoOrdinates.width &&
      this.mouseX + this.size > tempTitleCoOrdinates.x &&
      this.mouseY < tempTitleCoOrdinates.y + tempTitleCoOrdinates.height &&
      this.mouseY + this.size > tempTitleCoOrdinates.y
    ) {
      this.mouseY -= 3;
      this.weight *= -0.5;
    }
    /* Check if the particles are colliding to the title or not */
  }
  drawParticle() {
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.mouseX, this.mouseY, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const element = new Particle(x, y);
    particlesArray.push(element);
  }
}
init();

function handleParticle() {
  for (let index = 0; index < particlesArray.length; index++) {
    const element = particlesArray[index];
    element.updateParticlePosition();
    element.drawParticle();
  }
}

function animate() {
  ctx.fillStyle = `rgba(255,255,255,0.05)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  hue++
  handleParticle();
  requestAnimationFrame(animate);
}

animate();
