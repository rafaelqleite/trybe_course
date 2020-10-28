//  Retorne todos os filmes com ratings maior do que 103, exibindo apenas
//  os campos title e ratings.

db.movies.find(
  {ratings: {$gt: 103} },
  {title: true, ratings: true, _id: 0}
).pretty();