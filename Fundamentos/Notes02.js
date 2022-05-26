/*
const [a,b,c,d] = [3,5,1,15]

const soma = a + b + c + d
const subtr = d - b
const multp = a * b
const divs = d / a
const modle = a % 2

console.log(soma, subtr, multp, divs, modle)
*/


/*
 function compras(trabalho1, trabalho2) {
     const comprarSorvete = trabalho1 || trabalho2
     const comprarTv50 = trabalho1 && trabalho2
     const comprarTv32 = trabalho1 != trabalho2
     const stayHealth = !comprarSorvete

     return {comprarSorvete, comprarTv50, comprarTv32,stayHealth}
 }

 console.log(compras(true, true))
 console.log(compras(true, false))
 console.log(compras(false, true))
 console.log(compras(false, false))

 */

 /*
 const resultado = nota => nota>= 7 ? 'Aprovado' : 'Reprovado';

 console.log(resultado(7.1));
 console.log(resultado(6.7));

*/

/* ESTRUTURAS DE CONTROLE*/



/*
function notaBoa(nota) {
    if(nota >= 7) {
        console.log("Você passou. " + nota)
    }
    else {
        console.log("Você não passou. " + nota)
    }
}

notaBoa(8.1)
notaBoa(6.8)
*/



/* SEM SWITCH - 
Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <= fim
}

const showResults = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Aprovado com destaque')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}


showResults(9.5)
showResults(8)
showResults(5)
showResults(2)
*/

const showResults = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Aprovado com destaque')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

showResults(9.5)
showResults(8)
showResults(5)
showResults(2)

