CREATE FULLTEXT INDEX index_category ON sakila.category (name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX index_category ON sakila.category;

SELECT *
FROM sakila.category
WHERE name = 'action';