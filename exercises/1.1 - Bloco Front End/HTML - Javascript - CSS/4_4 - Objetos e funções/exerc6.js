function verificaPalindrome(palavra) {
    let vetor1 = [];
    let vetor2 = [];
    let contador = 0;

    for (let letra in palavra) {
        vetor1.push(palavra[letra]);
    }

    for (let i = palavra.length - 1; i >= 0; i -= 1) {
        vetor2.push(palavra[i]);
    }

    for (item in vetor1) {
        if (vetor1[item] === vetor2[item]) {
            contador = contador + 1;
        }
    }

    if (contador === palavra.length) {
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome("batata"));
