USE company_db;

INSERT INTO department
(name)
VALUE
("news"),
("innovation"),
("data");

INSERT INTO role
(title, salary, dept_id)
VALUE
("reporter","45000", "1"),
("developer", "65000", "2"),
("developer", "80000", "3");


INSERT INTO employee
(first, role_id)
VALUE
("Brianna", "1"),
("Cassidy", "2"),
("Jenna", "1"),
("Arjun", "2");