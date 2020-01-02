DROP DATABASE IF EXISTS gamazonProducts;
CREATE DATABASE IF NOT EXISTS gamazonProducts;

USE gamazonProducts;

CREATE TABLE product_description(
  id INT PRIMARY KEY,
  productName VARCHAR(100),
  productMaker VARCHAR(100),
  productDesc VARCHAR(500),
  productPrice DECIMAL(10,2),
  productRating DECIMAL(2,1),
  productNumOfRatings INT,
  productNumOfQuestionsAnswered INT,
  productCategory VARCHAR(100)
);
