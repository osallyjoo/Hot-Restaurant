var numberReservations = 0;
var numberWaitlist = 0;
 
 // Takes values from  the form
    $("#submitReservation").on("click", function(event) {
      event.preventDefault();
      var newReservation = {
        name: $("#name").val().trim(),
        phoneNumber: $("#phoneNumber").val().trim(),
        email: $("#email").val().trim(),
        uniqueId: $("#uniqueId").val().trim()
      };

      // POSTs to server
      $.post("/api/reserve", newReservation)
      .done(function(data) {
        console.log(data);
        alert("Adding Reservartion...");
      });
    });

$("#viewTable").on("click", function(){

});

//appends current reservations 
$.get("/api/tables?", function(data) {
  console.log(data);
  if(data) {
    for(var i = 0; i < data.length; i++){
      numberReservations++
      var reservations = $("<div class='panel-body border displayArts'>")
      .append( $("<i class='label label-primary divNum'>").text(numberReservations) )
      .append( $("<h3 class='headline'>").text(data.customerID);
    $("#currentReservations").append(reservations);
    }
  }

});

//appends waitlist
$.get("/api/waitlist", function(data) {
  console.log(data);
  if(data) {
    for(var i = 0; i < data.length; i++){
      numberWaitlist++
      var waitlist = $("<div class='panel-body border displayArts'>")
      .append( $("<i class='label label-primary divNum'>").text(numberWaitlist) )
      .append( $("<h3 class='headline'>").text(data.customerID);
    $("#waitingList").append(waitlist);
    }
  }

});