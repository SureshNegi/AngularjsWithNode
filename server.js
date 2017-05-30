
var express = require('express');
var app = express();

app.use(express.static("App"));

app.get('/', function (req, res) {
    console.log("server request");
    res.redirect('/');
});
app.post('/addUser', function (req, res) { 
    var arr = [], fileName = "file.json";
    fs = require('fs');
    var obj = fs.readFileSync(fileName, 'utf8');
    console.log("length=="+obj.length);
    if (obj.length<10) {
        console.log("no data");
    }
    else {
        arr =JSON.parse(obj);    
    }
    var body = '';
    filePath = 'helloworld.json';
    req.on('data', function (data) {
       body += data;      
    });

    req.on('end', function () {
        arr[arr.length] = body;
        fs.writeFile('file.json',JSON.stringify(arr), 'utf8'); 
        var str=JSON.stringify(arr);
        //res.end('{"msg": "OK"}');
        res.end(str);
    });
});
app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");
