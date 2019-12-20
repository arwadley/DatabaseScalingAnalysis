const express = require("express");
const path = require("path");
let app = express();
const faker = require("faker");
const port = 7777;
const dbPG = require("../database/postgresIndex.js");
let fs = require("fs");

app.use(express.static(path.join(__dirname, "../public/dist")));
app.use(express.json());

app.get("/item", (req, res) => {});

app.put("/item", (req, res) => {});

app.post("/item", (req, res) => {});

app.delete("/item", (req, res) => {});

app.get("/fs", (req, res) => {
  let string =
    "id, productname, productmaker, productdesc, productprice, productrating, productnumofratings, productnumofquestionsanswered, productcategory + \n";
  for (let i = 9500000; i < 10000000; i++) {
    let id = i;
    let productName = faker.random.word();
    let productMaker = faker.random.words(2);
    let productDesc = faker.random.words(10);
    let productPrice = (i % 500) * 1.01;
    let productRating = (i % 5) * 1.0;
    let productNumOfRatings = (i % 500) + 12;
    let productNumOfQuestionsAnswered = (i % 300) + 3;
    let productCategory = faker.random.words(2);
    string +=
      id +
      ";" +
      productName +
      ";" +
      productMaker +
      ";" +
      productDesc +
      ";" +
      productPrice +
      ";" +
      productRating +
      ";" +
      productNumOfRatings +
      ";" +
      productNumOfQuestionsAnswered +
      ";" +
      productCategory +
      "\n";
  }
  let csvFileName = __dirname + "csvData20.csv";
  fs.writeFile(csvFileName, string, function(err, data) {
    if (err) {
      console.log("oh no!");
      lastUploaded = csvFileName;
      res.status(400).end();
    } else {
      console.log(csvFileName);
      res.status(200).end();
    }
  });
});

app.listen(port, console.log(`Listening on port ${port}...`));
/Users/alyssawadley/Documents/GitHub/product-description/servercsvData01.csv

mongoimport -d m_gamazon_products -c product_description --type csv --headerline --file /Users/alyssawadley/Documents/GitHub/product-description/servercsvData20.csv