let numero = 5;

function somatorioNumeros(numero){
    let somatorio = 0;
    for (let i=0; i<=numero; i+=1){
        somatorio = somatorio + i;
    }
    return somatorio;
}

console.log(somatorioNumeros(numero));