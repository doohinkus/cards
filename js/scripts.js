$(document).ready(function() {
  $("#blanks form").submit(function(event) {
   var inputs =["name", "adjective", "noun"];

   inputs.forEach(function(input) {
     var value = $("#"+input).val();
     $("."+input).text(value);
   })
    $("#letter").show();
    event.preventDefault();
  });
});
