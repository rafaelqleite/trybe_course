SELECT CONCAT(title, ' ', release_year) FROM sakila.film;
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;
SELECT CONCAT(address, ' - ', district) AS 'Endereço' FROM sakila.address;