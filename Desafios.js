//Desafio 01 -  Área de uma circunferência - Pi * raio^2

const PI = 3.14;
let raio = 10;

let area = PI * (raio*raio);

//console.log("A área da circunferência é: " + area +" m2.")

//Desafio 02 -  Troca de valores

let a = 7;
let b = 94;

//let temp = a;
//a = b;
//b = temp

[a, b] = [b, a]

console.log("Valor de A: " + a + "\nValor de B: " + b);