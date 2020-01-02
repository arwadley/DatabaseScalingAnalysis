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

app.get("/itemNameMongo", (req, res) => {
  let itemName = req.query.itemName;
  mDB.getItemByName(itemName, function(error, result) {
    if (error) {
      res.status(404).send();
    } else {
      res.status(200).send(result);
    }
  });
});

app.put("/itemMongo", (req, res) => {
  let updatedFields = req.body;
  let id = updatedFields.id;
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
