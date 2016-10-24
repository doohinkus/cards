var sentenceArray = [];
var bigWords = [];





$(document).ready(function() {
  $("form").submit(function(event) {
  sentenceArray = $("#sentence").val().split(" ");
  bigWords = sentenceArray.map(function (word){
   var wordLength = word.length;
   if(wordLength >= 3){
     return word;
   }
  }).reverse().join(" ");


    $("#result").text(bigWords).fadeIn();
    event.preventDefault();
  });
});
