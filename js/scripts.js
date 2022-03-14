function Show(location, landmarks, toy){
  this.location = location;
  this.landmarks = landmarks;
  this.toy = toy;
}
Show.prototype.fullDestination = function(){
  return this.location + " " + this.landmarks + " " + this.toy;
}

$(document).ready(function(){
  $("form#destination").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedToy = $("input#time-of-year").val();

    var newShow = new Show(inputtedLocation, inputtedLandmarks, inputtedToy);

    $("ul#shows").append("<li><span class='show'>" + newShow.fullDestination() + "</span></li>");
    $("input#location").val();
    $("input#landmarks").val();
    $("input#time-of-year").val();
  });
});