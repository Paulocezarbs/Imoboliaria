import { Imovel } from "./Imovel.js";
export class Apartamento extends Imovel{
    #andar;

    constructor(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, andar){
        super(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP);
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

}