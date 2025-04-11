const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = []
let hue = 0
// creating a rectangle again on resize function so that everytime we resize out screen the element does not gets stretched

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 5; i++) {
    const particle = new Particle()
      particlesArray.push(particle)
  }
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 10; i++) {
    const particle = new Particle()
      particlesArray.push(particle)
  }
});


/* **** Creating a new class for particles. **** */
// 1. Here what i have done is that created random x and y variables and assigned random values from width and height of canvas
// 2. Then i have given random size of the particle
// 3. SpeedX and SpeedY are the random speed positions where the particles will move. It is between +1.5 to -1.5
// 4. What happens is that inside the update() function i am incrementing the x position with previous x + the speedX.
// 5. Inside the drawCircle() function is the main function where our circle is drawn.

class Particle {
  constructor() {
    this.x = mouse.x
    this.y = mouse.y
    this.size = Math.random() * 15;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue},100% ,50%)`
  }
  updateTheCirclesPosition() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    if(this.size > 0.3) this.size = this.size - 0.1
  }
  drawCircle() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
/* **** Creating a new class for particles. **** */


/* Function definition where i am looping through the random particles array created with 100 random particles and calling the update and draw circle function */
function handleDisplayParticles(){
  for (let j = 0; j < particlesArray.length; j++) {
    const element = particlesArray[j];
    element.updateTheCirclesPosition()
    element.drawCircle()
    for (let k = j; k < particlesArray.length; k++) {
        const element = particlesArray[k];
        const dx = particlesArray[j].x - particlesArray[k].x
        const dy = particlesArray[j].y - particlesArray[k].y
        const distance = Math.sqrt((dx*dx) + (dy*dy))
        if(distance < 100){
            ctx.beginPath()
            ctx.strokeStyle = particlesArray[j].color
            ctx.lineWidth = 0.2
            ctx.moveTo(particlesArray[j].x, particlesArray[j].y)
            ctx.lineTo(particlesArray[k].x, particlesArray[k].y)
            ctx.stroke()
        }
    }
    if(particlesArray[j].size <= 0.3){
      particlesArray.splice(j,1)
      j--
    }
  }
}
/* Function definition where i am looping through the random particles array created with 100 random particles and calling the update and draw circle function */


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "rgba(0,0,0,0.03)"
    // ctx.fillRect(0,0,canvas.width,canvas.height)
    handleDisplayParticles()
    hue+=2
    requestAnimationFrame(animate);
}
animate();
