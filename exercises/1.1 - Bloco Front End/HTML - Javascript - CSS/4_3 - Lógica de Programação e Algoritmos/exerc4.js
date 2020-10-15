let n = 15;
let asterisco = "*";
let linhas = (n + 1) / 2;


//o numero de linhas eh dado por
// linhas = (n+1)/2

//o número de astericos por linha aumenta de 2 em 2
//a quantidade de espaços eh dada por (n-1)/2 - (linha -1)

for (let i = 1; i <= linhas; i += 1) {
    let espaco = "";

    condicao = (n - 1) / 2;
    condicao = condicao - i + 1;

    for (let j = 1; j <= condicao; j += 1) {
        espaco = espaco + " ";

    }

    if (i === 1) {
        console.log(espaco + asterisco);
        continue;
    }
    //nao pode entrar no soma asterisco se for igual 1.
    asterisco = asterisco + "**";
    console.log(espaco + asterisco);
}