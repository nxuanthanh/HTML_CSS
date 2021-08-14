// Move on Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
      $('#moveontop-btn').fadeIn();
    }
    else{
      $('#moveontop-btn').fadeOut();
    }
});

$('#moveontop-btn').click(function() {
  $('html, body').animate({scrollTop: 0}, 1500);
});