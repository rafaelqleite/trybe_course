// Atividade 5:
// Rota: /:operacao/:numero1/:numero2
// Objetivo: Deve validar a operação e retornar o resultado da mesma. As operações podem ser soma , subtração , divisão ou multiplicação . Regra: Um middleware deve ser usado para cada operação. A operação deve ser recebida como parâmetro na rota.
​
const express = require('express');
const app = express();
​
const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const divisao = (num1, num2) => num1 / num2;
const multiplicacao = (num1, num2) => num1 * num2;
​
app.use(express.json());
​
app.get('/:operacao/:numero1/:numero2', (req, res, next) => {
  let { operacao, numero1, numero2 } = req.params;
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
​
  switch (operacao) {
    case 'soma':
      res.status(200).json({ resultado: soma(numero1, numero2) });
      break;
    case 'subtracao':
      res.status(200).json({ resultado: subtracao(numero1, numero2) });
      break;
    case 'divisao':
      res.status(200).json({ resultado: divisao(numero1, numero2) });
      break;
    case 'multiplicacao':
      res.status(200).json({ resultado: multiplicacao(numero1, numero2) });
      break;
    default:
      res.status(404).json({ message: "O pai tá off" });
      break;
  }
})
​
app.listen(3000, () => console.log("Monitorando porta 3000"));
