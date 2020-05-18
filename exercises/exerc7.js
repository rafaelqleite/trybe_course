let teste = [2, 3, 6, 7, 10, 1];

function indiceMaiorElemento (palavra){
    maior = palavra[0];
    let indice = 0;
    for (let item in palavra){
        if (palavra[item]>maior) {
            maior = palavra[item];
            indice = item;
        }
    }
    return indice;
}

console.log(indiceMaiorElemento(teste));