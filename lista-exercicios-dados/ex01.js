import read from 'readline-sync'

let store = []
for(let i = 0; i < 6; i++) store[i] = read.questionInt("Digite um valor ")
console.log(store)