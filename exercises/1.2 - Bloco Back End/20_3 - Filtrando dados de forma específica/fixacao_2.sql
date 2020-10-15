SELECT first_name, last_name, email FROM sakila.customer WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd, mason', 'morales', 'kennedy') ORDER BY first_name;
SELECT email FROM sakila.customer WHERE address_id IN (172, 173, 174, 175, 176) ORDER BY email;
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
SELECT title, release_year, rental_duration FROM sakila.film WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC;
SELECT title, rating FROM sakila.film WHERE rating <> 'R' AND rating <> 'NC-17' ORDER BY rating ASC;