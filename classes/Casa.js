import { Imovel } from "./Imovel.js";

class Casa extends Imovel {
    #areaLivre;
    #qtdAndares;

    constructor(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, areaLivre, qtdAndares) {
        super(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP);
        this.areaLivre = areaLivre;
        this.qtdAndares = qtdAndares;
    }


// getters & setters

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


//métodos

    areaConstruida (){
        let area = super.areaTotal - this.areaLivre;
        return area;
    }

    toString (){
        return super.toString()  
        + "Area livre: " + this.#areaLivre + "m²;\n" 
        + "Quantidade de andares: " + this.#qtdAndares + "andar(es);";
    }
}