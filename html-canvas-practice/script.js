const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let particlesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let drawing = false
let hue = 0


let mouseCoordinates = {
  x:null,
  y:null
}

class Particle {
  constructor(x, y, n, radius, innerRadius) {
    this.mouseX = x;
    this.mouseY = y;
    this.n = n;
    this.radius = radius;
    this.innerRadius = innerRadius
  }
  draw() {

    ctx.fillStyle = `white`;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'black'
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;

    ctx.beginPath();
    ctx.save();
    ctx.translate(this.mouseX, this.mouseY);
    ctx.moveTo(0, 0 - this.radius);

    for (let index = 0; index < this.n * 2; index++) {
      ctx.rotate(Math.PI / this.n);
      ctx.lineTo(0, 0 - this.radius * this.innerRadius);
      ctx.rotate(Math.PI / this.n);
      ctx.lineTo(0, 0 - this.radius);
    }

    ctx.closePath();
    ctx.restore();
    ctx.fill();
    ctx.stroke()
  }
}

let angle = 0
window.addEventListener("mousemove",function(event){
  if(drawing){
    ctx.save()
    ctx.translate(event.x, event.y)
    ctx.rotate(angle)
    handleParticle(0, 0, 1.5, 100, 1);
    angle +=0.1
    ctx.rotate(angle / 2)
    handleParticle(100, 0, 40, 50, 0.4);
    hue+=3
    ctx.restore()
  }
})

window.addEventListener("mousedown",function(event){
  drawing = true
})

window.addEventListener("mouseup",function(){
  drawing = false
})

function handleParticle(x, y, n, radius, innerRadius) {
  const element = new Particle(x, y, n, radius, innerRadius);
  element.draw()
}

