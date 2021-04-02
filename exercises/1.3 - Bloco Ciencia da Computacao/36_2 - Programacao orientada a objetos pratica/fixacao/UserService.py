import os


class UserService:
    def __init__(self, user_instance, mailer_class):
        """Inicializa os atributos privados user e mailer com uma instância
        de usuário e uma classe de gerenciamento de emails.

        Quando delegamos um comportamento para uma classe ou instância externa
        através de um atributo interno, combinando implementações de diferentes
        classes, temos o que chamamos de composição.
        """
        self.__user = user_instance
        self.__mailer = mailer_class

    def reset_password(self):
        from_email = os.environ.get("SYSTEM_EMAIL", "app-dev@email.com")
        from_password = os.environ.get("SYSTEM_EMAIL_PASSWORD", "123456")
        to_email = self.__user.email
        subject = "Reset your password"
        message = "Instructions to reset your password"

        # Disparamos o envio do email diretamente através da classe do __mailer
        self.__mailer.send_email(
            from_email, from_password, to_email, subject, message
        )
