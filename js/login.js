const inputEmail = document.querySelector("#idEmail");
inputEmail.addEventListener("focus", ()=>{
    inputEmail.setAttribute("style","outline-color: #ff0000;");
})

inputEmail.addEventListener("keyup", ()=>{

    const lblEmail = document.querySelector("label[for='idEmail']");
    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style","outline-color: #ff0000;");
        lblEmail.setAttribute("style","color: #ff0000;");
    }else{
        inputEmail.setAttribute("style","outline-color: #00ff00;");
        lblEmail.setAttribute("style","color: #00ff00;");
    }

    //inputEmail.setAttribute("style","outline-color: #ff0000;");
});

const inputSenha = document.querySelector("#idSenha");
const eyePass = document.querySelector(".fa");

eyePass.addEventListener("click", ()=>{
    const inputSenha = document.querySelector("#idSenha");
    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye-slash");
    }else{
       inputSenha.setAttribute("type","password");
       eyePass.setAttribute("class","fa fa-eye");
    }
});

//creation of objects in js
//const usuario1 = {
// nomeCompleto : "Lucas das Couves",
// emailUsuario : "lucas@gmail.com",
// senhaUsuario : "123456"
//}

//list of users

// let listaDeUsuarios = [
// {
//     nomeCompleto : "Lucas das Couves",
//     emailUsuario : "lucas@gmail.com",
//     senhaUsuario : "123456"
//     },
//     {
//     nomeCompleto : "Juan Pelego",
//     emailUsuario : "Juan@gmail.com",
//     senhaUsuario : "123456"
//     },
//     {
//     nomeCompleto : "Matheuzin Delgado",
//     emailUsuario : "Matheuzin@gmail.com",
//     senhaUsuario : "123456"
//     },
//     {
//     nomeCompleto : "Derick Maluco",
//     emailUsuario : "Derick@gmail.com",
//     senhaUsuario : "123456"
   
// }
// ];
//declarar LocalStorage:
//localStorage.setItem("key", String);
//localStorage.setItem("lista-user", JSON.stringify(listaDeUsuarios));

const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{
    //Criando um Objeto USUÁRIO LOGADO
    let userLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    let userValidado = {};
//criando uma interação com a lista de objetos para realizar a validação
//com o usuarioValidado
try{
    //Recuperando o LocalStorage

    let listaDeUsuarios = JSON.parse(localStorage.getItem("lista-user")); 

    listaDeUsuarios.forEach((usuario)=>{
    //realizando a validação
    //comparando cada objeto da lista com o objeto monstado com os dados que vieram do form
    if(userLogado.emailUsuarioLogado == usuario.emailUsuario && userLogado.senhaUsuarioLogado == usuario.senhaUsuario){
        userValidado = usuario;
        throw "VALIDADO";
}
});

throw "senha errada";
}catch(msg){

    const msgStatus = document.querySelector("#msgStatus");

    if(msg == "VALIDADO"){
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>Usuário: ${userValidado.nomeCompleto} 
        Login efetuado com Sucesso!</strong></span>`;

        //ADICIONANDO O USUARIO-VALIDADO NO LOCAL-STORAGE
        localStorage.setItem("user-validado", JSON.stringify(userValidado));

        //Criando um token com o Math.randon 0.gt4g3f3gf
        const token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
        //alert(token);

        //ADICIONANDO O TOKEN NO LOCAL-STORAGE
        localStorage.setItem("user-token", token);

        //Redirect
        setTimeout(()=>{
            window.location.href = "../home.html";
        }, 300);

    }else{
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
    }
}
   
});