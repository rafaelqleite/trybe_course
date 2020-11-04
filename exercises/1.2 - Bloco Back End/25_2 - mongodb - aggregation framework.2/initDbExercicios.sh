#!/bin/bash

	mongoimport --db erp ./clientes.json
	mongoimport --db erp ./produtos.json
	mongoimport --db erp ./vendas.json
