export function criarDivImoveis(vetImoveis){
let divImoveis = document.createElement("div");
divImoveis.classList.add("imoveis");
    for(let i = 0; i < vetImoveis.length; i++){
        divImoveis.appendChild(vetImoveis[i].div());
    }
    return divImoveis;
}