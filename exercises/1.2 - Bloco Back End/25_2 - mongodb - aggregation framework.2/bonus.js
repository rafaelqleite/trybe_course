//  Exercício 11: Calcule a diferença absoluta em dias entre a data da primeira
//  entrega prevista e a última, considerando o pipeline do exercício 10.

db.vendas.aggregate(
  [
    {
      $match:
        {
          dataVenda: { $gte: ISODate("2020-03-01"), $lte: ISODate("2020-03-31") },
          status: "EM SEPARACAO"
        }
    },
    {
      $addFields:
      {
        dataEntregaPrevista: {$add: ["$dataVenda", 24 * 3 * 60 * 60 * 1000] }
      }
    },
    {
      $project:
      {
        _id:0,
        clienteId: 1,
        dataVenda: 1,
        dataEntregaPrevista: 1,
        difAbsolutaEntrega: {
          $abs:
            {
              $divide:
                [{$subtract: ["$dataVenda", "$dataEntregaPrevista"] }, 24 * 60 * 60 * 1000]
            }
          }
      }
    }
  ]
).pretty();
