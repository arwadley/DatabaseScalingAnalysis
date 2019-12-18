const faker = require("faker");

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
  current.NumOfQuestionsAnswered = Math.floor(Math.random() * Math.floor(300));
  current.productCategory = faker.random.words(3);
  array.push(current);
}
console.log(array.length);
