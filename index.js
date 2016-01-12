var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter', orientation: 'landscape' };

var express = require('express');
var app = express();
var html = fs.readFileSync('./page.html', 'utf8');


app.get('/', function (req, res) {
  page = "<a href='/html'>html</a><br><a href='/pdf'>pdf</a>"
  res.send(page);
});

app.get('/pdf', function (req, res) {
  pdf.create(html, options).toBuffer( function (err, buf) {
    res.contentType("application/pdf");
    res.send(buf);
    // res.send('hello world!')
  });
});

app.get('/html', function (req, res) {
   
  res.send(html);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});