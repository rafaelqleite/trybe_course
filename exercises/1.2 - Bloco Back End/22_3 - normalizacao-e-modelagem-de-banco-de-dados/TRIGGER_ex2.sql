USE BeeMovies;

DELIMITER $$
CREATE TRIGGER update_movies_after
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
SET NEW.ticket_price_estimation = IF (NEW.ticket_price > OLD.ticket_price , 'INCREASING', 'DRECREASING');
INSERT INTO movies_logs (movie_id, action, log_date) VALUES (NEW.movie_id, 'UPDATE', NOW());
END; $$
DELIMITER ;

UPDATE BeeMovies.movies SET ticket_price = 50 WHERE movie_id = 20;
