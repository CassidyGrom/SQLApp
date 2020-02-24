// import consola package for console.log() styling
const consola = require("consola");
// import connection to make queries
const connection = require("../config/connection");

function addPerson() {
  console.log("adding person");
  const query = connection.query(
    "INSERT INTO people SET ?",
    {
      first: "Nathan",
      last: "Garcia",
      roleid: 50
    },
    (err, res) => {
      if (err) throw err;
      console.log(res.affectedRows + " person inserted!");
      // Call updateProduct AFTER the INSERT completes
    }
  );
  console.log(query.sql);
}

addPerson();
