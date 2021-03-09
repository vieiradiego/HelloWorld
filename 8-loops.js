
const destino = "Salvador";
const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`,
    `Curitiba`
);

console.log(`\nDestinos disponíveis:`)
console.log(listaDeDestinos);

let contador = 0;
let destinoExiste = false;
while (contador < 4) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`Destino existe`);
        destinoExiste = true;
        break;
    } else {
        console.log(`Destino não existe`);
    }
    contador += 1;
}

const idadeComprador = 18;
const estaAcompnhada = false;
let temPassagemComprada = false;

if (idadeComprador >= 18 || estaAcompanhada == true) {
    consoe.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1);
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}