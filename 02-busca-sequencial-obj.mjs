function buscaSequencial(vetor, valorBusca) {
     for(let i = 0; i < vetor.length; i++){
        //Em vez de fazer a comparação dentro da função de busca,
        //tercerizamos essa comparação chamando uma função externa
         if(inComp(vetor[i]== valorBusca)) return i //Retorna a posião onde foi encontrado

     }
     return - 1 // Valor de busca não encontrado
 }

 /*funcition comparaNome(objNome, valorBusca){
     return objNome.first_name ===valorBusca
 }*/


 const comparaNome =(objNome, valorBusca) => objNome.First_name ===valorBusca

 import {objNomes} from '-/inludes/vetor-obj-nomes.mjs'

 consol.log(buscaSequencial(objNomes, 'GABRIEL', comparaNome))