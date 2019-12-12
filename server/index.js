const express = require("express");
const path = require("path");
let app = express();
// const port = process.env.PORT;
const port = 7777;
const db = require("../database/index.js");
// const axios = require("axios");

app.use(express.static(path.join(__dirname, "../public/dist")));
app.use(express.json());

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

// app.get(`products/:id`, (req, res) => {
//   let id = req.params.id;
//   console.log(id);
//   db.getProduct(id, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(results);
//     }
//   });
// });

app.listen(port, console.log(`Listening on port ${port}...`));
