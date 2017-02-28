// Back End
function Ticket (price, movie, time, age) {
  this.price = price;
  this.movie = movie;
  this.time = getTimeCategory(time);
  this.age = age;
}

var getTimeCategory = function(timeStr){
  var timeRegEx = /(\d+):(\d+)/;
  var parsedHour = parseInt(timeStr.replace(timeRegEx, '$1'));
  console.log(parsedHour);
  if(parsedHour<16){
    return "Matinee";
  } else if (parsedHour>=23){
    return "Midnight";
  } else{
    return "Prime-time"
  }
}




// Front End
$(function(){
  $("form#movieInput").submit(function() {
    event.preventDefault();
    var movieInput = $("#movieSelector").val();
    var timeInput = $("#timeSelector").val();
    var ageInput = $("#ageSelector").val();
    var timeCategory = getTimeCategory(timeInput);
    console.log(timeCategory);
  });
});
