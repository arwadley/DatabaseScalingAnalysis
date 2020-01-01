module.exports = {
  generateTestData
};

const faker = require("faker");

function generateTestData(userContext, events, done) {
  // generate data with Faker:
  let id = Math.floor(Math.random() * (11000100 - 10000100)) + 10000100;
  let productName = faker.random.word();
  let productMaker = faker.random.words(2);
  let productDesc = faker.random.words(10);
  let productPrice = (id % 500) * 1.01;
  let productRating = (id % 5) * 1.0;
  let productNumOfRatings = (id % 500) + 12;
  let productNumOfQuestionsAnswered = (id % 300) + 3;
  let productCategory = faker.random.words(2);
  userContext.vars.id = id;
  userContext.vars.productName = productName;
  userContext.vars.productMaker = productMaker;
  userContext.vars.productDesc = productDesc;
  userContext.vars.productPrice = productPrice;
  userContext.vars.productRating = productRating;
  userContext.vars.productNumOfRatings = productNumOfRatings;
  userContext.vars.productNumOfQuestionsAnswered = productNumOfQuestionsAnswered;
  userContext.vars.productCategory = productCategory;
  // continue with executing the scenario:
  return done();
}
