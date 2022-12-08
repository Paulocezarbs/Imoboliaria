export class Apartamento{
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

    toSting(){
        return super.toSting() + "Andar: " + this.#andar + "º andar.";
    }

}