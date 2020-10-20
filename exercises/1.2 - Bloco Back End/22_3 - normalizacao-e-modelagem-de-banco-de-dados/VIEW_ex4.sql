CREATE VIEW movies_languages AS
SELECT a.title, a.language_id, b.name FROM sakila.film AS a
INNER JOIN sakila.language AS b ON a.language_id = b.language_id;

SELECT * FROM movies_languages;