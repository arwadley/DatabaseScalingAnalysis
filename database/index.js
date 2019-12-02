const mysql = require("mysql");

const productDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "amazonProductDescriptions"
});

productDB.connect(console.log("connected to DB"));

module.exports = {};
