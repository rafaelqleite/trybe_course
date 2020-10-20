CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(b.first_name, ' ', b.last_name) AS `actor`, c.title FROM film_actor AS a
    INNER JOIN actor AS b ON a.actor_id = b.actor_id
    INNER JOIN film as c ON a.film_id = c.film_id
    ORDER BY `actor`;
    
SELECT * FROM film_info;