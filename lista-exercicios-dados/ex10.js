/*Crie um algoritmo que percorra o vetor “preços” e armazene um novo vetor os
valores que estão entre 50 e 90, na sequência imprima os dados do novo vetor.*/ 

import { precos } from "./dados.js";
let precoEntre = []
for(let i = 0; i < precos.length; i++) {
    if(precos[i] > 50 && precos[i] < 90){
        precoEntre[i] = precos[i]
        console.log(precoEntre[i])
    }
}
