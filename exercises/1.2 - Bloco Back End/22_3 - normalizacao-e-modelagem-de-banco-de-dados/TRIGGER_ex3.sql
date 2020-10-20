USE BeeMovies;

DELIMITER $$
CREATE TRIGGER delete_movies
AFTER DELETE ON movies
FOR EACH ROW
BEGIN
INSERT INTO movies_logs (movie_id, action, log_date) VALUES (OLD.movie_id, 'DELETE', DATE(NOW()) );
END; $$
DELIMITER ;

DELETE FROM movies;
