// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 3)

// (Arrow Function) 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 5));

// (Arrow Function) Retorno implícito 
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2));


const imprimirAlgo = (a) => console.log(a)

imprimirAlgo('QualquerCoisa')