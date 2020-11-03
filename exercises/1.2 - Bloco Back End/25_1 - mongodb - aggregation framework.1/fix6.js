//  Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate(
  [
    { $match: {State: "Florida"} },
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "transactions_done"
      }
    }
  ]
).pretty();