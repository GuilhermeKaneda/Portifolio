//Aprender a manipular o DOM
//Definir qual elemento do HTML eu vou pegar
/*

    LOCALIZADORES
    ID -> #id
    CLASSE -> .classe

*/

//Pegar um elemento HTML
//A variável constante 'usuario' pega o elemento do HTML pela id 'usuario'
const usuario = document.getElementById('usuario').value
const senha = document.querySelector('#senha').value

const usuarioPermitido = "NewGate"
const senhaPermitida = "NewGate"

const botao = document.querySelector('#enviar')

botao.addEventListener("click", (evento) =>{
    evento.preventDefault()
    
    //alert("Você apertou o enviar!")
    const usuario = document.getElementById('usuario').value
    const senha = document.querySelector('#senha').value

    if (usuario === usuarioPermitido && senha === senhaPermitida){
        alert("Bem Vindo!")
        window.location.assign("redirect.html")        
    } else {
        alert("Volta pra base!")
        window.location.assign("./index.html")
    }

    global_user = usuario
    global_password = senha

    console.log(global_user, global_password)
})

console.log(usuario, senha)