PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    print('''Calculate area of square.''')
    return side * side


def rectangle(length, width):
    print('''Calculate area of rectangle.''')
    return length * width


def circle(radius):
    print('''Calculate area of circle.''')
    return PI * radius * radius


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
    print('''Sinal de aspas simples e dupla: " ' ''')
