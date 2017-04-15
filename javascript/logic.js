
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