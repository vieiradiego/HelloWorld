
const destino = "Salvador";
const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `S�o Paulo`,
    `Curitiba`
);

console.log(`\nDestinos dispon�veis:`)
console.log(listaDeDestinos);

let contador = 0;
let destinoExiste = false;
while (contador < 4) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`Destino existe`);
        destinoExiste = true;
        break;
    } else {
        console.log(`Destino n�o existe`);
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
    console.log("N�o � maior de Idade e n�o posso vender");
    temPassagemComprada = false;
}