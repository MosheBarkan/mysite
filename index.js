var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)))
app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname })
  console.log("started");
})

app.get('/api/listUsers', function (req, res) {
  fs.readFile(__dirname + '/api/' + 'users.json', 'utf8', function (err, data) {
    res.end(data);
  })
});



app.listen(3000, function () {
  console.log('app listening on port 3000!');
});

