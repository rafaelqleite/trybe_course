import pytest

@pytest.fixture
def orders():
    """Nosso cenário (contexto) temos os seguintes pedidos"""
    return [
        {"customer": "maria", "order": "pizza", "day": "terça-feira"},
        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},
        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},
        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},
    ]

def test_get_most_ordered_dish_per_costumer_when_customer_is_maria(orders):
    assert get_most_ordered_dish_per_costumer(orders, "maria") == "pizza" 

def test_get_order_frequency_per_costumer_when_customer_is_joao_and_order_is_pizza(orders):
    assert get_order_frequency_per_costumer(orders, "joao", "pizza") == 0

def test_get_order_frequency_per_costumer_when_customer_is_maria_and_order_is_hamburger(orders):
    assert get_order_frequency_per_costumer(orders, "maria", "hamburger") == 1
