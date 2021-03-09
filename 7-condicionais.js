console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`
);
const idadeComprador = 18;
const acompanhado = true;
if ((idadeComprador >= 18)|| (acompanhado)) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1, 1);// Remover o item da lista
    console.log(listaDeDestinos);
}
else {
    console.log(`Comprador é menor de idade`);
    console.log(listaDeDestinos);
}
console.log(idadeComprador == 18);