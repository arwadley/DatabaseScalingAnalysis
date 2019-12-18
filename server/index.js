const express = require("express");
const path = require("path");
let app = express();
// const port = process.env.PORT;
const faker = require("faker");
const lorem = faker.lorem;
const port = 7777;
const db = require("../database/index.js");

app.use(express.static(path.join(__dirname, "../public/dist")));
app.use(express.json());

app.get("/item", (req, res) => {
  let id = req.query.id;
  db.retrieveItem(id, function(error, result) {
    if (error) {
      res.status(404).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/fs", (req, res) => {
  // CREATE TABLE product_description(
  //   id INT PRIMARY KEY,
  //   productName VARCHAR(100),
  //   productMaker VARCHAR(100),
  //   productDesc VARCHAR(500),
  //   productPrice DECIMAL(10,2),
  //   productRating DECIMAL(2,1),
  //   productNumOfRatings INT,
  //   productNumOfQuestionsAnswered INT,
  //   productCategory VARCHAR(100)
  // );

  let array = [];
  let current = {};
  for (let i = 0; i < 1000000; i++) {
    current = {};
    current.id = i;
    current.productName = faker.random.word();
    current.productMaker = faker.random.words(3);
    current.productDesc = faker.random.words(15);
    current.productPrice =
      Math.floor(Math.random() * (100000 - 10000) + 100) / 100;
    current.productRating = Math.floor(Math.random() * Math.floor(50)) / 10;
    current.NumOfRatings = Math.floor(Math.random() * Math.floor(500));
    current.NumOfQuestionsAnswered = Math.floor(
      Math.random() * Math.floor(300)
    );
    current.productCategory = faker.random.words(3);
    array.push(current);
  }
  console.log(array.length);
  res.end();
});
app.put("/item", (req, res) => {});

app.post("/item", (req, res) => {});

app.delete("/item", (req, res) => {});

app.listen(port, console.log(`Listening on port ${port}...`));
