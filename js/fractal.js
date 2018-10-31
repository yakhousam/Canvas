const canva = document.querySelector("canvas");
canva.width = innerWidth - 20;
canva.height = innerHeight - 20;
canva.style.backgroundColor = "black";
let c = canva.getContext("2d");

c.strokeStyle = "white";
drawFractal(canva.width / 2, canva.height / 2, 150);

function drawFractal(x, y, r) {
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2, false);
  c.stroke();
  if (r > 2) {
    drawFractal(x + r, y, r * 0.5);
    drawFractal(x - r, y, r * 0.5);
    drawFractal(x, y + r, r * 0.5);
    drawFractal(x, y - r, r * 0.5);
  }
}

