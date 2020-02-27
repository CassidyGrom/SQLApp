const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
// load environment variables
require("dotenv").config();

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "nj2019!!",
  database: "company_db"
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
          "view employees by department",
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
      if (answers.tableChoice === "view employees by department") {
        departmentView();
      }
    });
}

//ALL FUNCTIONS
//PeopleData
function peopleView() {
  // read all items from database and print them to console
  connection.query("SELECT * FROM people", (err, peopleData) => {
    if (err) {
      throw err;
    }
    console.table(peopleData);
  });
}

function departmentView() {
  connection.query("SELECT * FROM department", (err, departmentData) => {
    if (err) {
      throw err;
    }
    console.table(departmentData);
  });
}
// export our connection
module.exports = connection;
