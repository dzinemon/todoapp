// count total todos
function countTotal() {
  $('#total').text($('ul li').length);
}
// count checked todos
function countChecked() {
  $('#checked').text($('ul li.completed').length);
  if ($('#total').text() === $('#checked').text() && $('#total').text() !== '0') {
    $('#done strong').text('Awesome! All done!');
  } else {
    $('#done strong').text('');
  }
}
// toggle checked todo
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
  countChecked();

});

// Click on X to delete TODO
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// Add todo when hit enter
$('input[type=text]').keypress(function(event){
  if (event.which === 13) {
    // grab todo text from value
    var toDoText = $(this).val();
    // remove the value from the input field
    $(this).val('');
    // create a new li and add to the end of ul
    $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + toDoText + '</li>');
    countTotal();
  }
});
// Show/hide input form
$('h1 span').on('click', function(e){
  $('input[type=text]').fadeToggle();
});

