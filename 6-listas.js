console.log("Trabalhando com listas");
const salvador = `Salvador`;
const rioDeJaneiro = `Rio de Janeiro`;
const saoPaulo = `S�o Paulo`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `S�o Paulo`
);
listaDeDestinos.push(`Curitiba`);// Adicionando um item na lista
console.log("Destinos poss�veis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);// Remover o item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[0]); //Exibir o elemento da lista





