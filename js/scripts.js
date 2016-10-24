var suits =["clubs", "diamonds", "spaces", "hearts"];
var faceValue =["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
var cards = [];

suits.forEach(function(suits){
  faceValue.forEach(function (value){
    cards.push(value + " of " + suits);
  });
});


$(document).ready(function() {
  $("form").submit(function(event) {

     cards.forEach(function (card){
       $("ul").append("<li>" + card + "</li>");
     });
     $("#result").fadeIn();
    event.preventDefault();
  });
});
