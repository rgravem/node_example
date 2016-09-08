var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser');
var urlencodedparser = bodyParser.urlencoded( {extended: false } );
var portDecision = process.env.PORT || 3000;


app.listen( portDecision, function(){
  console.log('server is listening on port 3000');
});

//base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile( path.resolve('public/index.html'));
}); // end base url

// post URL for AJAX call
// requires bodyParser's urlencodedparser

app.post('/texter', urlencodedparser, function(req, res){
  console.log('texter hit', req.body);
  res.send('you sent a ' + req.body.creature );
});

// use 'public' as a static resource
app.use(express.static('public'));
