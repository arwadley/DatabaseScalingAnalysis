require("newrelic");
const express = require("express");
const path = require("path");
let app = express();
const port = 7777;
let morgan = require("morgan");
let fs = require("fs");

let cors = require("cors");
app.use(cors());

const dbPG = require("../database/postgresIndex.js");
// let mDB = require("../database/mongoIndex");

app.use(express.static(path.join(__dirname, "../public/dist")));
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

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

app.get("/itenNamePG", (req, res) => {
  let itemName = req.query.itemName;
  dbPG.getItemByName(itemName, function(error, result) {
    if (error) {
      res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
});

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
      console.log(error);
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
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(port, console.log(`Listening on port ${port}...`));
