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

/*let botao = document.getElementById("meu-btn");
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

});*/

//ESTUDAR: 
//querySelector
//querySelectorAll
//Array
//Estruturas de repetição
/*
//declarar um array
let frutas = ["banana","maça","pêssego","laranja","limão","melancia","kiwi"];
console.log(frutas);
console.table(frutas);

//inserir um item ao final do array com o método push(nomeDoItem):
frutas.push("manga");
console.log(frutas);
//inserir um item no final do array com o método unshift(nomeDoItem):
frutas.unshift("pitaya");
console.log(frutas);
//remover um item ao final do array com o método pop():
frutas.pop();
console.log(frutas);
//remover um item no inicio do array com o método shift():
frutas.shift();
console.log(frutas);
*/
//localizar um item no array utilizando o método indexOf(nomeDoItem)
//OBS: este método retorna o indice do item encontrado
//let indice = frutas.indexOf("laranja")
//console.log(`o indice encontrado foi: ${indice}`);
//console.log(`o item buscado foi: ${frutas[indice]}`);

//Realizando uma remoção de item utilizando o método splice();
//o método splice() recebe dois parametros, idice do item que sera removido e a
//quantidade de vezes que este mesmo indice será removido. Ex: splice(indice, 1);
//DICA: utilize o método indexOf() para buscar o indice dp item no array.
/*let indice = frutas.indexOf("melancia")
console.log(`o item encontrado no indice antes da remoção foi: ${frutas[indice]}`);
frutas.splice(indice,1);
console.log(frutas);
console.log(`o item encontrado no indice depois da remoção foi: ${frutas[indice]}`);*/



//concatenação de arrays
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
// console.log("Array 1: " + nr1);
// console.log("Array 2: " + nr2);
// //concatenando os dois arrays em um novo array
// let nr3 = [nr1,nr2];
// console.log("Array concatenado: " + nr3);

// nr3.forEach( (nr)=>{
//     console.log("Itens do array 3 " + nr);
// });

//concatenando os dois arrays em um novo array com o operador SPREAD(...)
let nr3 = [...nr1,...nr2];
console.log("Array 3: " + nr3);

nr3.forEach((nr)=>{
    console.log("Itens do Array 3:" + nr);
});



