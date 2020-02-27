const mysql = require("mysql");
const inquirer = require("inquirer");
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
        message: "Which table would you like to update?",
        name: "tableChoice",
        choices: ["people", "department", "role"]
      }
    ])
    .then(answers => {
      console.log(answers.tableChoice);
      // Use user feedback for... whateve
    });
}

// export our connection
module.exports = connection;
