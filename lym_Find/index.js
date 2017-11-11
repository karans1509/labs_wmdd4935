const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db){

    db.collection('parrots').find({age : { $gt : parseInt(process.argv[2]) } }).toArray((err, documents)=>{
         console.log(documents);
         db.close();
    });
})