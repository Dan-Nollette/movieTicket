// Business Logic
function Party(youths, adults, seniors, title, time){
  this.youths = youths;
  this.adults = adults;
  this.seniors = seniors;
  this.title = title;
  this.time = time;
}

Party.prototype.discounted = function() {
  if ((this.title === "Pirates of the Caribbean: Dead Men Tell No Tales" || this.title === "Guardians of the Galaxy Vol. 2") || (this.time === "12:00 p.m." || this.time === "2:40 p.m.")) {
    return true;
  } else {
    return false;
  }
}

Party.prototype.partyDetails = function() {
  var discounted;
  if (this.discounted()) {
    discounted = (this.seniors + this.youths + this.adults);
    return "Your order is for: " + (discounted) + " discounted tickets." +
    "</p><p>$" + (discounted * 6.00) + " = $6.00 x " + (discounted) + " discounted price tickets." +
    "</p><p>$" + (discounted * 6.00) + " = Total Price."
  } else {
    discounted = this.seniors + this.youths;
    return "Your order is for: " + this.adults + " full price tickets and " + discounted + " discounted tickets." +
    "</p><p>$" + (this.adults * 10.50) + " = $10.50 x " + this.adults + " full price tickets." +
    "</p><p>$" + (discounted * 6.00) + " = $6.00 x " + discounted + " discounted price tickets." +
    "</p><p>$" + (this.adults * 10.50 + discounted * 6.00) + " = Total Price."
  }
}


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

Ticket.prototype.fullDetails = function() {
  return "You are " + this.age + " and you want to see \"" + this.title + "\" at " + this.time + "</p><br><p> Your ticket will cost " + this.price();
}



// User Interface Logic
$(document).ready(function() {
  $("#ticket-preference").submit(function(event) {
    event.preventDefault();
    var youths = parseInt($("#youth").val());
    var adults = parseInt($("#adult").val());
    var seniors = parseInt($("#senior").val());

    var title = $("#movie-title").val();
    var time = $("#movie-time").val();
    var newParty = new Party(youths, adults, seniors, title, time);
    //newParty.price();
    $("#price").text("");
    $(".price").append(newParty.partyDetails());
  });
});
