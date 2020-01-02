// Originally used in index.js to leverage the server for data creation.
app.get("/fs", (req, res) => {
  dbPG.pullitemNamesForTest(function(error, result) {
    if (error) {
      res.status(400).send();
    } else {
      let string = "productName\n";
      for (let i = 0; i < result.length; i++) {
        string += result[i].productname + "\n";
      }
      let path =
        "/Users/alyssawadley/Documents/GitHub/product-description/ArtilleryTesting/testProductNames.csv";
      fs.writeFile(path, string, function(err, data) {
        if (err) {
          console.log("oh no!");
          res.status(400).end();
        } else {
          res.status(200).end();
        }
      });
    }
  });
});

// helper function used to create data and write to csv files
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
