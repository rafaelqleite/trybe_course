# Exercício 6: Dada uma string, construa um dicionário com a contagem de cada
# carácter da palavra. Utilize o pseudocódigo e o exemplo abaixo para se
# nortear.

# Para cada char na string:
#     - Se o char não estiver no dicionário, inclua com o valor 1;

#     - Se estiver, incremente o valor.


# # Exemplo:

# str = "bbbbaaaacccaaaaaaddddddddccccccc"
# # saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

# str = "coxinha"
# # saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# # Explicação: Nenhuma letra repete em coxinha :)

def conta_caracteres(word):
    dict = {}
    for i in word:
        if i in dict:
            dict[i] += 1
        else:
            dict[i] = 1
    return dict


word = "abacate"
print(conta_caracteres(word))

# https://www.educative.io/edpresso/how-to-check-if-a-key-exists-in-a-python-dictionary
