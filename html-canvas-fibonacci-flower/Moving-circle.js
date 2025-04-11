const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let size = 20;
let positionX = canvas.width / 2;
let positionY = canvas.height / 2;
let angle = 0;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function moveCircle() {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.arc(positionX, positionY, size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  positionX += 10 * Math.sin(angle);
  positionY += 10 * Math.cos(angle);
  angle += 0.1;

  if (positionX === 600) {
    positionX = 0;
    positionY = 0;
  }
  moveCircle();
  requestAnimationFrame(animate);
}
animate();
