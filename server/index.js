const express = require("express");
const path = require("path");
var app = express();
const port = 7777;
const db = require("../database/index.js");

app.use(express.static(path.join(__dirname, "../public/dist")));

app.use(express.json());

app.listen(port, console.log(`Listening on port ${port}...`));
