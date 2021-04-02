class User:
    def __init__(self, name, email, password):
        """ Método construtor da classe User.

        Responsável por inicializar os atributos da instância.
        Aqui, a instância é representada por self, que deve ser
        declarada explicitamente.
        O self é um padrão de nomenclatura equivalente ao this,
        que é muito utilizado em outras linguagens."""
        self.name = name
        self.email = email
        self.password = password
