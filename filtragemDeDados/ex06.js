import { nomes, sobrenomes} from "./dados.js";

function NomesCompleto (nome,sobrenome){
let NomeCompleto = []
for(let i = 0; i < nomes.length;i++)  NomeCompleto [i , i] = `${nome[i]} ${sobrenome[i]}`  
console.log(NomeCompleto)
}

NomesCompleto(nomes,sobrenomes)










