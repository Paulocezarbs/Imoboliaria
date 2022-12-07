import { Imovel } from "./Imovel.js";

class Casa extends Imovel {
    #areaLivre;
    #qtdAndares;

    constructor(areaLivre, qtdAndares) {
        this.areaLivre;
        this.qtdAndares;
    }

    get areaLivre() {
        return this.#areaLivre;
    }

    set areaLivre(areaLivre) {
        if (areaLivre <= 0) {
            this.#areaLivre = 0.0;
            return 0.0;
        }
        this.#areaLivre = areaLivre;
        return areaLivre;
    }

    get qtdAndares() {
        return this.#qtdAndares;
    }

    set qtdAndares(qtdAndares) {
        if (qtdAndares <= 0){
            this.#qtdAndares = 1;
            return 1;
        }
        this.#qtdAndares = qtdAndares;
        return qtdAndares;
    }

    toString (){
        return "Area livre: " + this.#areaLivre +
            "\nQuantidade de andares: " + this.#qtdAndares;
    }

    stringify (){
        return '\n{' + 
        '\n\t"areaLivre" : "' + this.#areaLivre + '" ,' + 
        '\n\t"qtdAndares" : "' + this.#qtdAndares + '" ,' +
        '\n}'; 
    }

    
}
