
// on scroll, Hamburger Menu revealed
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.hamburger_menu a').fadeIn();
  } else {
    $('.hamburger_menu a').fadeOut();
  }
});
