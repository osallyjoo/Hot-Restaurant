var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());




//Home page request
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname, "home.html"));
});

//Reservation page request
app.get("/reserve", function(req,res){
	res.sendFile(path.join(__dirname,"reserve.html"));
});

//view table page request
app.get("/tables", function(req,res){
	res.sendFile(path.join(__dirname, "tables.html"));
});

//API call to get the tables
app.get("/api/:tables?", function(req,res){
	return res.json(tables);
});

//Listener
app.listen(PORT, function(){
	console.log("App listening on PORT "+PORT);
});

