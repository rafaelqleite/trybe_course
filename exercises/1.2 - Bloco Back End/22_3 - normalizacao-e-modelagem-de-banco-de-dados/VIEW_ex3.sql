CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, a.city_id, b.city  FROM sakila.address AS a
INNER JOIN sakila.city AS b on a.city_id = b.city_id
ORDER BY b.city_id;

SELECT * FROM address_info;

