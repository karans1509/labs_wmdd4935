const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, (err, db)=>{
	let collec = db.collection('users');
	collec.update({ username : "tinatime" }, { $set : { age : 40 } }, (err, data)=>{
     db.close();
	})
})