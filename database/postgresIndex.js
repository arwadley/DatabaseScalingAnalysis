const pgp = require("pg-promise")({
  capSQL: true
});

const postgresPassword = require("../config.js");

let db = pgp(
  `postgres://postgres:${postgresPassword}@localhost:5432/gamazonproducts`
);

db.connect()
  .then(console.log("pgPromise connected"))
  .catch(error => console.log(error));

let getItemById = function(currentId, callback) {
  db.one("SELECT * FROM product_description WHERE id=$1", [currentId])
    .then(data => {
      callback(null, data);
    })
    .catch(error => callback(error, null));
};

let insertItem = function(item, callback) {
  db.none(
    "INSERT INTO product_description(id, productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered, productCategory)" +
      "VALUES($<item.id>, $<item.productName>, $<item.productMaker>, $<item.productDesc>, $<item.productPrice>, $<item.productRating>, $<item.productNumOfRatings>, $<item.productNumOfQuestionsAnswered>, $<item.productCategory>)",
    { item }
  )
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

let updateItem = function(item, callback) {
  db.none(
    "UPDATE product_description SET productName = $<item.productName>, productMaker = $<item.productMaker>, productDesc = $<item.productDesc>, " +
      "productPrice = $<item.productPrice>, productRating = $<item.productRating>, productNumOfRatings = $<item.productNumOfRatings>, " +
      "productNumOfQuestionsAnswered = $<item.productNumOfQuestionsAnswered>, productCategory = $<item.productCategory> WHERE id = $<item.id>",
    { item }
  )
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

let deleteItem = function(currentId, callback) {
  db.none("DELETE FROM product_description WHERE id=$1", [currentId])
    .then(data => {
      callback(null, data);
    })
    .catch(error => callback(error, null));
};

module.exports.db = db;
module.exports.getItemById = getItemById;
module.exports.insertItem = insertItem;
module.exports.deleteItem = deleteItem;
module.exports.updateItem = updateItem;
