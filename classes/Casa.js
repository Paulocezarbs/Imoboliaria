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

    tipo(){
        return "Casa";
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

        let divPreco = document.createElement("div");
        divPreco.classList.add("div-preco");

        let preco = document.createElement("p");

        let tituloImovel = document.createElement("p");
        tituloImovel.classList.add("tipo-imovel");

        let areaTotal = document.createElement("p");
        areaTotal.classList.add("tipo-detalhes");

        let areaConstruida = document.createElement("p");
        areaConstruida.classList.add("tipo-detalhes");

        let enderecoImovel = document.createElement("p");
        enderecoImovel.classList.add("tipo-detalhes");

        let corretorImovel = document.createElement("p");
        corretorImovel.classList.add("tipo-detalhes");

        preco.textContent = "R$" + (super.preco).toFixed(2);

        divPreco.appendChild(preco);

        tituloImovel.textContent = "Casa em " + super.cidade;
        divInfo.appendChild(tituloImovel);

        areaConstruida.textContent = "Área Construida: " + this.areaConstruida() + "m²";
        divInfo.appendChild(areaConstruida);
 
        areaTotal.textContent = "Área Total: " + super.areaTotal + "m²";
        enderecoImovel.textContent = "Endereço: " + super.enderecoImovel();

        corretorImovel.textContent = "Corretor(a): " + super.corretor.nome + " - Tel.: " + super.corretor.telefone;

        divInfo.appendChild(areaTotal);
        divInfo.appendChild(enderecoImovel);
        divInfo.appendChild(corretorImovel);
       

        divImovel.appendChild(divInfo);
        divImovel.appendChild(divPreco);

    return divImovel;
    }
}