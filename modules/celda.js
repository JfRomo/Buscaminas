class Celda {
  constructor(x, y, hasBomb) {
    this.x = x;
    this.y = y;
    this.hasBomb = hasBomb;
    this.cover = true;
  }
  unCover() {
    this.cover = false;
    if (this.hasBomb === true) {
      alert("Ti moriste wey");
    }
  }
}
export { Celda };
