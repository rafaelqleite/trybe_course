SELECT id, title FROM hotel.Books AS a WHERE NOT EXISTS ( SELECT * FROM hotel.Books_Lent AS b WHERE a.id = b.book_id);
SELECT id, title FROM hotel.Books AS a WHERE title LIKE '%lost%' AND EXISTS (SELECT * from hotel.Books_Lent AS b WHERE a.id = b.book_id AND b.returned = 0);
SELECT Name FROM hotel.Customers AS a WHERE NOT EXISTS (SELECT * FROM hotel.CarSales AS b WHERE a.CustomerID = b.CustomerId);
SELECT b.name, a.name FROM hotel.Cars AS a INNER JOIN hotel.Customers AS b
WHERE EXISTS(
    SELECT *
    FROM hotel.CarSales AS c
    WHERE c.CustomerID = b.CustomerId
    AND c.carID = a.ID
);
SELECT b.name, a.name FROM hotel.Cars AS a INNER JOIN hotel.Customers AS b
WHERE EXISTS(
    SELECT *
    FROM hotel.CarSales AS c
    WHERE c.CustomerID = b.CustomerId
    AND c.carID = a.ID
);