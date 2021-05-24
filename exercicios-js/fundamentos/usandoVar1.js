//Quando você cria uma var fora de uma função, ela é global
//Quando você cria uma var dentro de uma função, ela é visivel apenas dentro da função
{ { { { var sera = 'SERÁ' } } } }

console.log(sera);

function teste(){
    var local = 1234
}
console.log(local);
