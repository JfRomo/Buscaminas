import { Celda } from "./modules/celda.js";
import { Tablero } from "./modules/tablero.js";
let x = prompt("Ingrese el ancho del tablero");
let y = prompt("Ingrese el alto del tablero");
let bombs = prompt("Ingrese el número de bombas");
let game = document.getElementById("game");
let tablero = new Tablero(x, y, bombs);
let templateTablero = "";

for (let p = 0; p < tablero.y; p++) {
  let botones = "";
  for (let i = 0; i < tablero.x; i++) {
    botones += `<button class="celda"id="${i},${p}"></button>`;
  }
  templateTablero += `<p class="cell">
          ${botones}
      </p>`;
}

game.innerHTML = templateTablero;

/*for (let p = 0; p < tablero.y; p++) {
  for (let i = 0; i < tablero.x; i++) {
    let boton = document.getElementById(`${i},${p}`);
    boton.addEventListener("click", (e) => {
        console.log(e.ctrlKey);
        tablero.show(i, p);
    });
  }
}*/

for (let p = 0; p < tablero.y; p++) {
  for (let i = 0; i < tablero.x; i++) {
    let boton = document.getElementById(`${i},${p}`);
    boton.addEventListener("click", (e) => {
      if (e.ctrlKey == true) {
        tablero.flag(i, p);
      } else {
        tablero.show(i, p);
      }
    });
  }
}
