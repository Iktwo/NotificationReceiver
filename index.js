var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var http = require('https');

app.get('/', function (req, res) {
  res.send('Nothing to see here');
});

app.post('/notification', function (req, res) {
  // console.log(Object.keys(req.body));
  if (req.body.hasOwnProperty("title") && req.body.hasOwnProperty("text") && req.body.hasOwnProperty("packagename")) {
    console.log("Title: ", req.body.title + " - " + req.body.text + " - "+ req.body.packagename);
  }

  res.status(200).send("{}");
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
