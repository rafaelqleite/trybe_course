https://sqlbolt.com/lesson/select_queries_with_aggregates

EX1)
SELECT MAX(Years_employed) FROM employees;

EX2)
SELECT Role, AVG(Years_employed) FROM employees GROUP BY Role;

EX3)
SELECT Building, SUM(Years_employed) FROM employees GROUP BY Building;
