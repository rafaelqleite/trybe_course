https://sqlbolt.com/lesson/select_queries_with_aggregates_pt_2

EX1)
SELECT Role, COUNT(*) as Artits from Employees WHERE Role = 'Artist';

EX2)
SELECT Role, COUNT(*) as Quantity from Employees GROUP BY Role;

EX3)
SELECT Role, Years_employed, SUM(Years_employed) FROM Employees WHERE Role = 'Engineer';
