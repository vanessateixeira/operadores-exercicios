let primeiroNumero = Number (prompt('Digite um número'))
let segundoNumero = Number (prompt('Digite um segundo número'))

console.log('O primeiro número é maior que o segundo?', primeiroNumero > segundoNumero)
console.log('O primeiro número é igual ao segundo?', primeiroNumero === segundoNumero)
console.log('O primeiro número é divisível pelo segundo?', primeiroNumero % segundoNumero === 0)
console.log('O segundo número é divisível pelo primeiro?', segundoNumero % primeiroNumero === 0)