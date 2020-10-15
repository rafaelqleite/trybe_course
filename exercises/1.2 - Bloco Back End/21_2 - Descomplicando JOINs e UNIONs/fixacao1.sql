SELECT a.actor_id, a.first_name, b.film_id FROM sakila.actor AS a 
INNER JOIN sakila.film_actor AS b ON a.actor_id = b.actor_id;

SELECT a.first_name, a.last_name, b.address FROM sakila.staff AS a
INNER JOIN sakila.address AS b ON a.address_id = b.address_id;
    
SELECT a.customer_id, a.first_name, a.email, a.address_id, b.address FROM sakila.customer AS a
INNER JOIN sakila.address AS b ON a.address_id = b.address_id ORDER BY a.first_name LIMIT 100;

SELECT a.first_name, a.email, a.address_id, b.address, b.district FROM sakila.customer AS a
INNER JOIN sakila.address AS b ON a.address_id = b.address_id AND a.first_name LIKE '%rene%';
    
SELECT a.first_name, COUNT(a.address_id) FROM sakila.customer AS a
INNER JOIN sakila.address AS b ON a.address_id = b.address_id
WHERE a.active = true GROUP BY a.first_name ORDER BY a.first_name DESC;
    
SELECT a.first_name, a.last_name, AVG(b.amount) FROM sakila.staff AS a
INNER JOIN sakila.payment AS b ON a.staff_id = b.staff_id GROUP BY a.first_name, a.last_name;

SELECT a.actor_id, a.first_name, b.film_id, c.title FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS b ON a.actor_id = b.actor_id
INNER JOIN sakila.film AS c ON b.film_id = c.film_id;
