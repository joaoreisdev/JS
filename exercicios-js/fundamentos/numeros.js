const peso1 = 1.1
const peso2 = Number('2.0')

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.873
const avaliacao2 = 8.873

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));
console.log(media.toString());
console.log(typeof media);