//Função sem retorno em JS
//Linguagem fracamente tipada, pode passar qualquer coisa
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(5, 8)
imprimirSoma(5)
imprimirSoma(5, 8, 5, 3, 5)
imprimirSoma()

//Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3));
console.log(soma(2));