import { Celda } from "./celda.js";
class Tablero {
  constructor(x, y, bombs) {
    this.x = x;
    this.y = y;
    this.bombs = null;
    this.#validate(bombs);
    this.matriz = this.#generate();
  }
  show(x, y) {
    let bombs = 0;
    let celda = this.matriz[`${x},${y}`];
    if (celda.flagged == false) {
      if (celda?.hasBomb == false) {
        //ariba
        if (this.matriz[`${x},${y - 1}`]?.hasBomb == true) bombs++;
        //abajo
        if (this.matriz[`${x},${y + 1}`]?.hasBomb == true) bombs++;
        //Derecha
        if (this.matriz[`${x + 1},${y}`]?.hasBomb == true) bombs++;
        //Izquierda
        if (this.matriz[`${x - 1},${y}`]?.hasBomb == true) bombs++;
        //Arriba-Izquierda
        if (this.matriz[`${x - 1},${y - 1}`]?.hasBomb == true) bombs++;
        //Abajo-Izquierda
        if (this.matriz[`${x - 1},${y + 1}`]?.hasBomb == true) bombs++;
        //Ariiba-Derecha
        if (this.matriz[`${x + 1},${y - 1}`]?.hasBomb == true) bombs++;
        //Abajo-Derecha
        if (this.matriz[`${x + 1},${y + 1}`]?.hasBomb == true) bombs++;
      }
      celda.unCover(bombs);
    }
  }

  #validate(bombs) {
    console.log(bombs);
    if (bombs <= this.x * this.y) {
      this.bombs = bombs;
    } else {
      alert("No c pode");
      throw new Error("El numero de bombas es mayor que el numero de celdas");
    }
  }

  #generate() {
    let celdas = [];
    let numMines = document.getElementById("mines");
    numMines.textContent = "Minas restantes: " + this.bombs;
    for (let i = 0; i < this.y; i++) {
      for (let p = 0; p < this.x; p++) {
        celdas.push([`${p},${i}`, new Celda(p, i, false)]);
      }
    }

    for (let i = 0; i < this.bombs; i++) {
      while (true) {
        let randomPos = Math.floor(Math.random() * celdas.length);
        console.log(randomPos);
        if (celdas[randomPos][1].hasBomb == false) {
          celdas[randomPos][1].hasBomb = true;
          break;
        }
      }
    }

    const celdasObj = Object.fromEntries(celdas);

    return celdasObj;
  }
  flag(x, y) {
    let celda = this.matriz[`${x},${y}`];
    let numMines = document.getElementById("mines");
    if (celda.flagged == false) {
      this.bombs--;
      numMines.textContent = "Minas restantes: " + this.bombs;
      celda.flag();
    }else{this.bombs++;
      numMines.textContent = "Minas restantes: " + this.bombs;
      celda.unFlag()
    }
  }
  if () {
    
  }
}
export { Tablero };
