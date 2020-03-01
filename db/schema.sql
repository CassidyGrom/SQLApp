DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR (30),
  salary  DECIMAL (10,2) DEFAULT 0,
  dept_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
id INTEGER AUTO_INCREMENT NOT NULL,
first VARCHAR (30),
last VARCHAR (30),
role_id INTEGER NOT NULL,
MANAGER_ID INTEGER,
PRIMARY KEY (id)
);
