UPDATE sakila.actor SET first_name = 'JULES' WHERE first_name = 'JULIA';
UPDATE sakila.category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';
UPDATE sakila.film SET replacement_cost = 25 WHERE length > 100 AND rating IN('G', 'PG', 'PG-13') AND replacement_cost > 20;
UPDATE sakila.film SET replacement_cost = (
	CASE 
		WHEN length <= 100 THEN 10
		WHEN length > 100 THEN 20
	END
);