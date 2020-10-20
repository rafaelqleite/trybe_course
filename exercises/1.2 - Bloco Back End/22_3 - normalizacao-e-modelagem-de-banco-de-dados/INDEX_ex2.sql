CREATE FULLTEXT INDEX index_postal_code ON sakila.address (postal_code);

SELECT * FROM sakila.address
WHERE MATCH(postal_code) AGAINST('36693');

DROP INDEX index_postal_code ON sakila.address;

SELECT * FROM sakila.address WHERE postal_code = '36693';