var fs = require('fs');
var http = require('http');
var url = "mongodb://localhost:27017/"
var MongoClient = require('mongodb').MongoClient;

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'index.html'});
}).listen(8080);

//   MongoClient.connect(url,{ useNewUrlParser : true },function(err,db){
//      if(err) throw err;
//       console.log("database created");
//   });
