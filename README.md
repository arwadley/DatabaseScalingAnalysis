# Database Scaling Analysis
### Stack: Node JS/ Express / Mongo / PostgreSQL

# Objectives:
### 1.) Scale a legacy full stack web server from 100 to 10 million items. 
### 2.) Test and compare a SQL and NoSQL database option for efficiency with the given data set.
### 3.) Stress test and optimize GET and POST routes for high traffic. 

# Process:
### I wrote a script to create 10 million randomly generated items fitting the required data structure and write them to CSV files using the Node JS file system. 
### This pre-made data allowed me to populate a PostgreSQL and MongoDB datases with the same data set for accurate comparison.
### Used Morgan logging middleware to compile baseline average response times for GET, PUT, POST, and DELETE routes for a single query on both databses.
### Utilized Artillery to stress test and compile latency and RPS data on GET and POST routes throughout optimization process. 

# Results:
### 1.) BaseLine Testing results from Morgan logging middleware:
#### Mongo and PostgreSQL had very similar results for the GET routes, but Mongo was significantly faster on PUT, POST, and DELETE routes. It appeared data look-up was equivalent between the two, but Mongo was faster on data manipulation of already existing data. I suspect this is because of its document structure, rather than having to modify a table structure. ,
### 2.) The Importance of Indexing: 
#### It is well known that indexing a column or field will produce faster query times. However, I wanted to see if I could quantify that benefit. It ended up being more significant than I anticipated. 
#### In the artillery testing with the Mongo database, I tested a query on item name before and after indexing that field. 
#### Before, the testing began to error out on a mere 10 RPS sustained for 60 seconds, with a median latency of 96850 ms.
#### After indexing the column, a GET request was able to produce 520 RPS with a median latency of 7.4 ms. 
### 3.) Benefits of Pooling:
#### I implemented pooling on my PostgreSQL database, which gave it a significant performance boost on the GET route. 
#### Results are from Artillery testing 1000 requests fired and sustained for 60 seconds. 
#### Before pooling: 547.35 RPS with median latency of 8 ms.
#### After pooling: 970.09 RPS with median latency of 2.8 ms.
