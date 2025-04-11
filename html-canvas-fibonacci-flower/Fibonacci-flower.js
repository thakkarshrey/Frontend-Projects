const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// This will take the drawings behind the back
// ctx.globalCompositeOperation = "destination-over";
// This will take the drawings behind the back

let number = 0;
let hue = 0;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function moveCircle() {
  let angle = number * 1;
  let radius = 10 * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.beginPath();
//   ctx.fillStyle = `hsl(${hue},100%,50%)`;
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 4;
  ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);

/* This will increase the number dynamically */
//   ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
/* This will increase the number dynamically */

  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  number++;
  hue++;
}

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveCircle();
  requestAnimationFrame(animate);
}
animate();
