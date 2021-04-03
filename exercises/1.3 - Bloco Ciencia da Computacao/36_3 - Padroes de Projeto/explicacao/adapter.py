"""
Neste exemplo utilizamos a classe abstrata BookRetriever para definir uma
interface de métodos que serão utilizados pelo nosso código cliente.

A classe BookImporter é incompatível com nosso estoque (Stock),
pois nos envia dicionários ao invés de livros.

O nosso adaptador (Adapter) é composto por um objeto BookImporter
a ser adaptado.

Quando o cliente invoca o método `retrieve_books` da
classe adaptadora (`Adapter`), estamos realizando a tradução para a
interface esperada pelo cliente (um conjunto de livros e não dicionários).
"""
from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable


class Book:

    def __init__(self, isbn, title, author, qty):
        self.isbn = isbn
        self.title = title
        self.author = author
        self.qty = qty


class Stock(Iterable):

    def __init__(self):
        self._book_stock = []

    def add_book(self, book):
        self._book_stock.append(book)

    def __iter__(self):
        """Retorna o iterador a partir da coleção de livros em estoque.

        Equivalente ao método iterator "ConcreteAgreggator" do diagrama.
        """
        return StockIterator(self._book_stock)


class StockIterator(Iterator):

    def __init__(self, iterable):
        self._iterable = iterable
        self._position = 0

    def __next__(self):
        """Retorna o próximo elemento da coleção.

        Uma exceção é lançada quando não há mais elementos a serem percorridos.
        """
        try:
            current_value = self._iterable[self._position]
        except IndexError:
            raise StopIteration()
        else:
            self._position += 1
            return current_value


class BookImporter:
    def __init__(self):
        # adicionei alguns livros no construtor
        # somente para didática
        self._books = [
            {
                "isbn": "7b599c8bfcdd8d30",
                "title": "Camp Midnight",
                "author": "Steven Seagle",
                "qty": 8,
            },
            {

                "isbn": "abbb492978ff656d",
                "title": "The Secret Garden",
                "author": "Frances Burnett",
                "qty": 4,
            },
        ]

    # ...

    def load_books(self):
        """Retorna os livros carregados em memória.

        Equivalente a specificRequests no diagrama."""
        return self._books


class BookRetriever(ABC):
    """Classe abstrata que define a interface utilizada pelo código cliente"""

    @abstractmethod
    def retrieve_books(self):
        raise NotImplementedError()


class Adapter(BookRetriever):
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def retrieve_books(self):
        # os livros são recuperados como dicionários
        raw_books = self.adaptee.load_books()
        # converte os dicionários em livros
        books = [
            Book(
                isbn=book["isbn"],
                title=book["title"],
                author=book["author"],
                qty=book["qty"],
            )
            for book in raw_books
        ]
        # retorna uma lista de livros
        return books


"""O código cliente recebe uma lista de livros
para adicionar em estoque
preciso de um objeto livro,
porém o sistema de importação nos provê um dicionário."""
stock = Stock()
# Enviamos o importador para ser adaptado
adapter = Adapter(BookImporter())
books = adapter.retrieve_books()
# Enfim podemos armazenar os livros
for book in books:
    stock.add_book(book)
