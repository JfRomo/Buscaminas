import { Tablero } from "./modules/tablero.js";

let game = document.getElementById("game");
let tablero = new Tablero(1, 1, 2);
let templateTablero = "";
for (let p = 0; p < tablero.y; p++) {
  let botones = "";
  for (let i = 0; i < tablero.x; i++) {
    botones += `<button id="${i},${p}">${i},${p}</button>`;
  }
  templateTablero += `<p>
          ${botones}
      </p>`;
}

game.innerHTML = templateTablero;

for (let p = 0; p < tablero.y; p++) {
  for (let i = 0; i < tablero.x; i++) {
    let boton = document.getElementById(`${i},${p}`);
    console.log(boton);
    boton.addEventListener("click", () => {
      tablero.show(i, p)
    });
  }
}
