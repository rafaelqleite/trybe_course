let salario;
let reduzido;
let salario1
salario1 = 5000;
let resultado;
let aloprado;
let deduzidoinss;
let salariofinal;

deduzidoinss = inss(salario1);
console.log(deduzidoinss);
salariofinal = imposto(deduzidoinss);
console.log(salariofinal)

function inss(salario) {
	if (salario > 0 && salario <= 1556.94) {
		reduzidoinss = salario - 0.08 * salario;
		return reduzidoinss;
	}
	else if(salario >= 1556.94 && salario <= 2594.92) {
		reduzidoinss = salario - 0.09 * salario;
		return reduzidoinss;
	}
	else if(salario >= 2594.92 && salario <= 5189.92) {
		reduzidoinss = salario - 0.11 * salario;
		return reduzidoinss;
	}
	else if (salario >= 5189.92) {
		reduzidoinss = salario - 570.88;
	}
}

function imposto(aloprado){
	if (aloprado>0 && aloprado <=1903.98){
		return aloprado;
	}
	else if (aloprado>=1903.99 && aloprado<=2826.65) {
		resultado = aloprado - aloprado*0.075 - 142.80;
		return resultado;
	} else if(aloprado>=2826.66 && aloprado<=3751.05) {
		resultado = aloprado - aloprado*0.15 - 354.80;
		return resultado;
	} else if(aloprado>=3751.06 && aloprado<=4664.68) {
		resultado = aloprado - aloprado*0.225 - 636.13;
		return resultado;
	} else if (aloprado>= 4664.68){
		resultado = aloprado - aloprado*0.275 - 869,36;
		return resultado;
	}
}
