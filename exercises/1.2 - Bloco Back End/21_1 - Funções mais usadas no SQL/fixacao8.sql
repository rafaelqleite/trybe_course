SELECT rating, AVG(length) AS 'Média' FROM sakila.film 
GROUP BY rating HAVING AVG(length) BETWEEN 115.0 AND 121.50 ORDER BY AVG(length) DESC;
SELECT rating, SUM(replacement_cost) AS 'Total de custo de substituição' 
FROM sakila.film GROUP by rating HAVING SUM(replacement_cost) > 3950.50 ORDER BY SUM(replacement_cost) ASC;