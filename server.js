const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
// load environment variables
require("dotenv").config();

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // use values stored in .env file
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  askClient();
}

function askClient() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What do you want do?",
        name: "tableChoice",
        choices: [
          "view all employees",
          "view employees by role",
          "add department",
          "add role",
          "add employee",
          "update employee role"
        ]
      }
    ])
    .then(answers => {
      if (answers.tableChoice === "view all employees") {
        console.log("ta-daa");
        peopleView();
      }
      // if (answers.tableChoice === "view employees by department") {
      //   departmentView();
      // }
      else if (answers.tableChoice === "view employees by role") {
        roleView();
      } else if (answers.tableChoice === "add department") {
        addDepartment();
      } else if (answers.tableChoice === "add role") {
        addRole();
      } else if (answers.tableChoice === "add employee") {
        addEmployee();
      } else if (answers.tableChoice === "update employee role") {
        updateEmployee();
      } else {
        console.log("please choose an option, yo");
        askClient();
      }
    });
}

//ALL FUNCTIONS
//PeopleData
function peopleView() {
  // read all items from database and print them to console
  // NEED TO MODIFY TO JOIN TABLES
  connection.query("SELECT * FROM employee", (err, peopleData) => {
    if (err) {
      throw err;
    }
    console.table(peopleData);
  });
}

// function departmentView() {
//   connection.query("SELECT * FROM department", (err, departmentData) => {
//     if (err) {
//       throw err;
//     }
//     console.table(departmentData);
//   });
// }

function roleView() {
  connection.query(
    "SELECT employee.role_id, employee.first, employee.last, role.id, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id;",
    (err, roleData) => {
      if (err) {
        throw err;
      }
      console.table(roleData);
    }
  );
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the department?"
      }
    ])
    .then(function(answers) {
      connection.query(
        "INSERT INTO department SET ?",
        { name: answers.name },
        function(err) {
          if (err) throw err;
          console.log("Your department was created successfully!");
        }
      );
    });
}
// export our connection
module.exports = connection;
