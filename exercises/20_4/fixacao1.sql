INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
	VALUES ('Rafael', 'Leite', 3, 2, 'rafael');
    
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
	VALUES ('Rafael2', 'Leite2', 3, 2, 'rafaelzito2'),
    ('Rafael3', 'Leite3', 3, 2, 'rafaelzito3');
    
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer LIMIT 5;
    
INSERT INTO sakila.category (name)
	VALUES ('Categoria1'),
    ('Categoria2'),
    ('Categoria3');
    
INSERT INTO sakila.store (manager_staff_id, address_id)
	VALUES (3, 3);