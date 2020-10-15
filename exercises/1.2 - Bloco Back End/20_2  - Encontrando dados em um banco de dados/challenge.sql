SELECT nome FROM faculdade.biblioteca;
SELECT COUNT(nome) FROM faculdade.biblioteca;
SELECT * FROM faculdade.biblioteca WHERE NOT nome = 'Um livro do Ano' AND NOT nome = 'Novas conquistas novas responsabilidades' LIMIT 2;
SELECT * FROM faculdade.biblioteca ORDER BY ano_lancamento DESC, nome ASC;
SELECT * FROM faculdade.biblioteca ORDER BY quantidade DESC LIMIT 1;
SELECT * FROM faculdade.biblioteca ORDER BY vendas DESC LIMIT 4;