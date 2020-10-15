USE sakila;

DELIMITER $$
CREATE FUNCTION retornaQuantidadeTotal(id SMALLINT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE saida FLOAT;
SELECT SUM(amount) FROM sakila.payment WHERE customer_id = id GROUP BY customer_id INTO saida;
RETURN saida;
END $$
DELIMITER ;

SELECT retornaQuantidadeTotal(15);

USE sakila;
DELIMITER $$
CREATE FUNCTION retornaFilme(inventory_id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
DECLARE saida VARCHAR(100);
SELECT title FROM sakila.film WHERE film_id = inventory_id INTO saida;
RETURN saida;
END $$
DELIMITER ;

SELECT retornaFilme(6);