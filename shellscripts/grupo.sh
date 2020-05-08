#!/bin/bash
# Eu Sou Tryber e ...
echo "1-) Shell Script é demais!"

variavel="Shell Script com variáveis é demais!"

echo "2-) Agora com variável: $variavel"

auxiliar=$(hostname)

echo "3-) Este script está rodando no computador: $auxiliar"

caminho=/home/rafael/teste.txt

if [ -e $caminho ]
then 
    echo "O caminho $caminho está habilitado"
    if [ -w $caminho ]
    then
        echo "Você tem permissão para editar $caminho"
    else
        echo "Você NÃO foi autorizado a editar $caminho"
    fi

else
    echo "Este caminho não está habilitado"
fi

for nomes in $(cat $caminho)
do
    echo "$nomes"
done

echo "Esta eh a parte 6)"
echo "Digite um caminho de arquivo ou diretório: "
read pergunta
if [ -d $pergunta ]
then
    echo "Eh um diretorio"
elif [ -f $pergunta ]
then
    echo "Eh um arquivo"
else
    echo "Eh um outro tipo de arquivo"
fi

ls -l $pergunta

if [ -d pergunta ]
then

auxiliar2 = $(ls -l $pergunta)
auxiliar3 = $($pergunta | grep ^[^d])
auxiliar4 = $($pergunta | wc -l)
    echo "O $caminho2 tem $auxiliar4 arquivos"
else
    echo "O argumento não é um diretório"
fi
