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


//Inserindo no final do vetor

frutas.push('amora') // pode inserir mais de um elemento ao mesmo tempo
// p. ex:
// frutas.push('amora', 'jaca')
console.log(frutas)

//Inserir ni ínicio do vetor

frutas.unshift('jabuticaba') // Também pode inserir  mais de um elemento
// ao mesmo tempo, p. ex: frutas.unshift('jabuticaba', 'limão' )
console.log(frutas)

//Inserção no meio do vetor
//Parâmetros do splice() para inserção
//1º -> posição para inserção
//2º -> numero de elementos a serem excluidos (para inserção utiliza-se 0)
//3º em diante -> elemento(s) que será (ão) inseridos

frutas.splica(2,0,'pêssego') // Inserindo na terceira posição
console.log(frutas)
//Também funciona para inserir vários elementos ao mesmo tempo, o ex:
//frutas.splice(2, 0 'pêssego', 'jaca', 'nectarina')

//Usando splice() para substituição
//Parâmetros:
//1º -> posição para substituição
//2º -> quantidade de elementos que serão excluidos ( para substituição, 1)
//3º -> o elemento que será incluido no lugar
frutas.splice(4,1, 'ameixa') // Substituição na 5ª posição
console.log(frutas)

// Inserção múltipla com splice()
frutas.splice(1,0, 'nectarina', 'jaca')

console.log(frutas)

console.log('-------------------------------------')
/*************************************

*PERCURSOS DE VETOS
*/

// 1) Percuros com for tradicional
//a) contagem começa em zero(0 - primeiro elemento)
//b) ocorre enquanto o contador for MENOR que no número de elementos do vetor
//legth temina com TH (lingua mole)
// d)É o método mais flexivel pois, se necessário, é possível fazer um percurso
//parcial (começar em algum elemento que não é o primeiro e terminar antes do final)
for(let i =0; i<frutas.length; i++) {
    console.log(i, frutas[i])
}

// 2) For tradicional, em ordem inversa

//a) O contador incia-se em length -1
// b) A condição é contador MAIOR OU IGUAL a zero ( 0 - primeiro elemento)
for(let i = frutas.length - 1; i >= 0; i --){
console.log(i, frutas[i]) 
}


console.log('------------------------------------------')

//3) Percurso com for..of
//a)Sempre percorre o vetor inteiro, na ordem natural
//Variáveis
// f-> variável que receberá cada elemento do vetor(pode ser qualquer nome
// válido de variável )
//frutas -> é o vetor a ser percorrido

let x = 0
for(let f of frutas){
    console.log(f)
    //console.log(x,f)
//x++
}
console.log ('----------------------------------------------')
//4 )Percurso com forEach()
//forEach() recebe como parâmetro uma função que recebe como parâmetro
//cadaelemento do vetor
// o nome do parâmetro da função pode ser qualuer nome válido de identificador
frutas.forEach(function(elemento){
    console.log(elemento)
})


console.log('-----------------------------------------')

// o mesmo forEach(), usando uma arrow function como parâmetro

frutas.forEach(elemento => console.log)