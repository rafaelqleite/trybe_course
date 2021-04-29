from stack import Stack

# Exercício 1: Estenda a classe Stack , que escrevemos durante as explicações
# do conteúdo, adicionando uma nova função chamada min_value() que irá retornar
#  o menor valor inteiro presente na pilha.

elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
content_stack = Stack()
for elem in elements:
    content_stack.push(elem)
# saída: 1
print(content_stack.min_value())
content_stack.push(-5)
# saída: -5
print(content_stack.min_value())
