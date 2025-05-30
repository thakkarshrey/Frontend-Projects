const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = []

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
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});


/* **** Creating a new class for particles. **** */
// 1. Here what i have done is that created random x and y variables and assigned random values from width and height of canvas
// 2. Then i have given random size of the particle
// 3. SpeedX and SpeedY are the random speed positions where the particles will move. It is between +1.5 to -1.5
// 4. What happens is that inside the update() function i am incrementing the x position with previous x + the speedX.
// 5. Inside the drawCircle() function is the main function where our circle is drawn.

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 15;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  updateTheCirclesPosition() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    if(this.size > 0.3) this.size = this.size - 0.1
  }
  drawCircle() {
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
/* **** Creating a new class for particles. **** */


/* Here inside the init function i am running a for loop and creating a new instance of a randomized particle and pushing it into the array */
function init(){
  for(let  i = 0; i<100; i++){
    const particle = new Particle()
    particlesArray.push(particle)
  }
}
init()
/* Here inside the init function i am running a for loop and creating a new instance of a randomized particle and pushing it into the array */


/* Function definition where i am looping through the random particles array created with 100 random particles and calling the update and draw circle function */
function handleDisplayParticles(){
  for (let j = 0; j < particlesArray.length; j++) {
    const element = particlesArray[j];
    element.updateTheCirclesPosition()
    element.drawCircle()
    if(particlesArray[j].size <= 0.3){
      particlesArray.splice(j,1)
      j--
    }
  }
}
/* Function definition where i am looping through the random particles array created with 100 random particles and calling the update and draw circle function */


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleDisplayParticles()
    requestAnimationFrame(animate);
}
animate();
