//  Exercício 9: Descubra o cliente que mais consumiu QUEIJO PRATO.
//  Retorne um documento com a seguinte estrutura:
// {
//   "nomeCliente": "NOME",
//   "uf": "UF DO CLIENTE",
//   "totalConsumido": 100
// }
db.vendas.aggregate(
  [
    {$match: {"itens.nome": "QUEIJO PRATO"}},
    {$unwind: "$itens"},
    {$match: {"itens.nome": "QUEIJO PRATO", status: {$in: ["EM SEPARACAO", "ENTREGUE"]} }},
    {$group: {_id: "$clienteId", totalPedido: {$sum: "$itens.quantidade"} } },
    {$lookup: {from: "clientes", localField: "_id", foreignField: "clienteId", as: "Cliente" } },
    {$sort: {totalPedido: -1} },
    {$limit: 1},
    {$unwind: "$Cliente"},
    {$project: {_id: 0, nomeCliente: "$Cliente.nome", uf: "$Cliente.endereco.uf", totalConsumido: "$totalPedido"} }
  ]
).pretty();
