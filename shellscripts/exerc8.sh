#!/bin/bash

    pergunta=$*
    
    for argumento in $pergunta
    do
        printf "\n"
        echo "8-) Exercício pegando vários caminhos por argumento, argumento: $argumento"
        printf "\n"
        if [ -d $argumento ]
        then
            echo "Este é um diretório, argumento: $argumento"
        elif [ -f $argumento ]
        then
            echo "Este é um arquivo, argumento: $argumento"
        else
            echo "Nâo é um arquivo ou diretório!, argumento: $argumento"
        fi
        ls -l $argumento
    done

    