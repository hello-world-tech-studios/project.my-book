$(document).ready(function(){
  console.log("The page has loaded!!")
  var form = $("#panels");
  console.log(form)
  form.submit(function( event ) {
    event.preventDefault();
    console.log("Form was submitted");
    var name = $("#postName").val();
    var comment = $("#postText").val();
    console.log(name)
    console.log(comment)
    $("#messageStorage").append("<li class='message-box'><span class='name'> "+ name + "</span> "+ comment +" </li>");
    document.getElementById("formInput").reset();
  })
});