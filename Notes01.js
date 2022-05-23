/*
let prod1 = {}
prod1.name = 'Iphone X'
prod1.price = 2500.00

console.log(prod1)

let prod2 = {
    nome: 'Laptop Acer',
    price: 3000.00
}

console.log(prod2)
*/

/*
 function imprimaSoma(a, b) {
     console.log(a + b)
 }

 function soma(a, b = 1) {
     return a + b
 }

const sub = (a, b) => a - b

console.log(sub(2, 3))
*/


/*
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
*/

/*
const pessoa = {
    nome: "Yas",
    idade: 20,
    endereco: {
        logradouro: "Rua Presidente P.",
        numero: 203
    }
}

const  { nome: n, idade : i }  = pessoa
console.log(n, i)

*/

/*
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj)) 
*/

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([40, 50]))