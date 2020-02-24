const sql = require("mysql");
// import consola package for console.log() styling
const consola = require("consola");
// import connection to make queries
const connection = require("../config/connection");

getAllDepartments = connection.query("SELECT * FROM departments");

console.log(getAllDepartments);

// const getAllDepartments = () => {
//   return new Promise((resolve, reject) => {
//     const getQuery = connection.query(
//       "SELECT * FROM departments",
//       (err, itemData) => {
//         if (err) {
//           consola.error(err);
//           reject(err);
//           return;
//         }
//         resolve(itemData);
//       }
//     );
//     console.log(getQuery.sql);
//   });
// };

// getAllDepartments();
