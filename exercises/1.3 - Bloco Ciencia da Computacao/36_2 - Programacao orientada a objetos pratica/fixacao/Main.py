import User
import UserService
import Mailer


# Código cliente (código que utiliza nossas classes)
user = User("name", "name@gmail.com", "?????")
service = UserService(user, Mailer)
"""Lembra quando dissemos que íamos explicar a diferença de mensagem e método?
Pois então, observe que, quando invocamos o método abaixo (reset_password), não
passamos o parâmetro self. Implicitamente o Python passa uma mensagem para a
instância, chamando o método já com o parâmetro self. Em outras palavras, podemos
dizer que a mensagem é uma camada acima do método que o encapsula"""
service.reset_password()
