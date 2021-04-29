# Exercício 2: Limitando capacidade da Deque - Uma das características da Deque
#  é a capacidade de balanceamento, enviando conflitos ao inserir ou remover
#   itens em suas extremidades. Nossa classe Deque já possui essa
#   característica 🚀, no entanto, para termos melhor controle sobre a
#   quantidade de itens que podemos ter em nossa fila de dois fins, você
#   deve limitar a capacidade da mesma, assim, a estrutura deverá respeitar
#   as seguintes afirmações:
# Realizar inserção em uma deque cheia causa overflow;
# Realizar remoção em uma deque vazia causa underflow;
# Utilize o construtor da classe para definir a capacidade da estrutura,
# exemplo Deque(10) . Retorne exceptions , ao contemplar os pontos acima,
# exemplo: raise Exception("Overflow") .

from deque_ex2 import Deque


deque = Deque(3)
print(deque)

elementos = [22, 2, 77]
for value in elementos:
    deque.push_front(value)

# print(deque)
# deque.push_front(5)  # retorna uma exception

deque.clear()
print(deque)
deque.pop_back()  # retorna uma exception
