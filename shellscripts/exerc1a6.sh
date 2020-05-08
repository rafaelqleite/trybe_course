#!/bin/bash

    echo "1-) Shell script é demais!"

    variavel="2-)Shell Script com variáveis é demais!"

    echo $variavel

    auxiliar=$(hostname)

    echo "3-) Este computador está rodando no computador $auxiliar"

    caminho=/home/rafael/teste.txt

    if [ -e $caminho ]
    then
        echo "4-)O caminho $caminho está habilitado!"
    fi

    if [ -w $caminho ]
    then
        echo "Você tem permissão para editar $caminho"
    else
        echo "Você NAO tem permissão para editar $caminho"
    fi

    

    for words in $(cat $caminho)
    do
        echo "5-) $words"
    done

    teste="shell script usando estrutura repeticao por terminal"

    printf "\nForma 2 de se fazer:\n"

    for palavras in $teste
    do
        echo "5.1) $palavras"
    done

    ##parte 6
    read -p "6-) Indique o caminho de um arquivo ou diretório: " pergunta
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

    #inicio exercicio 7
    