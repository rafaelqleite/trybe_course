USE BeeMovies;
DELIMITER $$
CREATE TRIGGER release_year_update
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
SET NEW.release_year = YEAR(NOW());
END; $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER action_update
BEFORE INSERT ON movie_logs
FOR EACH ROW
BEGIN
SET NEW.action = 'INSERT';
SET NEW.log_date = DATE(NOW());
END; $$
DELIMITER ;

INSERT INTO BeeMovies.movies (ticket_price, ticket_price_estimation) VALUES (20, 30);
SHOW TRIGGERS FROM BeeMovies;

DROP TRIGGER release_year_update;