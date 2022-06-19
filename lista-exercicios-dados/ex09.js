/*Crie um algoritmo que percorra o vetor “preços” e aplique um desconto de 10%
aos valores armazenando os valores calculados em um novo vetor. Itere o novo
vetor e exiba os novos valores calculados.*/ 

import { precos } from "./dados.js";
let novopreco = []
for(let i = 0; i < precos.length; i++) {
    novopreco[i] = `R$ ${(precos[i]*0.9).toFixed(2)} `
}
console.log(novopreco)
