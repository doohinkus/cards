$(document).ready(function() {
  $("form.form-inline").submit(function(event) {

   var inputs =["item1", "item2", "item3"];
   var list = [];

console.log($("#item1").val());
   inputs.forEach(function(input) {
     var value = $("#"+input).val();
     list.push(value);
     console.log(value);
   });
   var upperCaseList = list.map(function(item){
     return item.toUpperCase();
   });
   upperCaseList = upperCaseList.sort();
   console.log(upperCaseList);
   upperCaseList.forEach(function (listItem){
     $("ul").append("<li>" + listItem + "</li>");
   });

    $("#finallist").show();
    event.preventDefault();
  });
});
