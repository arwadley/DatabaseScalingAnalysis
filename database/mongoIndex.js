const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "m_gamazon_products";

const client = new MongoClient(url);

var database;

client.connect(function(error, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  database = client.db(dbName);
});
