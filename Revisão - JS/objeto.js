//Objetos são estruturas que permitem armazenar dirversos valores
//em uma mesma variáve, permitindo acessá-los por meio de um nome

//Criação de um objeto vazio


let vazio1 ={}  //Forma "moderna"
let vazio2 = new Object() // Forma "tradicional"

//Criando um objeto já com dados
let pessoa ={
    //Os dados são armazenados no formato
    //propriedade: valor
    //ou também chamdo de 
    //atributo: valor
    nome:'Orkutilson de Oliveira',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    //Nome da propriedade pode ter espaços ou acento.
    //Nesse caso, o nome da propriedade precisa estar entre aspas
    'cidade de origem': 'Franca',
    gostos:['jogos', 'doces', 'dormir'] // Vetor em uma posição de objeto
}
console.log(pessoa)
console.table(pessoa)

//Exibindo apenas o valor de uma propriedade
console.log(pessoa.nome)
console.table(pessoa.ocupacao)
//Quando o nome da propriedade tem espaços ou acento, não é possivel
//usar a sintaxe de ponto. É necessário usar  a sintexe de colchetes.
console.log(pessoa['cidade de origem'])
console.log(pessoa.gostos)

//A sintexa dos colchetes sempre funciona, mesmo se o nome da propriedade
//for uma única palavra sem acento
console.log(pessoa['nome'])
console.log(pessoa['gostos'][1])

//Outraa consequência da sintaxe dos colchetes é a possibilidade de
//usar nomes de propriedades que estão dentro de variáveis

let x = 'sexo'
console.log(pessoa[x])
x='dataNasc'
console.log(pessoa[x])

//Criando uma nova propriedade para um objeto já existente
pessoa.email = 'orkutilson@gmail.com'
pessoa.celular = '(16) 98765-4321'
console.table(pessoa)

//Criando um obejto vazio e só depois adicionando propriedades
let carro = {}

carro.marca = 'Volkswagem'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combustível'] = 'gasolina'
carro.cor = 'bege'

console.table(carro)

//Excluindo uma propriedade de um objeto

delete carro.ano
console.table(carro)

console.log('-------------------------------------------')


// Exibindo todas as propriedades de um objeto
//for...in determina quais as propriedades de um objeto e
//coloca cada uma delas em uma variável indormada pelo
//usuário(p, no caso) a cada iteração do loop
for(let p in pessoa){
    console.log(p)
}

console.log('-------------------------------------------')

for(let p in carro){
console.log(p)
}

// for .. in para listar propriedades e valores de um objeto
for(let atrib in pessoa){
    console.log(atrib + '->' + pessoa[atrib])
}