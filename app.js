$(document).ready(function(){

//APPEND THE NEW LIST ITEMS TO THE OL WHEN SUBMIT IS CLICKED
$("#submitButton").click(function(event){
  event.preventDefault();
  var input = $("#inputBox");
$("#mainList").append('<li>' + input.val() + '<button class="remove"> X </button></li>');
  if(input.val() == null){
    console.log("Please enter a value");
  };
});

//REMOVES ITEMS WHEN X IS CLICKED ON
$(document).on('click', '.remove', function(event){
  event.preventDefault();
  $(this).parent().fadeOut("slow");
});

 //CLEARS THE INPUT BOX WHEN SUBMIT IS PRESSED AND FOCUSES BACK ON THE INPUT BOX
$(document).on('click', '#submitButton', function(event){
  event.preventDefault();
  $("#inputBox").val("");
  $("#inputBox").focus();
});

//CLEARS THE LIST WITH THE CLEAR ALL ITEMS BUTTON
$("#removeAll").click(function(){
  $(".remove").fadeOut("slow");
});

//USE THE PLUG-IN TO MAKE THE LIST SORTABLE BY CLICKING AND DRAGGING
$( function() {
  $( ".sortable" ).sortable();
  $( ".sortable" ).disableSelection();
  } );

//Events are bound on page load so newly added element aren't so this wont work
// $(".remove").click(function(event){
//   event.preventDefault();
//   $(this).parent().remove();
// });

});
