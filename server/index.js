const express = require("express");
const path = require("path");
let app = express();
const port = 7777;
const dbPG = require("../database/postgresIndex.js");
let mDB = require("../database/mongoIndex");

app.use(express.static(path.join(__dirname, "../public/dist")));
app.use(express.json());

app.get("/itemIdMongo", (req, res) => {
  let id = req.query.id;
  mDB.getItemById(id, function(error, result) {
    if (error) {
      res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/itenNameMongo", (req, res) => {});

app.put("/itemMongo", (req, res) => {
  let updatedFields = req.body;
  let id = updatedFields.id;
  console.log(updatedFields);
  mDB.updateItemById(id, updatedFields, function(error, result) {
    if (error) {
      res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/itemMongo", (req, res) => {
  let product = req.body;
  mDB.addItem(product, function(error, result) {
    if (error) {
      console.log(error);
      res.status(400).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.delete("/itemMongo", (req, res) => {
  let id = req.query.id;
  mDB.deleteItemById(id, function(error, result) {
    if (error) {
      res.status(400).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/itemIdPG", (req, res) => {
  let id = req.query.id;
  dbPG.getItemById(id, function(error, result) {
    if (error) {
      res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/itenNamePG", (req, res) => {});

app.put("/itemPG", (req, res) => {
  let updatedItem = req.body;
  dbPG.updateItem(updatedItem, function(error, result) {
    if (error) {
      res.status(400).send();
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/itemPG", (req, res) => {
  let product = req.body;
  dbPG.insertItem(product, function(error, result) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.delete("/itemPG", (req, res) => {
  let id = req.query.id;
  dbPG.deleteItem(id, function(error, result) {
    if (error) {
      res.status(400).sendDate(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(port, console.log(`Listening on port ${port}...`));

// helper function used to create data and write to csv files
// app.get("/fs", (req, res) => {
//   let string =
//     "id, productname, productmaker, productdesc, productprice, productrating, productnumofratings, productnumofquestionsanswered, productcategory + \n";
//   for (let i = 9500000; i < 10000000; i++) {
//     let id = i;
//     let productName = faker.random.word();
//     let productMaker = faker.random.words(2);
//     let productDesc = faker.random.words(10);
//     let productPrice = (i % 500) * 1.01;
//     let productRating = (i % 5) * 1.0;
//     let productNumOfRatings = (i % 500) + 12;
//     let productNumOfQuestionsAnswered = (i % 300) + 3;
//     let productCategory = faker.random.words(2);
//     string +=
//       id +
//       ";" +
//       productName +
//       ";" +
//       productMaker +
//       ";" +
//       productDesc +
//       ";" +
//       productPrice +
//       ";" +
//       productRating +
//       ";" +
//       productNumOfRatings +
//       ";" +
//       productNumOfQuestionsAnswered +
//       ";" +
//       productCategory +
//       "\n";
//   }
//   let csvFileName = __dirname + "csvData20.csv";
//   fs.writeFile(csvFileName, string, function(err, data) {
//     if (err) {
//       console.log("oh no!");
//       lastUploaded = csvFileName;
//       res.status(400).end();
//     } else {
//       console.log(csvFileName);
//       res.status(200).end();
//     }
//   });
// });
