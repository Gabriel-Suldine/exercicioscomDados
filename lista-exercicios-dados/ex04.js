import { precos } from "./dados.js";
let more = 0
let less = 0
for(let i = 0; i < precos.length; i++){
    if (precos[i] > 100){
        more+= precos[i]
    }  else if(precos[i] < 40){
        less+= precos[i]     

    }

    }  
    console.log(` =================================
    A soma dos valores acima de 100 é ${more} e 
    a soma dos valores menores que 50 é ${less}.
    Diferença e ${more - less}
    =================================`)
    
