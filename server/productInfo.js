const faker = require("faker");
var string = "";
for (let i = 0; i < 500000; i++) {
  let id = i;
  let productName = faker.random.word();
  let productMaker = faker.random.words(3);
  let productDesc = faker.random.words(15);
  let productPrice = (i % 500) * 1.01;
  let productRating = (i % 5) * 1.0;
  let productNumOfRatings = (i % 500) + 12;
  let productNumOfQuestionsAnswered = (i % 300) + 3;
  let productCategory = faker.random.words(3);
  string +=
    "" +
    id +
    ", " +
    productName +
    ", " +
    productMaker +
    ", " +
    productDesc +
    ", " +
    productPrice +
    ", " +
    productRating +
    ", " +
    productNumOfRatings +
    ", " +
    productNumOfQuestionsAnswered +
    ", " +
    productCategory +
    "\n";
}
