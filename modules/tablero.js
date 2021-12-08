import { Celda } from "./celda.js";
class Tablero {
    constructor(x,y,bombs){
        this.x = x
        this.y = y
        let celda = new Celda(0,0,true)
        this.matriz = [celda]
        this.#validate(bombs)        
    }
    show(x,y){
        this.matriz[0].unCover()
    }   
    #validate(bombs){
        if (bombs <= this.x*this.y){
            this.bombs = bombs
        }
        else{
            alert("No c pode")
            throw new Error("El numero de bombas es mayor que el numero de celdas")
        }

    }

}
export { Tablero }