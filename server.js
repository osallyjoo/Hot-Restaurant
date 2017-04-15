var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());

//Reservations
var reservations = [{
	customerName: "test",
	phoneNumber: "test#",
	customerEmail: "testEmail",
	customerID: "testID"

}]
//Waitlist
var waitlist = [{
	customerName: "test",
	phoneNumber: "test#",
	customerEmail: "testEmail",
	customerID: "testID"
}]

//Home page request
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname, "home.html"));
});

// Routes
// =============================================================

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
	return res.json(reservations);
});

app.get("/api/:waitlist?", function(req,res){
	resturn res.json(waitlist);
});

app.post("/api/new", function(req,res){
	var newReservation = req.body;

	res.json(newReservation);
})

//Listener
app.listen(PORT, function(){
	console.log("App listening on PORT "+PORT);
});


