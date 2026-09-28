
// Tive dificuldade pela quantidade de informações, mas não achei dificil em si se fizer passo a passo, precisei de alguem me ajudando
function valorBruto(){
    function valor(){
        let valor = Number(prompt("digite o valor da compra aqui: "))
        return valor
    }
    function desconto(){
        let percentual = Number(prompt("Qual o percentual de desconto da compra ?"))
        return percentual
    }
    function aplicarDesconto(v, p){
        let valorFinal = v * (1 - p/100)
        return valorFinal
    }
    function imprimirValorFinal(vf){
        alert(`O valor final é de R$${vf}`)
    }
    let v = valor()
    let p = desconto()
    let vf = aplicarDesconto(v, p)
    imprimirValorFinal(vf)
    return vf
}
let vb = valorBruto()

function processarVenda(vb){
    function aplicandoDesconto(){
        let t = vb * (1 - 10/100)
        return t
    }
    function verificaçãodoValorBruto(vb){
        if(vb >= 100){
            let total = aplicandoDesconto()
            return total
        }else{
            let total = vb
            return total
        }
    }
    function imprimirTotalcomousemDesconto(final){
        alert(`O total é R$${final}`)
    }
    let final = verificaçãodoValorBruto(vb)
    imprimirTotalcomousemDesconto(final)
}
processarVenda(vb)