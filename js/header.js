$(window).scroll(function () {
  if($(window).scrollTop() > 1350) {
    $('#gnav_list').addClass('is-animated');
  } else {
    $('#gnav_list').removeClass('is-animated');
  }
});