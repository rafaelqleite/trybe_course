let teste1 = "josiasdasilvatrybe";
let teste2 = "be";

function final (word, ending) {
    let auxiliar = "";
    let auxiliar2 = "";
    for (let i=word.length-1; i>=word.length-ending.length; i-=1){
        auxiliar = auxiliar + word[i]
    }
    for(let i = auxiliar.length-1; i>=0; i-=1){
        auxiliar2 = auxiliar2 + auxiliar[i];
    }
    if (auxiliar2 === ending){
        return true;
    } else {
        return false;
    }
}
console.log(final(teste1,teste2));