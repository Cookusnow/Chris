$.ajax({
  url: something,
  method: something
})
.done(cb())
.fail(cb())


$(document).ready(function(){
  $.ajax({
    url: todoUrl,
    method: "GET"
  })
  .done(function(dataObj){
    
  })
  .fail(cb())
})


$("input").keypress(function(event) {
    if (event.which === 13 && $(this).val() !== "") {
      var todoItem = $(this).val();
      $("ul").append(
        "<li>" +
          todoItem +
          "<span>" +
          "<i class='far fa-trash-alt'></i>" +
          "</span>" +
          "</li>"
      );
      $("input").val("");
    }
  });
  
  $("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
  });
  
  $("ul").on("click", "span", function(event) {
    $(this)
      .parent()
      .remove();
  });