// let botao = document.getElementById("meu-btn");
// botao.addEventListener("click",function(){
//     let r=0,g=0,b=0;
//     r = Math.round(Math.random()*225);
//     g = Math.round(Math.random()*125);
//     b = Math.round(Math.random()*225);

//     //this.setAttribute("NOME DO ATRIBUTO", "VALOR PARA ESTE ATRIBUTO");
//     //this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`;


// });
// function addItem() {
// var input = document.getElementById("texto");
// var value = input.value;
// var list = document.getElementById("lista");
// var newItem = document.createElement("li");
// newItem.textContent = value;
// list.appendChild(newItem);
// input.value = "";
// }

let botao = document.getElementById("meu-btn");
console.log(botao.textContent);

botao.addEventListener("click",function(){ 


    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    //this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

} );

function addItem() {

    let nome = document.getElementById("nome").value;

    let novoItem = document.createElement("li");
    let spanNome = document.createElement("span");
    spanNome.textContent = nome;
    novoItem.appendChild(spanNome);
    novoItem.appendChild(document.createTextNode(" - "));

    let lista = document.getElementById("lista");
    lista.appendChild(novoItem);

    document.getElementById("nome").value = "";
}

let btn_trocar = document.getElementById("btn-trocar");

    btn_trocar.addEventListener("click",function() {
        let img = document.querySelector("#imagem_lobo")

        if (img.getAttribute("src") == './img/lobo3.jpg') {
            let img = document.querySelector("#imagem_lobo")
            img.setAttribute('src', './img/lobo4.jpg');
        }
         else {
            let img = document.querySelector("#imagem_lobo")
            img.setAttribute('src', './img/lobo5.jpg');
         };
    });

function exibirMensagem() {
    let elemento = document.getElementById("exibirMensagem");
    elemento.innerHTML = "O lobo está apreciando a vista.";
    elemento.style.display = "block";
}

function ocultarElemento() {
    let paragrafo = document.getElementById("ocultarElemento");
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
}


