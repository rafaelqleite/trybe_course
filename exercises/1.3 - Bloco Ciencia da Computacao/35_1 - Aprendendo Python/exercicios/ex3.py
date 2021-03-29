# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um
# quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

def imprime_asteriscos(n):
    for i in range(0, n):
        print("*" * n)


imprime_asteriscos(5)
