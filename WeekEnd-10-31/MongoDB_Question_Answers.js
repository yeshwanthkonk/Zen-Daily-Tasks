//Product Queries
//collection---->products
//----------------------------------------------------------------------------------------
//Find all the information about each products
db.products.find().pretty();

//----------------------------------------------------------------------------------------
//Find the product price which are between 400 to 800
db.products.find({$and:[{"product_price":{$gt:400}},{"product_price":{$lt:800}}]}).pretty();

//----------------------------------------------------------------------------------------
//Find the product price which are not between 400 to 600
db.products.find({$or:[{"product_price":{$lt:400}},{"product_price":{$gt:600}}]}).pretty();

//----------------------------------------------------------------------------------------
//List the four product which are grater than 500 in price 
db.products.find({"product_price":{$gt:500}}).limit(4).pretty();

//----------------------------------------------------------------------------------------
//Find the product name and product material of each products
db.products.find({},{"product_name":1, "product_material": 1, "_id":0}).pretty();

//----------------------------------------------------------------------------------------
//Find the product with a row id of 10
db.products.find({"id":"10"}).pretty();

//----------------------------------------------------------------------------------------
//Find only the product name and product material
db.products.find({},{"product_name":1, "product_material": 1, "_id":0}).pretty();

//----------------------------------------------------------------------------------------
//Find all products which contain the value of soft in product material
db.products.find({"product_material":"Soft"}).pretty();

//----------------------------------------------------------------------------------------
//Find products which contain product color indigo  and product price 492.00
db.products.find({$and:[{"product_color":"indigo"},{"product_price":{$gt:492}}]}).pretty();

//----------------------------------------------------------------------------------------
//Delete the products which product price value are same
db.products.deleteOne({"product_price": 36})
//{ "acknowledged" : true, "deletedCount" : 1 }
db.products.deleteOne({"product_price": 47})
//{ "acknowledged" : true, "deletedCount" : 1 }
db.products.deleteOne({"product_price": 90})
//{ "acknowledged" : true, "deletedCount" : 1 }