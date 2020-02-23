const mysql = require("mysql");
// load environment variables
require("dotenv").config();

// create connection to database
const connection = mysql.createConnection({
  host: "localhost",
  //might need to change back to 3006
  port: 3307,
  // use values stored in .env file
  // user: process.env.DB_USER,
  // password: process.env.DB_PW,
  database: process.env.DB_NAME
});

// export our connection
module.exports = connection;
