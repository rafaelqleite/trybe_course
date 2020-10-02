SELECT job_id, GROUP_CONCAT(employee_id, '') FROM hr.employees GROUP BY job_id;
SELECT phone_number FROM hr.employees;
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees SET phone_number = REPLACE(phone_number, 124, 999) WHERE phone_number LIKE '%124%';
SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;
SELECT job_id,  LPAD( max_salary, 7, '0'), LPAD( min_salary, 7, '0') FROM hr.jobs;
UPDATE hr.employees SET email = CONCAT(email, '@example.com');
SELECT * FROM hr.employees WHERE first_name = BINARY UPPER(first_name);
SELECT RIGHT(phone_number, 4) FROM hr.employees;
SELECT SUBSTRING_INDEX(street_address, ' ', -1) FROM hr.locations; -- https://www.w3schools.com/sql/trymysql.asp?filename=trysql_func_mysql_substring_index2
SELECT * FROM hr.locations WHERE LENGTH(street_address) <= (SELECT  MIN(LENGTH(street_address)) FROM hr.locations);
-- SELECT SUBSTRING_INDEX(job_title, ' ', 1) FROM hr.jobs;
SELECT job_title, SUBSTR(job_title,1, INSTR(job_title, ' ')-1) FROM hr.jobs;
-- SELECT LENGTH(first_name), first_name, last_name FROM hr.employees WHERE last_name LIKE '__c%';
SELECT first_name, last_name FROM hr.employees WHERE INSTR(last_name,'C') > 2;
SELECT first_name, LENGTH(first_name) FROM hr.employees WHERE first_name LIKE 'J%' OR first_name LIKE 'M%' OR first_name LIKE 'A%' ORDER BY first_name ;
SELECT first_name, LPAD(salary, 10, '$') FROM hr.employees;
SELECT LEFT(first_name, 8), REPEAT('$', FLOOR(salary/1000)), salary FROM hr. employees ORDER BY salary DESC;
