var parser = require('xml2json');
var fs = require('fs');

fs.readFile( './metadata.xml', function(err, data) {
    var json = parser.toJson(data);
    fs.writeFile('metadata.json', json, 'utf8', function(){});
 });
