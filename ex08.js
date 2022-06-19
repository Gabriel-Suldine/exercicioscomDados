/*Crie um algoritmo que percorra o vetor “filmes” e armazene em um novo vetor os
filmes que contém no título a palavra “Força”, na sequência imprima os filmes que
atendem ao critério.*/ 
import { filmes } from "./dados.js";
let novofilme = []
for(let i = 0; i < filmes.length; i++){
    if (filmes[i].includes("Força")){
        novofilme[i] = filmes[i]
        console.log(novofilme[i])

    }   
}
