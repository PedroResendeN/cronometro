const segDiv = document.querySelector(".seg");
const minDiv = document.querySelector(".min");
const horaDiv = document.querySelector(".hora");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let seg = 0;
segDiv.innerText = seg;

let min = 0;
minDiv.innerText = min;

let hora = 0;
horaDiv.innerText = hora;

let intervalo;

playBtn.addEventListener("click", () => {
  if (!intervalo) {
    intervalo = setInterval(() => {
      seg += 1;
      segDiv.innerText = seg;

      if (seg === 60) {
        seg = 0;
        segDiv.innerText = seg;
        min += 1;
        minDiv.innerText = min;
      }

      if (min === 60) {
        min = 0;
        minDiv.innerText = min;
        hora += 1;
        horaDiv.innerText = hora;
      }
    }, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  seg = 0;
  segDiv.innerText = seg;
  min = 0;
  minDiv.innerText = min;
  hora = 0;
  horaDiv.innerText = hora;
});
