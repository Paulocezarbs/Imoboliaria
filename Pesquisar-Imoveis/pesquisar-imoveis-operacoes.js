export function criarDivImoveis(vetImoveis, filtroArea, tipoImovel){

    let vetCardImoveis = [];
    
    for(let i = 0; i < vetImoveis.length; i++){
        let imovel = vetImoveis[i];
        if( (imovel.areaTotal >= filtroArea[0] && ((imovel.areaTotal <= filtroArea[1]) || filtroArea[1] == 0))
        && (tipoImovel.indexOf(imovel.tipo()) > -1 || tipoImovel.length == 0)){
            vetCardImoveis.push(vetImoveis[i].div());
        }

    }

    return vetCardImoveis;
}