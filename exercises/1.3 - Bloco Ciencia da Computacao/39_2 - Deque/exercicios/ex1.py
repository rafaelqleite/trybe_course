# Exercício 1: Aprimorando a classe Deque - Nossa classe Deque já atende as
# principais operações que esse TAD nos oferece 🚀 mas que tal melhorarmos?
# Para isso você deve adicionar os seguintes métodos:
# a. clear(self) - Este método deve ser responsável por limpar a estrutura,
#  eliminando todos os elementos contidos dentro da deque.
# b. exists(self, value) - Este método deve ser usado para indicar se o valor
# do argumento existe em nossa estrutura. Retorne True se existir e False
# caso contrário.
# Nota: Fique a vontade para escolher por qual extremidade será iniciada a
# consulta.
# c. peek(self, position, order) - Este método deve ser usado para retornar
# o valor do conteúdo da posição indicada. A peculiaridade desse método é a
# ordem que essa consulta deve ser feita. Caso o campo order não seja
# informado,
#  a consulta deve ser realizada através da extremidade da esquerda front ,
#  no entanto, caso o campo possua o valor desc , a consulta deve ser através
#  da extremidade da direita back .
# Como exemplo, assuma uma deque composto com os seguintes elementos:
# [22, 2, 77, 6, 43, 76, 89, 90]

from deque import Deque


deque = Deque()
elementos = [22, 2, 77, 6, 43, 76, 89, 90]
for value in elementos:
    deque.push_front(value)
print(deque)  # Deque(90, 89, 76, 43, 6, 77, 2, 22)
print(deque.exists(6))  # True
print(deque.exists(32))  # False
print(deque.peek(0))  # 90
print(deque.peek(1))  # 89
print(deque.peek(99))  # None
deque.clear()
print(deque)  # Deque()
