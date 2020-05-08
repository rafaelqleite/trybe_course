#!/bin/bash

#11. Modifique o Shell Script do exercício anterior para
#0receber o diretório onde estão os arquivos e a extensão
#dos arquivos que devem ser modificados como argumento 
#(ou parâmetro). Adicione também um mensagem mostrando 
#como eram o como vão ficar os nomes dos arquivos a serem 
#modificados.
argumento1=$1 #este eh o diretorio
argumento2=$2 #esta eh a extensão dos arquivos

cd $argumento1

dia=$(date +%F)

for arquivo in `ls *.$argumento2`
do
    echo "O arquivo $arquivo passará a se chamar $dia-${arquivo}"
    mv $arquivo $dia-${arquivo}
done