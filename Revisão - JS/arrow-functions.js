//Função que eleva um numero ao quadrado
//Se  precisar disso em situação real, use Math.pow(), ou
// o operador **

function quadrado(n){
    return n*n
}
console.log(quadrado(9))

//Características da função acima:
//1) apenas um parâmetro
//2) Apenas uma linha de código, com return
//3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION


// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) a palavra function é sustituida pelo sinal =>, DEPOIS do parêmetro
// c) Não são necesárias as chaves nem a palvra return

const quadrado2 =n => n*n
console.log(quadrado2)
