let frutas =['maçã', 'laranja' , 'pera', 'uva', 'mamão', 'banana']


//Vetor original
console.log(frutas)


//Retirar o último elemento de um vetor

let ultimaFruta = frutas.pop()

//Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

//Remoção do primeiro elemento do vetor
let primeiraFruta = fruta.shift()

console.log(frutas)
console.log(primeiraFruta)

//Remoção em posição intermediária
//1º Parâmetro -> a posição de remoção (contagem começa em 0)
//2º Parâmetro -> a quantidade de elementos a remover

let terceiraFrutaa = frutas.splice(2, 1) // SEMPRE retornará um vetor

console.log(frutas)
console.log(terceiraFrutaa)