let teste = [2, 3, 2, 5, 8, 2, 3];

function maisRepete(palavra) {
    let contador = 0;
    let indice = 0;
    let contadorMax = 0;
    let indiceMax = 0;
    for (let i = 0; i < palavra.length; i += 1) {
        contador = 0;
        for (let j = 0; j < palavra.length; j += 1) {
            if (palavra[i] === palavra[j]) {
                contador = contador +1;
                indice = i;
            }
        }
        if (contador > contadorMax) {
            indiceMax = i;
            contadorMax = contador;
            console.log(indiceMax + " e "+ contadorMax)
        }
    }
    return palavra[indiceMax];
}

console.log(maisRepete(teste));
