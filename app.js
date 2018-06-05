const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'myproject'
const data = [
  {
    item: 'journal',
    qty: 25,
    size: { h: 14, w: 21, uom: 'cm' },
    status: 'A',
    tag: 'journal'
  },
  {
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A',
    tag: 'notebook'
  },
  {
    item: 'paper',
    qty: 100,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'D',
    tag: null
  },
  {
    item: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D',
    tag: null
  },
  {
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A',
    tag: null
  }
]

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err)
  console.log("Connected successfully to server")

  const db = client.db(dbName)
  // insertOneDocument(db, function(){
  //   client.close()
  // })

//   insertManyDocument(db, function(){
//     client.close()
//   })

  // findDocuments(db, function(){
  //   client.close()
  // })

  // findWhereDocuments(db, function(){
  //   client.close()
  // })

  // findOrWhereDocuments(db, function(){
  //   client.close()
  // })
  
  // findAndWhereDocuments(db, function(){
  //   client.close()
  // })

  // findWhereInDocuments(db, function(){
  //   client.close()
  // })

  // findOrWhereInDocuments(db, function(){
  //   client.close()
  // })

  // findAndWhereInDocuments(db, function(){
  //   client.close()
  // })

  // findWhereNotDocuments(db, function(){
  //   client.close()
  // })

  // findOrWhereNotDocuments(db, function(){
  //   client.close()
  // })

  // findAndWhereNotDocuments(db, function(){
  //   client.close()
  // })

  // findWhereNotInDocuments(db, function(){
  //   client.close()
  // })

  // findOrWhereNotInDocuments(db, function(){
  //   client.close()
  // })

  // findAndWhereNotInDocuments(db, function(){
  //   client.close()
  // })
  
  // findWhereBetweenDocuments(db, function(){
  //   client.close()
  // })

  // findOrWhereBetweenDocuments(db, function(){
  //   client.close()
  // })
  
  // findAndWhereBetweenDocuments(db, function(){
  //   client.close()
  // })
  
  // findWhereNullDocuments(db, function(){
  //   client.close()
  // })
  
  // findOrWhereNullDocuments(db, function(){
  //   client.close()
  // })
  
  // findAndWhereNullDocuments(db, function(){
  //   client.close()
  // })
  
  // findWhereNotNullDocuments(db, function(){
  //   client.close()
  // })

  // findOrWhereNotNullDocuments(db, function(){
  //   client.close()
  // })

  // findAndWhereNotNullDocuments(db, function(){
  //   client.close()
  // })
  
  // findWhereNotBetweenDocuments(db, function(){
  //   client.close()
  // })
  
  // findOrWhereNotBetweenDocuments(db, function(){
  //   client.close()
  // })
  
  // findAndWhereNotBetweenDocuments(db, function(){
  //   client.close()
  // })

  // count
  // db.collection('documents').find({}).count().then(function(rs){
  //   console.log(rs)
  // })

  // first
  // db.collection('documents').findOne({}).then(function(rs){
  //   console.log(rs)
  // })

  // db.collection('documents').aggregate([
  //   {$match: {qty: {$gt: 40}}},
  //   {
  //     $group: {
  //       _id: null, 
  //       total: {
  //         $sum: "$qty"
  //       }
  //     }
  //   }
  // ]).toArray(function(err, result){
  //     if(err){
  //       console.log(err)
  //     }
  //     console.log(result)
  //   })
})

var insertOneDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents')
  // Insert one documents
  collection.insertOne({a:2}, function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result.toJSON())
    callback(result)
  })
}

var insertManyDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents')
  // Insert one documents
  collection.insertMany(data).then(function(result){
    callback(result)
  })
}

// select * from documents
var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents')
  // Find all documents
  collection.find({}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from documents where status = 'A'
var findWhereDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({status: 'A'}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from documents where status = 'A' or qty = 100
var findOrWhereDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{status: 'A'}, {qty: 100}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from documents where status = 'A' and qty > 25
var findAndWhereDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({status: 'A',qty: {$gt: 25}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where qty in (25, 100)
var findWhereInDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({qty: {$in: [25, 100]}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'notebook' or qty in (25, 100)
var findOrWhereInDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{item: 'notebook'}, {qty: {$in: [25, 100]}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'journal' and qty in (25, 100)
var findAndWhereInDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({item: 'journal'}, {qty: {$in: [25, 100]}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where not qty > 70
var findWhereNotDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({qty: {$not: {$lt: 70}}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'journal' or not qty > 70
var findOrWhereNotDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{item: 'journal'}, {qty: {$not: {$lt: 70}}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'paper' and not qty > 70
var findAndWhereNotDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({item: 'paper'}, {qty: {$not: {$lt: 70}}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where not qty in (25, 100)
var findWhereNotInDocuments = function(db, callback) {
  var collection = db.collection('documents')
  // collection.find({qty: {$nin: [25, 100]}}).toArray(function(err, result){
  collection.find({qty: {$not: {$in: [25, 100]}}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'journal' or not qty in (25, 100)
var findOrWhereNotInDocuments = function(db, callback) {
  var collection = db.collection('documents')
  // collection.find({$or: [{item: 'journal'}, {qty: {$nin: [25, 100]}}]}).toArray(function(err, result){
  collection.find({$or: [{item: 'journal'}, {qty: {$not: {$in: [25, 100]}}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'paper' and not qty in (25, 100)
var findAndWhereNotInDocuments = function(db, callback) {
  var collection = db.collection('documents')
  // collection.find({item: 'paper'}, {qty: {$nin: [25, 100]}}).toArray(function(err, result){  
  collection.find({item: 'paper'}, {qty: {$not: {$in: [25, 100]}}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where qty between 50 and 100
var findWhereBetweenDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({qty: {$lte: 100, $gte: 50}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'journal' or qty between 50 and 100
var findOrWhereBetweenDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{item: 'journal'}, {qty: {$lte: 100, $gte: 50}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'paper' and qty between 50 and 100
var findAndWhereBetweenDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({item: 'paper'}, {qty: {$lte: 100, $gte: 50}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where tag is null
var findWhereNullDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({tag: {$type: 10}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'journal' or tag is null
var findOrWhereNullDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{item: 'journal'}, {tag: {$type: 10}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'paper' and tag is null
var findAndWhereNullDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({item: 'paper'}, {tag: {$type: 10}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'paper' or tag is not null
var findOrWhereNotNullDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{item: 'paper'}, {tag: {$not: {$type: 10}}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'journal' or tag is not null
var findAndWhereNotNullDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({item: 'journal'}, {tag: {$not: {$type: 10}}}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where qty not between 50 and 75
var findWhereNotBetweenDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{qty: {$lt: 50}}, {qty: {$gt: 75}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'notebook' or qty not between 50 and 75
var findOrWhereNotBetweenDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({$or: [{item: 'notebook'}, {$or: [{qty: {$lt: 50}}, {qty: {$gt: 75}}]}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}

// select * from document where item = 'paper' and qty not between 50 and 75
var findAndWhereNotBetweenDocuments = function(db, callback) {
  var collection = db.collection('documents')
  collection.find({item: 'paper'}, {$or: [{qty: {$lt: 50}}, {qty: {$gt: 75}}]}).toArray(function(err, result){
    if(err){
      console.log(err)
    }
    console.log(result)
    callback(result)
  })
}