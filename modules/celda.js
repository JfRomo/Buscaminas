class Celda {
  constructor(x, y, hasBomb) {
    this.x = x;
    this.y = y;
    this.hasBomb = hasBomb;
    this.cover = true;
    this.flagged = false;
    this.alive = true;
  }
  unCover(bombs) {
    this.cover = false;
    const boton = document.getElementById(`${this.x},${this.y}`);
    boton.disabled = true;
    if (this.hasBomb === true) {
      boton.textContent = "X";
      boton.classList.add("bomb");
      this.alive = false
      //alert("Ti moriste wey");
    } else {
      boton.classList.add("clicked");
      if (bombs > 0) boton.textContent = bombs;
    }
  }
  flag() {
    if (this.cover == true) {
      this.flagged = true;
      const boton = document.getElementById(`${this.x},${this.y}`);
      boton.textContent = "F";
      boton.classList.add("flag");
    }
  }
  unFlag(){
    if(this.flagged == true){
      this.flagged = false;
      const boton = document.getElementById(`${this.x},${this.y}`);
      boton.textContent = "";
    }
  }
}
export { Celda };
