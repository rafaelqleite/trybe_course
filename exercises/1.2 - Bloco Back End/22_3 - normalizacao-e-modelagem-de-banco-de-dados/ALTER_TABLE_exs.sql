ALTER TABLE hr.locations CHANGE street_address address VARCHAR(40);
ALTER TABLE hr.regions CHANGE region_name region VARCHAR(25);
ALTER TABLE hr.countries CHANGE country_name country VARCHAR(40);
ALTER TABLE hr.countries MODIFY country VARCHAR(60);

DESCRIBE hr.regions;
DESCRIBE hr.countries;

SHOW COLUMNS FROM hr.countries;