const express = require("express");
const path = require("path");
var app = express();
const port = 7777;
const db = require("../database/index.js");

app.use(express.static(path.join(__dirname, "../public/dist")));
app.use(express.json());

app.get("/allProducts", (req, res) => {
  db.getAllProducts((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.get(`/:id`, (req, res) => {
  let id = req.params.id;
  db.getProduct(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, console.log(`Listening on port ${port}...`));
