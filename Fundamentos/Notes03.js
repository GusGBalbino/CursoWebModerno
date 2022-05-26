/* WHILE

function getRandomInt(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = 0

while (option != -1) {
    option = getRandomInt(-1,10)
    console.log(option)
}

console.log('*E-N-D*')
*/


/*DO WHILE - Garante a repetição 

function getRandomInt2(min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let option2

do {
    option2 = getRandomInt2(-1, 10)
    console.log(option2)
} while (option2 != -1)
*/


/* FOR 

for (let i = 1; i<=10; i++) {
    console.log(i)
}

-------------

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i=0; i < notas.length; i++) {
    console.log(notas[i])
}

*/


/* For - In

const pessoa = {
    nome: 'Yasmim',
    sobrenome: 'Batista',
    idade: 20,
    peso: 40
}

for (i in pessoa) {
    console.log(i, pessoa[i])
}
*/



