//var nome1 = "Bruno";
//let nome2 = "Derick";
//para declarar variávei simples, pode declarar números, strings, objetos.
//principal diferença entre let e var é o hosting

//const PI = 3.14; 
//regra1: INICIALIZAR NA DECLARAÇÃO
//REGRA2: NÃO ALTERAR O SEU VALOR DURANTE O FLUXO DO PROGRAMA
//constante, usado para declarar dados que vá utilizar com frequencia e que NÃO PODE ser alterado
//
//var nome1 = "Bruno";
//
//if(nome1 != "Bruno"){
//    let nome1 = "Antunes"
//}
//console.log(nome1);

let botao = document.getElementById("meu-btn");
console.log(botao.textContent);

//botao.addEventListener("EVENTO","FUNÇÃO DE CALL BACK");
botao.addEventListener("click",function(){
    //console.log(this.textContent);
    //função Math:Random = retorna um número aleatório ENTRE 0 E 1
    //            floor = arredonda um número para baixo
    //            ceil = arrendona um número para cima
    //            round = arrendona um número aleatoriamente

    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    //this.setAttribute("NOME DO ATRIBUTO", "VALOR PARA ESTE ATRIBUTO");
    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

});

//ESTUDAR: 
//querySelector
//querySelectorAll
//Array
//Estruturas de repetição
