# Exercício 3: Desafio do Palíndromo - Uma palavra é um palíndromo se a
# sequência de letras que a forma é a mesma, quer seja lida da esquerda
# para a direita ou vice-versa.
# Crie um algorítimo que, ao receber uma sequencia de caracteres, indique
# se ela é ou não um palíndromo. Para este exercício iremos considerar
#  todas os caracteres como minúsculos e desconsiderar espaços,
#  pontuação e caracteres especiais.

from deque import Deque


def isPalindromo(terms):
    deque = Deque()

    for character in terms:
        if character.isalpha():
            deque.push_back(character.lower())

    while len(deque) > 1:
        front_item = deque.pop_front()
        back_item = deque.pop_back()

        if front_item != back_item:
            return False
    return True


termo1_false = "Será que sou palíndromo?"
termo2_false = "mais um teste"
termo3_true = "madam"
termo4_true = "a dama admirou o rim da amada"
termo5_true = "Ze de Lima, Rua Laura, Mil e Dez"
termo6_true = "Luza Rocelina, a namorada do Manuel, leu na moda da Romana: anil e cor azul."

print(isPalindromo(termo1_false))
print(isPalindromo(termo2_false))
print(isPalindromo(termo3_true))
print(isPalindromo(termo4_true))
print(isPalindromo(termo5_true))
print(isPalindromo(termo6_true))
