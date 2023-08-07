export class Pergunta {
    constructor(pergunta, a, b, c, d, correta) {
        this.pergunta = pergunta
        this.a = a
        this.b = b
        this.c = c
        this.d = d
        this.correta = correta
    }

    resp_verifica(resposta) {
        return resposta.toUpperCase() === this.correta.toUpperCase()
    }
}

// new Pergunta(pergunta, a, b, c, d, correta)