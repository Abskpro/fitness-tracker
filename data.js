const aps = require('./script.js');
/*var obj = {
       table: []

};
obj.table.push({id: 1, square:2});*/
var json = JSON.stringify(aps);
var fs = require('fs');
fs.writeFile('myjsonfile.json', json, 'utf8', function(err){
    if(err){
        return console.log(err);
    }
    console.log("the file is saved");
});

