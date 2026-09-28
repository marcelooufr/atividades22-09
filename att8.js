// achei esse mmais facil que o 7 e o 5, só me embolei com as functions
function validandoSenha(){
    function lesenha(){
        let senha = String(prompt("Qual a sua senha ? "))
        return senha 
    }
    function validarSenha(s){
        if(s.length >= 6){
            return true
        }else{
            return false
        }
    }
    let s = lesenha()
    return validarSenha(s)
}
function autenticandoUsuario(){
    function leusuario(){
        let usuario = String(prompt("Qual o seu nome ? "))
        return usuario
    }
    function autenticarSenha(u){
        if(validandoSenha() == true){
            alert(`Acesso concedido para o usuário ${u}`)
        }else{
            alert(`A senha é muito curta para o usuário ${u}`)
        }
    }
    let u = leusuario()
    autenticarSenha(u)
}
autenticandoUsuario()