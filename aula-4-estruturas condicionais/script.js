var jogador1 = 0;
var jogador2 = 0;
var placar;
let array = [valor1, valor2, valor3, valor4, valor5,];
let object = {propiedade1: 'valor1', propriedade2: 'valor2', propriedade3:'valor3',};

if (jogador1 > -1){
    if jogador1 > 0{
        console.log('Jogador 1 Marcou ponto!');
    }else if (jogador2 > 0){
        console.log('Jogador 2 Marcou ponto!');
    }else{
        console.log('Ninguem Marcou ponto!');
    }
}

jogador1 > -1 && jogador2 > -1 ? console.log('Amboso os jogadores são Válidos') : console.log('Ao menos um jogador não é válido!');
if (jogador1 > 0){
    console.log('Jogador 1 Marcou ponto!');
}else if (jogador2 > 0){
    console.log('Jogador 2 Marcou ponto!');
}else{
    console.log('Ninguem Marcou ponto!');
}

if (jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 Marcou ponto!');
    placar = jogador1 > jogador2;
}else if (jogador2 > 0 && jogador2 ==0){
    console.log('Jogador 2 Marcou ponto!');
    placar = jogador2 > jogador1;
}else{
    console.log('Ninguem Marcou ponto!');
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador1 Ganhou!');
        break;

        case placar = jogador2 > jogador2:
            console.log('Jogador2 Ganhou!');
            break;

        default:
            console.log('Não houve ganhadores');
}

for(let indice=0; indice < array.length; indice++){
    console,log(indice);
}

for (indice2 in array){
    console.log(indice2);
}