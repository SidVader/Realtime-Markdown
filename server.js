var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
s
app.use(express.static(__dirname + '/public'));

// routes for app
app.get('/', function(req, res) {
  res.render('pad');
});

// listen on port 8000 (for localhost)
var port = process.env.PORT || 8000;
app.listen(port);