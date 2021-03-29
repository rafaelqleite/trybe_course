# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def retorna_maior(valor1, valor2):
    #    if (valor1 > valor2):
    #        return valor1
    #    return valor2
    return valor1 if (valor1 > valor2) else valor2
# https://pt.stackoverflow.com/questions/161505/em-python-existe-opera%C3%A7%C3%A3o-tern%C3%A1ria


print(retorna_maior(5, 10))
