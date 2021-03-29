# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior
# quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo",
# "Joana"] , o retorno deve ser "Fernanda" .
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.

def maior_quantidade_caracteres(lista):
    saida = ''
    for item in lista:
        saida = item if (len(item) > len(saida)) else saida
    return saida


lista = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(maior_quantidade_caracteres(lista))
