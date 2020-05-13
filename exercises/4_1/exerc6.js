let peca = "peao";

if (peca == "peao") {
	console.log("O seu peao anda peça de cada vez, para frente");
} else if (peca == "cavalo") {
	console.log("O seu cavalo anda em L");
} else if (peca == "Rei") {
	console.log("O seu rei anda igual a um peao, uma peça de cada vez");
} else if (peca == "Rainha") {
	console.log("A sua rainha anda igual a uma torre, pode andar quantas  casas quiser, desde que em linha");
} else if (peca == "torre") {
	console.log("Quantas casas quiser, desde que em linha, assim como a rainha");
} else if (peca == "bispo") {
	console.log("Quantas casas quiser, na diagonal");
} else {
	console.log("Ocorreu um erro");
}
