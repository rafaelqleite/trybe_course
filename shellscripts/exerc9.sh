#!/bin/bash

argumento=$1

if [ -d $argumento ]
then
    quantidade=`ls -l $argumento | wc -l`
    echo "O $argumento tem $quantidade arquivos."
else
    echo "o argumento $argumento não é um diretório"
fi