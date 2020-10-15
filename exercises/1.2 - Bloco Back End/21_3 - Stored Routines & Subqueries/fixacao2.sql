USE sakila;
DELIMITER $$
CREATE PROCEDURE fix() 
BEGIN
SELECT actor_id, COUNT(*) FROM sakila.film_actor GROUP BY actor_id ORDER BY COUNT(*) DESC LIMIT 10;
END $$
DELIMITER ;

CALL fix();

DELIMITER $$
CREATE PROCEDURE obterDadosCategoria(IN nomedacategoria VARCHAR(50))
BEGIN
SELECT a.film_id, b.title, a.category_id, c.name FROM sakila.film_category AS a
INNER JOIN sakila.film AS b ON a.film_id = b.film_id
INNER JOIN sakila.category AS c ON a.category_id = c.category_id
WHERE c.name = nomedacategoria;
END $$
DELIMITER ;

CALL obterDadosCategoria('Action');

USE SAKILA;
DELIMITER $$
CREATE PROCEDURE retornarStatusCliente(IN emailentrada VARCHAR(50), OUT saida TINYINT)
BEGIN
SELECT active  INTO saida FROM sakila.customer WHERE email = emailentrada;
END $$
DELIMITER ;

CALL retornarStatusCliente('MARY.SMITH@sakilacustomer.org', @bleh);
SELECT @bleh;