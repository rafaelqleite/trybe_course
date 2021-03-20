# Exercício 7 : No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir nosso próprio
# servidor HTTPS, utilizando nosso próprio certificado!
# Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já vem instalada na
#  maioria das distro Linux.
# Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que,
# como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora,
#  de modo que ele só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser
#  aceito pelo navegador.

openssl genrsa -out key.pem;
openssl req -new -key key.pem -out csr.pem;
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem;
rm csr.pem;

# COMANDO ACIMA CRIAM o cert.pem (o certificado) e o key.pem (chave privada)

# Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem (chave privada).
#  Copie os dois arquivos para um diretório onde iremos criar nosso server HTTPS, utilizando o
#  modulo HTTPS do Node.js .
# Siga a documentação do módulo para criar seu servidor HTTPS.
# Acesse o servidor utilizando o navegador. Perceba que ele irá informar que o certificado não é
# reconhecido por ele, pois não foi assinado por nenhuma entidade da confiança dele.
# Acesse o servidor novamente, porém, desta vez utilizando cURL.
# Por último, vamos utilizar um recurso do cURL, somente para testes (somente utilize, caso realmente
#  você esteja esperando por aquilo), que é o parâmetro -k ou --insecure . Com ele, falamos para o
#  nosso cURL prosseguir a request mesmo sabendo que a conexão não é "confiável".