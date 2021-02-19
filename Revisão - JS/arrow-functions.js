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
console.log(quadrado2(9))

//Função com mais de um parâmetro
function potencial (b,e){ //b= base, e = expoente
    return b**e
}
console.log(potencial(2,8))

//Função equivalente no formato arrow function

//Quando temos mais de um parâmetro, os parênteses em volta dos
//arguntos voltam a ser obrigatórios

let potencia2 = (b,e) => b**e
console.log(potencia2(2,8))

//Função sem parâmetro

function megasena(){
//Essa função retorna um número aleatório entre 1 e 60
//Math.random() -> retorna um número aleatório ente 0 (inclusive ) e 1 (exclusive)
// *60 -> ajusta a faixa de valores entre 0 e 59
// +1 -> ajusta a faiza de valores para ente 1 e 60
// Math.floor -> arrendondar para o menor intero ( tirar casas decimais)
return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena(), megasena(), megasena(),megasena())

//Quando a função não tem argumentos, na arrow function é necessário dexar
//uma par de parênteses vazios para marcar seu lugar

const megasena2= () => Math.floor(Math.random() * 60 +1)
console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2(),)


//Função com mais de uma linha de código no corpo
function somaVet(vet){
    let soma = 0
    for (let n of vet) soma += vet
    return soma
}

console.log(somaVet([12,42, -11, 20, 9, 16]))

const somaVet2 = vet => {
    let soma = 0
    for(let n of vet)soma +=n
    return soma
}

console.log(somaVet2([12, 42, -11, 20, 9, 16]))

//CONCLUSÃO: arrow functions foram concebidas para facilitar a escrita de
//funções de apenas uma linha, embora também possam ser usadas para funções
//de múltiplas linhas