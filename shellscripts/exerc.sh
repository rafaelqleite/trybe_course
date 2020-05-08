#!/bin/bash

    echo "1-) Shell script é demais!"

    variavel="2-)Shell Script com variáveis é demais!"

    echo $variavel

    auxiliar=$(hostname)

    echo "3-) Este computador está rodando no computador $auxiliar"

    caminho=/home/rafael/teste.txt

    if [ -e $caminho ]
    then
        "4-)O caminho $caminho está habilitado!"
    fi

    if [ -w $caminho ]
    then
        echo "Você tem permissão para editar $caminho"
    else
        echo "Você NAO tem permissão para editar $caminho"
    fi

