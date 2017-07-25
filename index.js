//import required modules 
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//setup express applicaiton
var app = express();
//add imported middleware stuff
//app.use(bodyParser.json());
//app.use(cors());

app.get('/',function(req, res) {
    res.end("Hello World");
});


app.get('/:id', function(req, res) {
    var id = req.params.id;
    var obj = {};
    if(isNaN(id)) {
        //check if valid natural language date
        //if not valid, return null.
        //if valid then output unix and natrual language time
        var array_values = id.split(' ');
        var month = array_values[0];
        var day = array_values[1];
        var year = array_values[2];
        obj.natural = month + " " + day +", " + year;
        obj.unix = new Date(obj.natural).getTime();
    } else {
        //check if valid unix time stamp
        //if not valid return null
        //if valid, then output unix and natural language time 

    }


    res.json(obj);
});

app.listen(8080, function() {
    console.log("The Server is Currently Running.");
});
