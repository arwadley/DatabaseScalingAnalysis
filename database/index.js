const mysql = require("mysql");

const productDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "amazonProductDescriptions"
});

productDB.connect(console.log("connected to DB"));

const getProduct = (productID, callback) => {
  productDB.query(
    `SELECT * FROM products WHERE id = ${productID};`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    }
  );
};

const getAllProducts = callback => {
  productDB.query(`SELECT * FROM products;`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

module.exports = { getProduct, getAllProducts };
