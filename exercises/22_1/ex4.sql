CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE gerente (
	gerente_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) ENGINE = InnnoDb;

CREATE TABLE local (
	localizacao_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
    cidade VARCHAR(30) NOT NULL,
    rua VARCHAR(100) NOT NULL
) ENGINE = InnoDb;
  
CREATE TABLE cuidador (
	cuidador_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE = InnoDb;

CREATE TABLE animais (
	animal_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
	especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(20) NOT NULL,
    idade SMALLINT NOT NULL,
    FOREIGN KEY (localizacao_id) REFERENCES local(localizacao_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
    ) ENGINE = InnoDb;
  