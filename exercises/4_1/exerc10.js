let cproduto = 10;
let venda = 30;
let lucrounitario = venda-cproduto-0.20*cproduto;
let lucro = 1000 * lucrounitario;
console.log(lucro); 
if (cproduto <0 || venda <0 ) {
	console.log ("Vendeu um número negativo foi?");
}
