const mongo = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function (err, db) {

    db.collection('parrots').find({ age: { $gt: parseInt(process.argv[2]) } }, { name: 1, age: 1, _id: 0 })
        .toArray((err, docs) => {
          console.log(docs);
          db.close();
        })
})