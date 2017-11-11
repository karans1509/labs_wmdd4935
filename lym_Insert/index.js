const mongo = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, (err, db)=>{
    if(err) {
        console.log(err);
    }
    let docs = db.collection('docs');

    let newDoc = {
        firstName : process.argv[2],
        lastName : process.argv[3]
    }

    docs.insert(newDoc, (err, data)=>{
        if(err) {
            console.log(err);
        }
        console.log(JSON.stringify(newDoc));
        db.close();  
    })
})