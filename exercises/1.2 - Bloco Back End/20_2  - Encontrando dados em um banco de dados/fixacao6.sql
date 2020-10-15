SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(title) FROM sakila.film;
SELECT COUNT(customer_id) FROM sakila.customer;
SELECT COUNT(film_id) FROM sakila.film_category;
SELECT COUNT(country_id) FROM sakila.country;
SELECT name FROM sakila.language WHERE name != 'English';
SELECT title, release_year, rental_duration, rating, replacement_cost FROM sakila.film ORDER BY rental_duration, replacement_cost; 
