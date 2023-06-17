$(function() {
  $('#change-color').on('click', function(){
    $('#target').css('color', 'blue');
  });
});

$(function(){
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
});

$(function(){
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
});

$(function(){
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});