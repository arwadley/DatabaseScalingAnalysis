const pgp = require("pg-promise")({
  capSQL: true
});

const postgresPassword = require("../config.js");

var db = pgp(
  `postgres://postgres:${postgresPassword}@host:5432/gamazonProducts`
);

module.exports.db = db;
