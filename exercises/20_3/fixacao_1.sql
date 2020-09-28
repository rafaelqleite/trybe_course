SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT first_name FROM sakila.customer WHERE active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH';
SELECT  title, description, release_year, replacement_cost from sakila.film WHERE rating <> 'NC-17' AND replacement_cost > 18.00 ORDER BY replacement_cost DESC LIMIT 100;
