USE sakila;
CREATE VIEW film_with_categories AS
	SELECT a.title, b.category_id, c.name FROM sakila.film AS a
	INNER JOIN sakila.film_category AS b ON a.film_id = b.film_id
    INNER JOIN sakila.category AS c ON c.category_id = b.category_id
    ORDER BY a.title;
    
SELECT * FROM film_with_categories;
