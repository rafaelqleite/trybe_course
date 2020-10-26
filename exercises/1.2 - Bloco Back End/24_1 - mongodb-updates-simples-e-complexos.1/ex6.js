// Exercício 6: Multiplique por 4 o imdbRating do filme Batman.
db.movies.update({title: "Batman"}, {$mul: {imdbRating: NumberInt(4) } });

//  mesmo que:
db.movies.update({title: "Batman"}, {$mul: {imdbRating: 4 } });
