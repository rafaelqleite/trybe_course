#!/bin/bash

    pergunta=$1
    
    echo "7-) Exercício pegando o caminho por argumento"
    if [ -d $pergunta ]
    then
        echo "Este é um diretório"
    elif [ -f $pergunta ]
    then
        echo "Este é um arquivo"
    else
        echo "Nâo é um arquivo ou diretório!"
    fi

    ls -l $pergunta