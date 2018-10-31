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

//*******************
//       Zoom
//*******************

let width = canva.width;
let height = canva.height;
let scale = 1;
let syntheticEvent = new WheelEvent("syntheticWheel", {
  deltaY: 0,
  deltaMode: 0
});

canva.addEventListener("wheel", function(e) {
  if (e.deltaY > syntheticEvent.deltaY) {
    scale += 0.1;
  } else {
    scale -= 0.1;
  }

  let newWidth = width * scale;
  let newHeight = height * scale;
  c.save();
  c.translate(-((newWidth - width) / 2), -((newHeight - height) / 2));
  c.scale(scale, scale);
  c.clearRect(0, 0, width, height);

  drawFractal(canva.width / 2, canva.height / 2, 150);
  c.restore();
});
