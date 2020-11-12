// Exercício 4: Aumente em 2 o imdbRating do filme Batman.
db.movies.update({title: "Batman"}, {$inc: {imdbRating: 2} });

