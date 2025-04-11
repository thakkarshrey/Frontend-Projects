const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let drawing = false

/* Function definition to draw a line */
// function drawLine(radius) {
//     ctx.strokeStyle = "green";
//   ctx.beginPath();
//   ctx.save();
//   ctx.translate(canvas.width / 2, canvas.height / 2);
//   ctx.moveTo(0, 0);
//   ctx.lineTo(0, 0 - radius);
//   ctx.restore();
//   ctx.stroke();
// }
// drawLine(200)
/* Function definition to draw a line */


/* Function definition to draw a hexagon - Infact you can draw any shape by manipulating just the value divided by Math.PI */
// function drawHexagon(radius) {
//   ctx.strokeStyle = "red";
//   ctx.beginPath();
//   ctx.save();
//   ctx.translate(canvas.width / 2, canvas.height / 2);
//   ctx.moveTo(0, 0);
//   ctx.lineTo(0, 0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0, 0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0, 0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0, 0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0, 0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0, 0 - radius);
//   ctx.rotate(Math.PI / 3);
//   ctx.lineTo(0, 0 - radius);
//   ctx.restore();
//   ctx.stroke();
// }
// drawHexagon(200)
/* Function definition to draw a hexagon */


/* Function definition to draw a star */
function drawStar(x, y, radius, inset, n) {
  ctx.fillStyle = 'cyan'
  ctx.shadowOffsetX = 5
  ctx.shadowOffsetY = 5
  ctx.shadowBlur = 5
  ctx.shadowColor = 'purple'
//   ctx.globalCompositeOperation = 'destination-over'
  ctx.beginPath();
  ctx.save();
  ctx.translate(x, y);
  ctx.moveTo(0, 0 - radius);
  for (let i = 0; i < n; i++) {
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0, 0 - radius * inset);
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0, 0 - radius);
  }
  ctx.closePath();
  ctx.restore();
  ctx.fill()
}
drawStar(200, 200, 50, 0.5, 7)
drawStar(200, 200, 10, 0.5, 3)

let angle = 0
canvas.addEventListener("mousemove",function(event){
   if(drawing){ 
    ctx.save()
    ctx.translate(event.x,event.y)
    ctx.rotate(angle)
    angle+=0.08
    drawStar(0, 0, 30, 0.5, 7)
    drawStar(10, 10, 10, 0.5, 3)
    ctx.restore()
   }
})

canvas.addEventListener("mousedown",function(){
    drawing = true
})

canvas.addEventListener("mouseup",function(){
    drawing = false
})
/* Function definition to draw a star */


/* Practice drawing function */
// function practiceDrawStar(radius, inset, n) {
//     ctx.beginPath();
//     ctx.save();
//     ctx.translate(canvas.width / 2, canvas.height / 2);
    
//     ctx.moveTo(0, 0 - radius);
    
//     for (let index = 0; index < n; index++) {
//         ctx.rotate(Math.PI / n);
//         ctx.lineTo(0, 0 - radius * inset);
//         ctx.rotate(Math.PI / n);
//     ctx.lineTo(0, 0 - radius);
//   }

//   ctx.restore();
//   ctx.closePath();
//   ctx.stroke();
// }
// practiceDrawStar(100, 0.5, 10);

/* Practice drawing function */
