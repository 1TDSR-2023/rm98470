let botao = document.getElementById("meu-btn");
botao.addEventListener("click",function(){
    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    //this.setAttribute("NOME DO ATRIBUTO", "VALOR PARA ESTE ATRIBUTO");
    //this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

});
function addItem() {
var input = document.getElementById("texto");
var value = input.value;
var list = document.getElementById("lista");
var newItem = document.createElement("li");
newItem.textContent = value;
list.appendChild(newItem);
input.value = "";
}
