# Exercício 2 : Exclua a regra anterior utilizando o parâmetro -D .
sudo iptables -D INPUT -p icmp -j REJECT;