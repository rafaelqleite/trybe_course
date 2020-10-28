//  Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9,
//  exibindo apenas os campos title e ratings.

db.movies.find(
  {$and:
    [{ratings:
      {$elemMatch: {$gt: 64, $lt:105} }
    },
      {ratings: {$mod: [9, 0] } }
    ]
  },
  {_id: 0, title: 1, ratings: 1}
).pretty();