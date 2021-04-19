# Exercício 5: Consulte a forma de se criar um dicionário chamado de dict
# comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu
# dobro.
dict = {}

for n in range(3, 21):
    dict[n] = n * 2

print(f"Eis o dict: {dict}")
