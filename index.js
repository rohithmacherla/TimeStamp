//import required modules 
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//setup express applicaiton
var app = express();
//add imported middleware stuff
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.end(req.body);
});


app.listen(8080, function() {
    console.log("The Server is Currently Running.");
});
