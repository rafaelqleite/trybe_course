let numero =14;
let divisores = [];

for (let i=1; i<=numero; i+=1){
    if (numero % i === 0) {
        divisores.push(i);
    }
}

if (divisores.length === 2){
    console.log("O número " + numero + " é primo!");
} else {
    console.log("O número "+ numero + " NÃO é primo!");
}
