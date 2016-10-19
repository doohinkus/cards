$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    $(".name1").text(name1Input);
    $("#letter").show();
    event.preventDefault();
  });
});
