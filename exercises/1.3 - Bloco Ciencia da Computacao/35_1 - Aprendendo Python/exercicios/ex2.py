#   Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def teste(parametro):
    soma = 0
    for item in parametro:
        soma += item
    return soma / len(parametro)


lista = [1, 2, 3, 4]

print(teste(lista))
