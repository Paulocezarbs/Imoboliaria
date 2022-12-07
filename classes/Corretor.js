export class Corretor {
    #nome;
    #CPF;
    #telefone;
    #corretora;
    #comissao;

    constructor(nome, CPF, telefone, corretora, comissao){
        this.nome = nome;
        if(CPF == ""){
            this.#CPF = "00000000000";
        }
        this.#CPF = CPF;
        this.telefone = telefone;
        this.corretora = corretora;
        this.comissao = comissao;
    }


    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
        return this.#nome;
    }

    get CPF(){
        return this.#CPF;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(telefone){
        if(telefone.length != 11){
            this.#telefone = "00000000000";
            return this.#telefone;
        }
        this.#telefone = telefone;
        return this.#telefone;

    }

    get corretora(){
        return this.#corretora;
    }

    set corretora(corretora){
        if(corretora == ""){
            this.#corretora = "Sem corretor";
            return this.#corretora;
        }
        this.#corretora = corretora;
        return this.#corretora;
    }

    get comissao(){
        return this.#comissao;
    }

    set comissao(comissao){
        if(comissao <=0){
            this.#comissao = 0;
            return this.#comissao;
        }
        this.#comissao = comissao;
        return this.#comissao;
    }

}