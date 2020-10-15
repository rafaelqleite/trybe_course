SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;
SELECT active, store_id, COUNT(*) FROM sakila.customer GROUP BY store_id, active;
SELECT rating, AVG(rating) AS 'media' FROM sakila.film GROUP BY rating;
SELECT district, COUNT(*) FROM sakila.address GROUP BY district ORDER BY COUNT(*) DESC;