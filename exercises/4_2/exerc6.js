let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contaImpares = 0;


for (let i=0; i<numbers.length; i++) {
	if (numbers[i] % 2 !== 0){
		contaImpares+=1;
	}
}

console.log("O número de números impares no array é: " + contaImpares);
