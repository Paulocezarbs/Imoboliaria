import { Imovel } from "./Imovel.js";

export class Apartamento extends Imovel{
    #andar;

    constructor(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, img, andar){
        super(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, img);
        this.andar = andar;
    }

    //Andar
    get andar(){
        return this.#andar;
    }

    set andar(andar){
        if(andar >= 1){
            this.#andar = andar;
            return andar;
        }
        this.#andar = 1;
        return 1;
    }

    toString(){
        return super.toString() + "Andar: " + this.#andar + "º andar.";
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

        let enderecoImovel = document.createElement("p");
        enderecoImovel.classList.add("tipo-detalhes");

        let andarAp = document.createElement("p");
        andarAp.classList.add("tipo-detalhes");

        preco.textContent = "R$" + (super.preco).toFixed(2);

        divPreco.appendChild(preco);

        tituloImovel.textContent = "Apartamento em " + super.cidade;
        divInfo.appendChild(tituloImovel);

        andarAp.textContent =  this.#andar + "º Andar";
        areaTotal.textContent = "Área Total: " + super.areaTotal + "m²";
        enderecoImovel.textContent = "Endereço: " + super.enderecoImovel();

        divInfo.appendChild(areaTotal);
        divInfo.appendChild(enderecoImovel);
        divInfo.appendChild(andarAp);

        divImovel.appendChild(divInfo);
        divImovel.appendChild(divPreco);

    return divImovel;
    }

}