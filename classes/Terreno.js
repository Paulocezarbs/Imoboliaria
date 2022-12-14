import { Imovel } from "./Imovel.js";

export class Terreno extends Imovel {
    #inclinacao;
    #ehCercado;

    constructor(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, img, inclinacao, ehCercado) {
        super(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, img); // chama o construtor de imovel.js

        this.inclinacao = inclinacao;
        this.ehCercado = ehCercado;


}
 
get inclinacao (){
    return this.#inclinacao;
}


    set inclinacao(inclinacao) {
        if (inclinacao > 90 || inclinacao < 0) {
            this.#inclinacao = 0;
            return this.#inclinacao;
        }

        this.#inclinacao = inclinacao;
        return inclinacao;
    }

    get ehCercado() {
        return this.#ehCercado;
    }

    set ehCercado(ehCercado) {
        if (ehCercado != 1 && ehCercado != 0) {
            ehCercado = 0;
            return 0;
        }
        this.#ehCercado = ehCercado;
        return ehCercado;

    }

    toString() {
        return super.toString()
            + "Inclinação: " + this.#inclinacao + "º" + ";\n"
            + "Cercado: " + (this.#ehCercado == 1 ? "Sim" : "Não") + ".\n";
    }

    tipo(){
        return "Terreno";
    }

    div() {
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

        let enderecoImovel = document.createElement("p");
        enderecoImovel.classList.add("tipo-detalhes");

        let inclinacao = document.createElement("p");
        inclinacao.classList.add("tipo-detalhes");

        let ehCercado = document.createElement("p");
        ehCercado.classList.add("tipo-detalhes");

        let corretorImovel = document.createElement("p");
        corretorImovel.classList.add("tipo-detalhes");

        preco.textContent = "R$" + (super.preco).toFixed(2);

        divPreco.appendChild(preco);

        tituloImovel.textContent = "Terreno em " + super.cidade;
        divInfo.appendChild(tituloImovel);

        areaTotal.textContent = "Área Total: " + super.areaTotal + "m²";
        enderecoImovel.textContent = "Endereço: " + super.enderecoImovel();
        inclinacao.textContent = "Inclinação: " + this.#inclinacao + "º - " + (this.#ehCercado == 1 ? " - Terreno cercado" : "Terreno não cercado");
        corretorImovel.textContent = "Corretor(a): " + super.corretor.nome + " - Tel.: " + super.corretor.telefone;

        divInfo.appendChild(areaTotal);
        divInfo.appendChild(enderecoImovel);
        divInfo.appendChild(inclinacao);
        divInfo.appendChild(ehCercado);
        divInfo.appendChild(corretorImovel);

        divImovel.appendChild(divInfo);
        divImovel.appendChild(divPreco);

        return divImovel;
    }

}