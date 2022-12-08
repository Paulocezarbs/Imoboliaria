import {Imovel} from "./Imovel.js";

class Terreno extends Imovel{
#inclinacao;
#ehCercado;

constructor(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, inclinacao,ehCercado){
super(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP); // chama o construtor de imovel.js

this.inclinacao = inclinacao;
this.ehCercado = ehCercado;

}

get inclinacao (){
    return this.#inclinacao;
}

set inclinacao (inclinacao){
   if(inclinacao > 90 || inclinacao < 0 ){
    this.#inclinacao = 0;
    return this.#inclinacao;
   }

   this.#inclinacao = inclinacao;
   return inclinacao;
}

get ehCercado(){
    return this.#ehCercado;
}

set ehCercado(ehCercado){
if(ehCercado != 1 && ehCercado != 0 ){
    ehCercado = 0;
    return 0;
}
this.#ehCercado = ehCercado;
return ehCercado;

}

toString(){
    return super.toString() 
    + "Inclinação: " + this.#inclinacao + "º" + ";\n"
    + "Cercado: " + (this.#ehCercado == 1 ? "Sim" : "Não") + ".\n";
}

}