
var express = require('express');
var app = express();

app.use(express.static("App"));

app.get('/', function (req, res) {
    console.log("server request");
    res.redirect('/');
});

app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");
