var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.get('/',function(req, res) {
    res.end("Hello World");
});

app.get('/:id', function(req, res) {
    var id = req.params.id;
    var obj = {};
    if(isNaN(id)) {
        var array_values = id.split(' ');
        var month = convertMonth(array_values[0]);
        var day = array_values[1];
        var year = array_values[2];
        var natural = month + " " + day +" " + year;
        var unix = new Date(natural).getTime();
        if(0 < unix && unix < (new Date()).getTime()) {
            obj.unix = unix/1000;
            obj.natural = natural;
        } else {
            obj.natural = null;
            obj.unix = null;
        }
    } else {
        id = Number(id);
        if(id > 0 && (new Date()).getTime() > id) {
            obj.unix = id;
            var formated_date = new Date(id*1000).toString().substring(4,15);
            var longhand_month = convertMonth(formated_date.substring(0, 3));
            obj.natural =longhand_month +" "+ formated_date.substring(4);
        } else {
            obj.natural = null;
            obj.unix = null;
        }
    }
    res.json(obj);
});


function convertMonth(shorthand) {
    switch (shorthand.toLowerCase()) {
        case "jan":
            return "January";
        case "feb":
            return "February";
        case "mar":
            return "March";
        case "apr":
            return "April";
        case "jun":
            return "June";
        case "jul":
            return "July";
        case "aug":
            return "August";
        case "sep":
            return "September";
        case "oc":
            return "October";
        case "nov":
            return "November";
        case "dec":
            return "December";
        default:
            return shorthand;
    }
}

app.listen(8080, function() {
    console.log("The Server is Currently Running.");
});
