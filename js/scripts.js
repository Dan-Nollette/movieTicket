// Business Logic

function Ticket(age, title, time){
  this.age = age;
  this.title = title;
  this.time = time;
}

Ticket.prototype.price = function() {
  if ((this.age === "Youth (12 and Under)" || this.age === "Senior (55+)") || (this.title === "Pirates of the Caribbean: Dead Men Tell No Tales" || this.title === "Guardians of the Galaxy Vol. 2") || (this.time === "12:00 p.m." || this.time === "2:40 p.m.")){
    return "$6.00";
  } else {
    return "$10.50";
  }
}





// User Interface Logic
$(document).ready(function() {
  $("#ticket-preference").submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();
    var title = $("#movie-title").val();
    var time = $("#movie-time").val();
    var newTicket = new Ticket(age, title, time);
    newTicket.price();
    // // var output = discountCalc(age, title, time)
    // $("#price").text("");
    // $("#price").append("Your price will be:" + output);
  });
});
