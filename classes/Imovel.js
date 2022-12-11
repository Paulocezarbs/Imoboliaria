export class Imovel{
    #preco;
    #areaTotal;
    #corretor;
    #logradouro;
    #bairro;
    #cidade;
    #UF;
    #CEP;
    #img;

    constructor(preco, areaTotal, corretor, logradouro, bairro, cidade, UF, CEP, img){
        this.preco = preco;
        this.areaTotal = areaTotal;
        this.corretor = corretor;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.UF = UF;
        this.CEP = CEP;
        this.img = img;
    }

    //Preco
    get preco(){
        return this.#preco;
    }
    set preco(preco){
        if (preco >= 0){
            this.#preco = preco;
            return preco;
        }
        this.#preco = 0.0;
        return 0.0;
    }

    //Area Total
    get areaTotal(){
        return this.#areaTotal;
    }
    set areaTotal(areaTotal){
        if (areaTotal >= 0){
            this.#areaTotal = areaTotal;
            return areaTotal;
        }
        this.#areaTotal = 0.0;
        return 0.0;
    }

    //Corretor
    get corretor(){
        return this.#corretor;
    }
    set corretor(corretor){
        if (corretor != null){
            this.#corretor = corretor;
            return corretor;
        }
        corretor = null;
        return null;
    }

    //Logradouro
    get logradouro(){
        return this.#logradouro;
    }
    set logradouro(logradouro){
        this.#logradouro = logradouro;
        return logradouro;
    }

    //Bairro
    get bairro(){
        return this.#bairro;
    }
    set bairro(bairro){
        this.#bairro = bairro;
        return bairro;
    }

    //Cidade
    get cidade(){
        return this.#cidade;
    }
    set cidade(cidade){
        this.#cidade = cidade;
        return cidade
    }

    //UF
    get UF(){
        return this.#UF;
    }
    set UF(UF){
        if (UF != "" && UF.length == 2){
            this.#UF = UF;
            return UF;
        }
        this.#UF = "XX";
        return "XX";
    }

    //CEP
    get CEP(){
        return this.#CEP;
    }
    set CEP(CEP){
        if (CEP != "" && CEP.length == 9){
            this.#CEP = CEP;
            return CEP;
        }
        this.#CEP = "000000000";
        return "000000000";
    }

    get img(){
        return this.#img;
    }

    set img(img){
        if( img == ""){
            this.#img = "../imagens-imoveis/imagem-padrao.jpeg";
            return this.#img;
        }
        this.#img = img;
        return img;
    }

    precoTotal(){
        return this.#preco = this.#preco + (this.#corretor.comissao / 100);
    }

    toString(){
        return "Preço: R$ " + this.precoTotal() + ";\n"
            + "Área Total: " + this.#areaTotal + ";\n"
            + "Corretor: " + this.#corretor.nome + ";\n"
            + "Telefone: "+ this.#corretor.telefone + ";\n"
            + "Endereço: " + this.#logradouro + ", " + this.#bairro + ", " + this.#cidade + " - " + this.#UF + ", CEP: " + this.#CEP + ";\n";
    }

}