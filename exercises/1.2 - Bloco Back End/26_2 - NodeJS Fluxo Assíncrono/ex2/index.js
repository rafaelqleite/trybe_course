// Exercício 2: Agora, pegue a função do exercício 1 e refatore ela para
// async/await.
// Sua função tem que funcionar exatamente igual à do exercício 1, mas você não
// pode utilizar nenhum .then em seu código.


async function criandoPromises (parametro1, parametro2, parametro3) {
  if (typeof(parametro1) !== 'number' ||
    typeof(parametro2) !== 'number' || typeof(parametro3) !== 'number') {
    return Promise.reject(new Error("Digite apenas números"));
  }
  const soma = parametro1 + parametro2;
  const final = soma * parametro3;
  if (final < 50) return Promise.reject(new Error("Valor muito baixo"));
  return console.log(final);
}

criandoPromises(80, 2, 3);
