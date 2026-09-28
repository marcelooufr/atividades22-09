/*Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar*/
// achei esse mais simples por ter aprendido no exercicio passado

function LeNumero(){
        let nmr = Number(prompt("Digite qualquer numero inteiro: "))
        return nmr
}

function ehPar(nmr){
    if(nmr % 2 == 0){
        return true
    }else{
        return false
    }
}

function imprimeResposta(r){
    if(r == true){
        alert("o numero é par")
    }
}

let n = LeNumero()
let resposta = ehPar(n)
imprimeResposta(resposta)

