export function criarDivImoveis(vetImoveis, filtroArea, tipoImovel){
let divImoveis = document.createElement("div");
divImoveis.classList.add("imoveis");
    for(let i = 0; i < vetImoveis.length; i++){
        let imovel = vetImoveis[i];
        if( (imovel.areaTotal >= filtroArea[0] && ((imovel.areaTotal <= filtroArea[1]) || filtroArea[1] == 0))
        && (tipoImovel.indexOf(imovel.tipo()) > -1 || tipoImovel.length == 0)){
            divImoveis.appendChild(vetImoveis[i].div());
        }
        
    }

    return divImoveis;
}