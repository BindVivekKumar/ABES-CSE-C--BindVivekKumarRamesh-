const promise=require('promise');
const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost/TestDB';
MongoClient.connect(url).then(function(err,db){
  db.collection('Test').updateOne({
    "Name":"Joe"
  },{
    $set:{
      "Name":"Beck"
    }
  });
}).catch(err=>alert(err.message))