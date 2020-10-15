let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'AbestalhadoAvacalhado', 'Joana'];

function maisCaracteres(palavra){
    let indiceMaior = 0;
    let maior = 0;
    for (item in teste){
        if (palavra[item].length>maior){
            maior = palavra[item].length;
            indiceMaior = item;
        }
    }
    return palavra[indiceMaior];
}

console.log(maisCaracteres(teste));
