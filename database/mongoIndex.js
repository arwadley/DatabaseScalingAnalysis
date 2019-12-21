var MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "m_gamazon_products";

const client = new MongoClient(url);

let db;
let collection;

client.connect(function(error, client) {
  if (error) {
    console.log(error);
  } else {
    db = client.db(dbName);
    collection = db.collection("product_description");
  }
});

let addItem = function(item, callback) {
  collection.insertOne(item, function(error, result) {
    callback(error, result);
  });
};

let getItemById = function(currentId, callback) {
  currentId = Number(currentId);
  collection.findOne({ id: currentId }, function(error, result) {
    callback(error, result);
  });
};

let deleteItemById = function(currentId, callback) {
  currentId = Number(currentId);
  collection.deleteOne({ id: currentId }, function(error, result) {
    callback(error, result);
  });
};

module.exports.collection = collection;
module.exports.addItem = addItem;
module.exports.getItemById = getItemById;
module.exports.deleteItemById = deleteItemById;
