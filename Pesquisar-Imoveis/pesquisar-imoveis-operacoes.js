import { Apartamento } from "../classes/Apartamento.js";
import { Casa } from "../classes/Casa.js";
import { Terreno } from "../classes/Terreno.js";

export function criarCardImovel(imovel){

    let divImovel = document.createElement("div");
    divImovel.classList.add("imovel"); 

    let imgImovel = document.createElement("img");
    imgImovel.classList.add("img-imovel");

    imgImovel.src = "../imagens-imoveis/" + imovel.img; //Atribui um caminho personalizado para o src da img Ex.: ../imagens-imoveis/Apartamento001.jpg
    imgImovel.classList.add("img-imovel");
    divImovel.appendChild(imgImovel);

    let divInfo = document.createElement("div");
    divInfo.classList.add("informacoes-imovel");

    let tituloImovel = document.createElement("p");
    tituloImovel.classList.add("tipo-imovel");

    let cercado = document.createElement("p");
    cercado.classList.add("tipo-detalhes");

    let inclinacao = document.createElement("p");
    inclinacao.classList.add("tipo-detalhes");

    let areaConstruida = document.createElement("p");
    areaConstruida.classList.add("tipo-detalhes");

    let areaTotal = document.createElement("p");
    areaTotal.classList.add("tipo-detalhes");

    let enderecoImovel = document.createElement("p");
    enderecoImovel.classList.add("tipo-detalhes");

    let andarAp = document.createElement("p");
    andarAp.classList.add("tipo-detalhes");

divInfo.appendChild(tituloImovel);



// APARTAMENTOS
if(imovel instanceof Apartamento){
    tituloImovel.textContent = "Apartamento em " + imovel.cidade;
    andarAp.textContent =  imovel.andar + "º Andar";

//CASAS
}else if(imovel instanceof Casa){
    tituloImovel.textContent = "Casa em " + imovel.cidade;

    areaConstruida.textContent = "Área Construida: " + imovel.areaConstruida() + "m²";
    divInfo.appendChild(areaConstruida);

//TERRENOS
}else if(imovel instanceof Terreno){

    tituloImovel.textContent = "Terreno em " + imovel.cidade;
    cercado.textContent = imovel.ehCercado == 0 ? "Terreno: não cercado" : "Terreno: cercado";
    inclinacao.textContent = "Inclinação: " + imovel.inclinacao + "º";
}

    areaTotal.textContent = "Área Total: " + imovel.areaTotal + "m²";
    enderecoImovel.textContent = "Endereço: " + imovel.enderecoImovel();

    divInfo.appendChild(areaTotal);
    divInfo.appendChild(enderecoImovel);
    divInfo.appendChild(cercado);
    divInfo.appendChild(inclinacao);
    divInfo.appendChild(andarAp);

    divImovel.appendChild(divInfo);

    return divImovel;
}
