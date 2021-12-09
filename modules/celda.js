class Celda {
  constructor(x, y, hasBomb) {
    this.x = x;
    this.y = y;
    this.hasBomb = hasBomb;
    this.cover = true;
  }
  unCover(bombs) {
    this.cover = false;
    const boton = document.getElementById(`${this.x},${this.y}`);
    boton.disabled = true;
    if (this.hasBomb === true) {
      boton.textContent = "X";
      boton.classList.add("bomb");
      //alert("Ti moriste wey");
    } else {
      boton.classList.add("clicked");
      if (bombs > 0) boton.textContent = bombs;
    }
  }
}
export { Celda };
