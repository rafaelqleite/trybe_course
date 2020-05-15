let teste = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorElemento (palavra){
    menor = palavra[0];
    let indice = 0;
    for (let item in palavra){
        if (palavra[item]<menor) {
            menor = palavra[item];
            indice = item;
        }
    }
    return indice;
}

console.log(indiceMenorElemento(teste));