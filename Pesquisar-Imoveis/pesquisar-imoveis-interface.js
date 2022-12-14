import {vetImoveis} from "../dados/imoveis.js";
import {criarDivImoveis } from "./pesquisar-imoveis-operacoes.js";

var cbCasa = document.getElementById("cbCasa");
var cbApartamento = document.getElementById("cbApartamento");
var cbTerreno = document.getElementById("cbTerreno");
var inAreaMinima = document.getElementById("inAreaMinima");
var inAreaMaxima = document.getElementById("inAreaMaxima");
var btLimpar = document.getElementById("btLimpar");
var btFiltrar = document.getElementById("btFiltrar");
var sectionImoveis = document.querySelector(".sectionImoveis");

document.addEventListener("DOMContentLoaded", mostrarImoveis)

function mostrarImoveis (){
    let divImoveis = criarDivImoveis(vetImoveis, [0,0], []);
    sectionImoveis.innerText = "";
    sectionImoveis.appendChild(divImoveis);
}

function filtrarImoveis(){

    let filtroArea = [];
    let tipoImovel = [];

    let areaMaxima = Number(inAreaMaxima.value);
    let areaMinima = Number(inAreaMinima.value);

    filtroArea.push(areaMinima > 0 ? areaMinima : 0);
    filtroArea.push(areaMaxima > areaMinima ? areaMaxima : 0);

    inAreaMinima.value = filtroArea[0];
    inAreaMaxima.value = filtroArea[1] != 0 ? filtroArea[1] : "";

    if (cbApartamento.checked) {
        tipoImovel.push("Apartamento");
    }
    if (cbCasa.checked) {
        tipoImovel.push("Casa");
    }
    if (cbTerreno.checked) {
        tipoImovel.push("Terreno");
    }

    let divImoveis = criarDivImoveis(vetImoveis, filtroArea, tipoImovel);
    sectionImoveis.innerText = "";
    sectionImoveis.appendChild(divImoveis);

}

function limparFiltros() {

    cbApartamento.checked = false;
    cbCasa.checked = false;
    cbTerreno.checked = false;

    inAreaMinima.value = 0;
    inAreaMaxima.value = "";

    mostrarImoveis();
}


btFiltrar.addEventListener("click", filtrarImoveis);
btLimpar.addEventListener("click", limparFiltros);