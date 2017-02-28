// Back End
function Ticket (movie, time, age) {
  this.price = 10;
  this.movie = movie;
  this.time = getTimeCategory(time);
  this.age = age;
}

var getTimeCategory = function(timeStr){
  var timeRegEx = /(\d+):(\d+)/;
  var parsedHour = parseInt(timeStr.replace(timeRegEx, '$1'));
  if(parsedHour<16){
    return "Matinee";
  } else if (parsedHour>=23){
    return "Midnight";
  } else{
    return "Prime-time"
  }
}

Ticket.prototype.getMovieDiscount = function() {
  if ((this.movie === 1) || (this.movie === 4)) {
    this.price --;
  }
  if (this.time === "Matinee") {
    this.price --;
  } else if (this.time === "Midnight") {
    this.price ++;
  }
  if ((this.age < 18) || (this.age >= 65)) {
    this.price --;
  }
}




// Front End
$(function(){
  $("form#movieInput").submit(function() {
    event.preventDefault();
    var movieInput = parseInt($("#movieSelector").val());
    var timeInput = $("#timeSelector").val();
    var ageInput = $("#ageSelector").val();
    var timeCategory = getTimeCategory(timeInput);
    var userTicket = new Ticket(movieInput, timeInput, ageInput);
    console.log(userTicket.price);
    console.log(userTicket.getMovieDiscount());
    console.log(userTicket.price);
  });
});
