import { Imovel } from "./Imovel.js";

export class Casa extends Imovel {
    #areaLivre;
    #qtdAndares;

    constructor(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, img, areaLivre, qtdAndares) {
        super(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, img);
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
        + "Quantidade de andares: " + this.#qtdAndares + " andar(es);";
    }

    div(){
        let divImovel = document.createElement("div");
        divImovel.classList.add("imovel"); 

        let imgImovel = document.createElement("img");
        imgImovel.classList.add("img-imovel");
        imgImovel.src = "../imagens-imoveis/" + super.img; //Atribui um caminho personalizado para o src da img Ex.: ../imagens-imoveis/Apartamento001.jpg
        imgImovel.classList.add("img-imovel");
        divImovel.appendChild(imgImovel);

        let divInfo = document.createElement("div");
        divInfo.classList.add("informacoes-imovel");

        let tituloImovel = document.createElement("p");
        tituloImovel.classList.add("tipo-imovel");

        let areaTotal = document.createElement("p");
        areaTotal.classList.add("tipo-detalhes");

        let areaConstruida = document.createElement("p");
        areaConstruida.classList.add("tipo-detalhes");

        let enderecoImovel = document.createElement("p");
        enderecoImovel.classList.add("tipo-detalhes");

        let divPreco = document.createElement("div");
        divPreco.classList.add("div-preco");

        let preco = document.createElement("p");
        preco.classList.add("tipo-detalhes");
        preco.classList.add("preco");

        tituloImovel.textContent = "Casa em " + super.cidade;
        areaConstruida.textContent = "Área Construida: " + this.areaConstruida() + "m²";
        areaTotal.textContent = "Área Total: " + super.areaTotal + "m²";
        enderecoImovel.textContent = "Endereço: " + super.enderecoImovel();
        preco.textContent = "Preço: R$" + super.preco;
        
        divInfo.appendChild(tituloImovel);
        divInfo.appendChild(areaConstruida);
        divInfo.appendChild(areaTotal);
        divInfo.appendChild(enderecoImovel);
        divImovel.appendChild(divInfo);
        
        divImovel.appendChild(divPreco);
        divPreco.appendChild(preco);

    return divImovel;
    }
}