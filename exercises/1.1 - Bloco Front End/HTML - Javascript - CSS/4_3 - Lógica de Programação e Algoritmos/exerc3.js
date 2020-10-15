let n = 5;
let asterisco = "";

for (let i=1; i<=n; i+=1) {
	let espacos = "";
	for (let j = 1; j<=n-i; j+=1) {
		espacos = espacos + " ";
	} 
	asterisco = asterisco + "*";
	console.log(espacos+asterisco);
}
