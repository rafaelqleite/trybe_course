import EmailNotFoundError
import smtplib
import ssl


class Mailer:
    @classmethod
    def send_email(cls, from_email, from_password, to_email, subject, message):
        """Para criar métodos de classe em Python, precisamos de adicionar um
        @classmethod em sua assinatura.

        Observe também que em métodos de classe o parâmetro self é substituído
        pelo cls. Isto indica que receberemos uma classe e não uma instância,
        o que pode ser particularmente útil caso seja necessário acessar alguma
        informação da classe, como por exemplo, uma constante.
        """
        body = f"Subject:{subject}\n\n{message}"
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            "smtp.gmail.com", 465, context=context
        ) as server:
            server.login(from_email, from_password)
            try:
                server.sendmail(from_email, to_email, body)
            except (smtplib.SMTPRecipientsRefused, smtplib.SMTPSenderRefused):
                raise EmailNotFoundError
