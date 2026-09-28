// Me embolei nomeando as functions, e demorei para conseguir fazer rodar
function receberElementos(){
    let quantidade = Number(prompt("digite quantos elementos quer adicionar: "))
    return quantidade
}
function percorrerElementos(quantidade){
    let elementos = []
    let qtds = quantidade
    for(let i = 0; i < qtds; i++ ){
        let elemento = Number(prompt("Digite o elemento " + (i + 1) + " : "))
        elementos.push(elemento)
    }
    return elementos
}
function somarElementos(el){
    let soma = 0
    for(let i = 0; i < el.length; i++){
        soma += el[i]
    }
    return soma
}
function imprimirSoma(soma){
    console.log(soma)
}
let quantidade = receberElementos()
let el = percorrerElementos(quantidade)
let soma = somarElementos(el)
imprimirSoma(soma)