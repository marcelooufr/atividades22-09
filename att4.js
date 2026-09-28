
// só tive as mesmas duvidas, de como utilizar os comandos, mas na logica de como fazer eu entendi
function calcularIMC(){
    let peso = Number(prompt("digite seu peso: "))
    let altura = Number(prompt("digite sua altura:  "))
    let IMC = peso / (altura * altura)
    if(IMC > 25){
        return console.log("Sobrepeso")
    }if(IMC > 18.5 && IMC < 25){
        return console.log("Peso normal")
    }else{
        return console.log("Abaixo do peso")
    }
    
}
console.log(calcularIMC())