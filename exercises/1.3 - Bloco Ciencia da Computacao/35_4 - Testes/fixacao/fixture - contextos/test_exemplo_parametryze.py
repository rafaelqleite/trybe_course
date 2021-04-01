import json
import pytest
import generate_simple_report from algummodulo

@pytest.fixture

def stock_data(path):
    with open(path) as data_file:
        data = json.load(data_file)
    return data

def test_generate_report_empty_data():
    #   arrange
    data = []
    #   act
    report = None
    #   assert
    assert report is None

@pytest.mark.parametrize('stock_data', ['./tests/testdata/stock.json', './test/testdata/stock2.json' ]) 
def test_generate_report_actual_data(stock_data):
    #   act
    report = generate_simple_report(stock_data)
    #   assert
    assert report.splitlines()[0] == "Data de fabricação mais antiga"
