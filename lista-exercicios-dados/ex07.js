//Crie um algoritmo que percorra o vetor filmes e imprima apenas os filmes que contenham um subtítulo.
import { filmes } from "./dados.js";

for(let i = 0; i < filmes.length; i++){
    if (filmes[i].includes(":")){
        console.log(filmes[i])
    }   
}
