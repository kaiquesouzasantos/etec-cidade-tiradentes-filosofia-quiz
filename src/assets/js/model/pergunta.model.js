export class Pergunta {
    constructor(pergunta, a, b, c, d, correta) {
        this.pergunta = pergunta
        this.a = a
        this.b = b
        this.c = c
        this.d = d
        this.correta = this.correta(correta)
    }

    resp_correta(correta) {
        switch(correta) {
            case "a": case "A":
                return this.a
            case "b": case "B":
                return this.b
            case "c": case "C":
                return this.c
            case "d": case "D":
                return this.d
            default:
                return "404"
        }
    }

    resp_verifica(resposta) {
        return resposta == this.correta
    }
}

// new Pergunta(pergunta, a, b, c, d, correta)