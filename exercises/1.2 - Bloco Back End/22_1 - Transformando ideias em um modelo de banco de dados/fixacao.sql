CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE artista(
artista_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50)
) engine=InnoDB;

CREATE TABLE estilomusical(
    estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) engine=InnoDb;

CREATE TABLE album(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artista(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) engine=InnoDB;






